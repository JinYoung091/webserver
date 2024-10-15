function search() {
    // 사용자가 입력한 검색어를 가져옵니다.
    const query = document.getElementById('searchInput').value;
    
    // 검색어를 URL에 포함하여 search.html로 이동합니다.
    window.location.href = `/search.html?query=${encodeURIComponent(query)}`;
}

document.getElementById('searchButton').addEventListener('click', function() {
    search();
});

// 엔터 키가 눌렸을 때 검색 버튼을 클릭한 것처럼 동작하게 합니다.
document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        search();
    }
});

const BACKEN_URL = 'http://192.168.50.136:8080/api/search-terms/recommendations';
let debounceTimeout;

document.getElementById("searchInput").addEventListener('keyup', function() {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        searchLS();
    }, 500);
});

function searchLS() {
    const key = document.getElementById('searchInput').value.trim();//앞뒤

    const resultsElement = document.getElementById('autocomplete');
    resultsElement.innerHTML = '';

    if (key) {
        fetch(`${BACKEN_URL}?term=${key}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.length > 0) {
                    data.forEach(item => {
                        const div = document.createElement('div');
                        div.textContent = item;
                        div.classList.add('autocompleteItem');

                        div.addEventListener('click', function() {
                            document.getElementById('searchInput').value = item;
                            window.location.href = `/search.html?search=${encodeURIComponent(item)}`;
                        });

                        resultsElement.appendChild(div);
                    });
                }
            })
            .catch(error => console.error('Error fetching search results:', error));
    }
}
