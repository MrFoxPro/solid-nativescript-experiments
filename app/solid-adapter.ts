import { Button, Color, LayoutBase } from "@nativescript/core";
import { run } from "@nativescript/core/application";
import { render } from "./renderer";

function createDefaultView(AppComponent: any, rootView) {
    rootView.backgroundColor = new Color(125, 0, 231, 252);
    const button = new Button();
    button.text = "Rerender!";
    button.backgroundColor = new Color("red");

    button.height = {
        unit: "px",
        value: 175,
    };
    button.width = {
        unit: "px",
        value: 595,
    };
    //  button.marginTop = {
    //      unit: "px",
    //      value: 200,
    //  };
    button.on("tap", () => {
        console.log("hi!");
        createDefaultView(AppComponent, new LayoutBase());
    });
    rootView.addChild(button);
    console.log("rendering nativescript....");

    render(AppComponent, rootView);
   //  setTimeout(() => {
   //      hydrate(AppComponent, rootView);
   //  }, 500);
    // This synchronously passes the root view to NativeScript.
    return rootView;
}
export function runSolidNative(AppComponent: any, rootView = new LayoutBase()): void {
    run({
        create: () => createDefaultView(AppComponent, rootView),
    });
}
