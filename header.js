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