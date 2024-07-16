// script.js

function search() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';

    if (query) {
        const filteredData = data.filter(item => item.name.includes(query));
        filteredData.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.name;
            li.onclick = () => {
                document.getElementById('search-input').value = item.name;
                suggestions.innerHTML = '';
            };
            suggestions.appendChild(li);
        });
    }
}
