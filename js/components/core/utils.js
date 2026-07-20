import main from "./layout.js";

export function print(content, elem = main, { mode = "append" } = {}) {
    if (!elem) {
        console.error("print(): target element not found");
        return;
    }

    const wrapper = document.createElement("div");
    wrapper.innerHTML = content;

    if (mode === "replace") {
        elem.innerHTML = "";
    }

    elem.appendChild(wrapper);
}

export function clearMain(e) {
    e.preventDefault();
    main.innerHTML = "";
}