export async function getProducts() {
    const response = await fetch('/data/products.json');
    const products = await response.json();

    return products;
}