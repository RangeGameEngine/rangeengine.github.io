let currentPage = 0;
const pageSize = 12;
let isLoading = false;
const storeUrl = window.location.href;
const loadMore = document.getElementById('loadingMore');

function loadItems(page) {
    if (isLoading) return;
    isLoading = true;

    const loadingIndicator = document.getElementById('loadingItems');
    loadingIndicator.style.display = 'block';

    setTimeout(() => {
        fetch('/store/js/items.json')
            .then(response => response.json())
            .then(items => {
                const container = document.getElementById('items');
                const start = page * pageSize;
                const end = start + pageSize;
                const itemsPage = items.slice(start, end);

                itemsPage.forEach(item => {
                    const existingItem = container.querySelector(`[pdt-id="${item.id}"]`);
                    if (existingItem) return;

                    const itemDiv = document.createElement('div');
                    itemDiv.classList.add('item-pdt');
                    itemDiv.setAttribute('pdt-id', item.id);

                    const artigosDiv = document.createElement('div');
                    artigosDiv.classList.add('artigos');
                    artigosDiv.appendChild(itemDiv);

                    itemDiv.innerHTML = `
                        <img class="img-pdt" src="${item.image}" alt="${item.name}"/>
                        <div class="descbox-pdt">
                            <p class="name-pdt"><b>${item.name}</b><br>
                            ${item.description}</p>
                            <p class="class-pdt">${item.tags}</p>
                            <p class="price-pdt">$${item.price}</p>
                        </div>
                    `;

                    itemDiv.addEventListener('click', function() {
                        const iframeOverlay = document.createElement('div');
                        Object.assign(iframeOverlay.style, {
                            position: 'fixed', top: '0', left: '0', width: '100%', height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(5px)', zIndex: '1000'
                        });
                        document.body.appendChild(iframeOverlay);

                        const pdtIframe = document.createElement('iframe');
                        pdtIframe.src = item.url;
                        Object.assign(pdtIframe.style, {
                            borderRadius: '5px', width: '90%', height: '80%', top: '10%', left: '5%',
                            position: 'fixed', zIndex: '10000', boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.25)'
                        });
                        pdtIframe.frameBorder = '0';
                        document.body.insertBefore(pdtIframe, document.body.firstChild);

                        history.pushState({}, '', item.url);

                        const closeButton = document.createElement('button');
                        closeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
                        Object.assign(closeButton.style, {
                            position: 'fixed', top: '10%', right: '1%', width: '4%', zIndex: '10001',
                            border: 'none', background: 'transparent', borderRadius: '100%',
                            fontSize: '20px', cursor: 'pointer'
                        });
                        Object.assign(closeButton.querySelector('svg').style, {
                            backgroundColor: 'rgba(255, 255, 255, 0.18)', borderRadius: '100%', padding: '5px'
                        });
                        closeButton.addEventListener('mouseout', function() {
                            closeButton.querySelector('svg').style.stroke = '#ccc';
                        });
                        closeButton.addEventListener('mouseover', function() {
                            closeButton.querySelector('svg').style.stroke = 'white';
                        });

                        closeButton.addEventListener('click', function() {
                            if (pdtIframe) {
                                pdtIframe.parentNode.removeChild(pdtIframe);
                                iframeOverlay.parentNode.removeChild(iframeOverlay);
                                closeButton.parentNode.removeChild(closeButton);
                                history.pushState({}, '', storeUrl);
                            }
                        });

                        document.body.appendChild(closeButton);
                    });

                    container.appendChild(artigosDiv);
                });

                isLoading = false;
                loadingIndicator.style.display = 'none';
            })
            .catch(error => {
                console.error('Error loading items:', error);
                isLoading = false;
                loadingIndicator.style.display = 'none';
            });
    }, 500);
}

function checkScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 && !isLoading) {
        loadItems(currentPage);
        currentPage++;
        searchBar();
    }
}

document.addEventListener('DOMContentLoaded', () => loadItems(currentPage), searchBar);
window.addEventListener('scroll', checkScroll);
loadMore.addEventListener('click', checkScroll);
document.getElementById('searchBar').addEventListener('input', loadItems(currentPage));
