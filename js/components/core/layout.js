import { createNavbar } from "./navbar.js";

const appContainer = document.createElement("div");
appContainer.className = "app-container";


const pageHeader = document.createElement("section");
pageHeader.className = "page-header";

const pageTitle = document.createElement("h1");
pageTitle.id = "pageTitle";
pageTitle.className = "page-title";
pageTitle.textContent = "Dashboard";

pageHeader.appendChild(pageTitle);

const main = document.createElement("main");
main.id = "main";
main.className = "app-main";


appContainer.append(pageHeader, main);
document.body.append(createNavbar(), appContainer);

export default main;