import { createSignal, createEffect, createMemo, onMount, createRenderEffect } from "solid-js/dist/dev";
// import { effect, memo } from "./renderer";

export function App() {
    onMount(() => {
        console.log("App mounted");
    });
    return <HelloWorld />;
}
function HelloWorld() {
    onMount(() => {
        console.log("HelloWorld mounted");
    });
    const [counter, setCounter] = createSignal(0);
    const m = createMemo(
        () =>
            [
                "https://www.solidjs.com/img/logo/with-wordmark/logo.png",
                "https://www.solidjs.com/img/logo/wordmark/logo.png",
                "https://www.solidjs.com/img/logo/dark-with-wordmark/logo.png",
                "https://www.solidjs.com/img/logo/dark-wordmark/logo.png",
            ][counter()]
    );
    createEffect(() => {
        //  console.log()
        console.log(counter());
    });
    // const []
    return (
        <flexboxLayout backgroundColor="white" justifyContent="center" alignItems="center" flexDirection="column">
            <image src={m()} />
            <button
                onTap={() => {
                    setCounter(counter() + 1);
                    console.log("tapped", counter());
                }}
                marginTop={100}
                text={"Click me"}
                color="black"
                backgroundColor="lightblue"
            />
            <label text={"Count: " + counter()} color="black" />
        </flexboxLayout>
    );
}
