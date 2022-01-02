// @ts-nocheck
import * as NSComponents from "@nativescript/core";
import { LayoutBase } from "@nativescript/core";
import { createRenderer } from "solid-js/universal";

const availableComponents = Object.values(NSComponents)
    .filter((x) => x && x.prototype && x.prototype instanceof NSComponents.ViewBase)
    .reduce((p, c) => {
        return { ...p, [c.name.toLowerCase()]: c };
    }, {});

function isView(view) {
    return view instanceof NSComponents.View;
}

function isLayout(view) {
    return view instanceof NSComponents.LayoutBase;
}
function isContentView(view) {
    return view instanceof NSComponents.ContentView;
}

export const {
    render,
    effect,
    memo,
    createComponent,
    createElement,
    createTextNode,
    insertNode,
    insert,
    spread,
    setProp,
    mergeProps,
} = createRenderer<NSComponents.View>({
    createElement(tag) {
        console.log("createElement", tag);
        tag = tag.toLowerCase();
        if (availableComponents.hasOwnProperty(tag)) {
            return new availableComponents[tag]();
        }
        console.warn("Wrong tag", tag);
        const defaultText = new NSComponents.TextView();
        defaultText.text = "WRONG TAG " + tag;
        return defaultText;
    },
    createTextNode(value) {
        console.log("createTextNode", value);
        const node = new NSComponents.Label();
        node.text = value;
        return node;
    },
    replaceText(textNode, value) {
        console.log("replaceText", textNode, value);
        if (textNode instanceof NSComponents.TextView) textNode.text = value;
        else {
            console.warn("Cant change text on tag", textNode.typeName);
        }
    },
    setProperty(node, name, value) {
        console.log("setProperty", node, name, value);
        if (name in node) {
            node[name] = value;
        } else if (name.startsWith("on")) {
            node.on(name.substring(2), value);
        } else {
            console.warn(`Node ${node.typeName} doesn't have property ${name}`);
        }
    },
    insertNode(parent, child, anchor) {
        console.log("insertNode", parent, child, anchor);
        if (parent instanceof LayoutBase) {
            parent.addChild(child);
            console.log("created element", child, "in parent", parent);
        }
        if (!parent) {
            console.warn("insertNode: no parent!", child, anchor);
            return;
        }
    },
    isTextNode(node) {
        console.log("isTextNode", node);

        return node instanceof NSComponents.Label;
    },
    removeNode(parentNode, childNode) {
        console.log("removeNode", parentNode, childNode);
        if (!parentNode) {
            return;
        }

        if (parentNode.meta && typeof parentNode.meta.removeChild === "function") {
            return parentNode.meta.removeChild(parentNode, childNode);
        }

        if (childNode.meta.skipAddToDom) {
            return;
        }

        const parentView = parentNode.nativeView;
        const childView = childNode.nativeView;

        if (isLayout(parentView)) {
            parentView.removeChild(childView);
        } else if (parentView instanceof NSComponents.ContentView) {
            if (parentView.content === childView) {
                parentView.content = null;
            }

            if (childNode.nodeType === 8) {
                parentView._removeView(childView);
            }
        } else if (parentView instanceof NSComponents.View) {
            parentView._removeView(childView);
        } else {
            // throw new Error("Unknown parent type: " + parent);
        }
    },
    getParentNode(node) {
        console.log("getParentNode", node);
        return node.parentNode as NSComponents.View;
    },
    getFirstChild(node) {
        console.log("getFirstChild", node);
        if (node instanceof NSComponents.LayoutBase) {
            return node.getChildAt(0);
        }
        return null;
    },
    getNextSibling(node) {
        console.log("getNextSibling", node);
        if (node.parent instanceof NSComponents.LayoutBase) {
            return node.parent.getChildAt(node.parent.getChildIndex(node));
        }
        return null;
    },
});

// Forward Solid control flow
export { For, Show, Suspense, SuspenseList, Switch, Match, Index, ErrorBoundary } from "solid-js/dist/dev";
