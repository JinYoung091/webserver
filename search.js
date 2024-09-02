const BACKEND_URL = 'http://192.168.50.136:8080/api/data';

const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get('search');
console.log('Search Parameter:', query);

if (query) {
    fetch(`${BACKEND_URL}?query=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            console.log('Search Results:', data); 
            const resultsElement = document.getElementById('searchList');
            resultsElement.innerHTML = '';
            data.forEach(data => {
                const li = document.createElement('li');
                li.textContent = data.name;
                resultsElement.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching search results:', error));
} else {
    console.log('No search parameter found in the URL.');
}
