const searchBox = document.getElementById('searchBar');
const isFree = document.getElementById('isFree');
const maxPriceInput = document.getElementById('maxPrice');

searchBox.addEventListener('input', searchBar);
isFree.addEventListener('change', searchBar);
maxPriceInput.addEventListener('input', searchBar);

function searchBar() {
    let input = searchBox.value.toLowerCase().trim().split(' ');
    let maxPrice = Number(maxPriceInput.value);
    let articles = document.getElementsByClassName('artigos');
    let list = [];
    
    for (let article of articles) {
        let name = article.getElementsByClassName('name-pdt')[0];
        let className = article.getElementsByClassName('class-pdt')[0];
        
        if (name && className) {
            list.push({
                element: article,
                name: name.innerText.toLowerCase(),
                class: className.innerText.toLowerCase(),
            });
        } else {
            console.error('Element name or class not found');
        }
    }
    
    let options = {
        keys: ['name', 'class'],
        threshold: 0.4  // Fuzziness level
    };
    
    let fuse = new Fuse(list, options);
    let results = [];
    
    if (Array.isArray(input)) {
        input.forEach(word => {
            let result = fuse.search(word);
            results = results.concat(result.map(res => res.item));
        });
    }
    
    // Remove duplications
    results = results.filter((item, pos, self) => self.indexOf(item) === pos);
    
    if (searchBox.value.trim() === "") {
        for (let article of articles) {
            article.style.display = 'inline-flex';
        }
    } else {
        for (let article of articles) {
            article.style.display = 'none';
        }
        for (let item of results) {
            item.element.style.display = 'inline-flex';
        }
    }
    for (let article of articles) {
        let price = article.getElementsByClassName('price-pdt')[0].innerText.split('$')[1];

        if (isFree.checked) {
            if (price === 'Free') {
                if (article.style.display != 'none') {
                    article.style.display = 'inline-flex';
                }
            } 
            else if (price !== 'Free') {
                article.style.display = 'none';
            }
        }
        else {
            if (maxPrice === 0 || price === 'Free') {
                if (article.style.display != 'none') {
                    article.style.display = 'inline-flex';
                }
            }
            else if (maxPrice !== 0 && maxPrice < Number(price)) {
                article.style.display = 'none';
            }
        }
    }
};

function writeSearchBar(searchTerm) {
    if (searchTerm.includes('ClearBarCommand')) {
        searchBox.value = '';
    } else {
        searchBox.value += ' ' + searchTerm;
    }
    searchBar();
};