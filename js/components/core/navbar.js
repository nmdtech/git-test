import {clearMain} from "./utils.js";

import {cartPage} from "../../ev/cartPage.js";
import {homePage} from "../../ev/homepage.js";
import {galleryPage} from "../../ev/galleryPage.js";
import {contactPage} from "../../ev/contactPage.js";
import {rpsGame} from "../../ev/rpsGame.js";
import {toDoPage} from "../../ev/toDoPage.js";
import {domFullPage} from "../../ev/domFullPage.js";

export function createNavbar() {
    const nav = document.createElement("div");

    nav.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark w-100">
        <div class="container">

            <a class="homeLink navbar-brand fw-bold" href="#">JS Starter</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>


            <div class="collapse navbar-collapse" id="mainNavbar">
                <ul class="navbar-nav ms-auto">

                    <li class="nav-item">
                        <a class="homeLink nav-link" href="#">Home</a>
                    </li>

                    <li class="nav-item">
                        <a class="galleryLink nav-link" href="#gallery">Gallery</a>
                    </li>


                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Games</a>

                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li>
                                <a class="rpsLink dropdown-item" href="#rps">Rock Paper Scissors</a>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Utils</a>

                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li>
                                <a class="todoLink dropdown-item" href="#todo">My List</a>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Store</a>

                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li>
                                <a class="domFullPCStore dropdown-item" href="#pc-store">Computers</a>
                            </li>
                        </ul>
                    </li>


                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Account</a>

                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li>
                                <a class="contactLink dropdown-item" href="#contact">Contact</a>
                            </li>

                            <li>
                                <a class="cartLink dropdown-item" href="#cart">Cart</a>
                            </li>
                        </ul>
                    </li>

                </ul>

            </div>

        </div>
    </nav>
    `;


    const el = nav.firstElementChild;

    const pages = [
        { link: '.homeLink', action: homePage },
        {link: '.cartLink', action: cartPage},
        {link: '.rpsLink', action: rpsGame},
        {link: '.galleryLink', action: galleryPage},
        {link: '.contactLink', action: contactPage},
        {link: '.todoLink', action: toDoPage},
        {link: '.domFullPCStore', action: domFullPage},
    ];

    pages.forEach(page => {
       el.querySelectorAll(page.link).forEach(link => {
           link.addEventListener('click', (e) => {
               clearMain(e);
               page.action();
           });
       });
    });

    return el;
}