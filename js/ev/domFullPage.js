import {setPageTitle} from "../components/core/page.js";
import {print} from "../components/core/utils.js";
import {getProducts} from "../loaders/PcDataLoader.js";

export function domFullPage() {
    setPageTitle('PC Mart');

    print(`
        <div id = 'storeMain'></div>
    `);

    const storeMain = document.getElementById('storeMain');

    // All store DOM codes go below
    {
        const storeTools = createItem('div', 'row mb-4 store-tools');
        const searchCol = createItem('div', 'col-md-4');
        const searchInput = createItem('input', 'form-control store-search');

        searchInput.type = 'text';
        searchInput.placeholder = 'Search PC Components...';

        appendItem(searchInput, searchCol);
        appendItem(searchCol, storeTools);

        const filterCol = createItem('div', 'col-md-8');
        const filterGroup = createItem('div', 'btn-group');

        const filters = ['All', 'CPU', 'GPU', 'RAM', 'MBoard', 'PSU', 'HDD', 'SSD', 'Utils', 'Case', 'Monitor', 'Network'];

        filters.forEach(filter => {
           const button = createItem('button', 'btn btn-outline-primary');
           button.textContent = filter;

           button.dataset.category = filter;

           appendItem(button, filterGroup);
        });

        appendItem(filterGroup, filterCol);
        appendItem(filterCol, storeTools);

        appendItem(storeTools, storeMain);
    }

    {
        const productsContainer = createItem('div', 'row g-4', 'productsContainer');

        appendItem(productsContainer, storeMain);
        function createProductCard(product) {

            const col = createItem('div', 'col-md-3');
            const card = createItem('div', 'card h-100 shadow-sm');

            const img = createItem('img', 'card-img-top product-image');
            img.src = product.image;
            img.alt = product.name;

            img.onerror = () => {
                img.src = '/assets/store/default.jpg';
            }

            const body = createItem('div', 'card-body');

            const title = createItem('h5', 'card-title');
            title.textContent = product.name;

            const brand = createItem('p', 'text-muted mb-1');
            brand.textContent = product.brand;

            const category = createItem('span', 'badge bg-secondary');
            category.textContent = product.category;

            const description = createItem('p', 'card-text mt-2');
            description.textContent = product.description;

            const price = createItem('h4', 'text-success');
            price.textContent = `$${product.price}`;

            const stock = createItem('p');
            stock.textContent = `Stock: ${product.stock}`;

            const button = createItem('button', 'btn btn-dark');
            button.textContent = "Add to Cart";

            body.append(title, brand, category, description, price, stock, button);
            card.append(img, body);
            col.appendChild(card);

            return col;
        }

        {
            (async () => {
                try {
                    const products = await getProducts();

                    products.forEach(product => {
                        const card = createProductCard(product);

                        card.addEventListener('click', () => {
                           alert(product.name);
                        });

                        productsContainer.append(card);
                    });

                } catch (err) {
                    console.error(err);
                }
            })();
        }

    }


    //utility functions
    function createItem(elem, className = '', id = '') {
        const element = document.createElement(elem);
        if (className) element.className = className;
        if (id) element.id = id;

        return element;
    }

    function appendItem(item, appendTo) {
        appendTo.appendChild(item);
    }
}