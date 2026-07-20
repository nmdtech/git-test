import {setPageTitle} from "../components/core/page.js";
import { print } from "../components/core/utils.js";

export function cartPage() {
    setPageTitle('Shopping Cart');

    let cartQuantity = 0;

    print(`
        <div class="col-12 mb-2" id="cartButtons">
            <button id="showQty">Show Quantity</button>
            <button id="add1">Add to Cart</button>
            <button id="add2">+2</button>
            <button id="add3">+3</button>
            <button id="reset">Reset Cart</button>
        </div>

        <div class="col-12" id="output"></div>
    `);

    const output = document.getElementById("output");

    function render(message = '') {
        output.innerHTML = `
            ${message ? `${message}. ` : '' }
            Cart Quantity: ${cartQuantity}
        `;
    }

    const el = document.getElementById('cartButtons');

    el.querySelector("#showQty").addEventListener("click", () => {
        render();
    });

    el.querySelector("#add1").addEventListener("click", () => {
        cartQuantity++;
        render('Added');
    });

    el.querySelector("#add2").addEventListener("click", () => {
        cartQuantity += 2;
        render('Added');
    });

    el.querySelector("#add3").addEventListener("click", () => {
        cartQuantity += 3;
        render('Added');
    });

    el.querySelector("#reset").addEventListener("click", () => {
        cartQuantity = 0;
        render('Cart was reset');
    });
}