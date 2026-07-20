export function setPageTitle(title) {
    const pageTitle = document.getElementById("pageTitle");

    if (pageTitle) {
        pageTitle.textContent = title;
    }
    document.title = `NMD Store | ${title}`;
}