// app.js
document.getElementById('search-form').addEventListener('submit', function(event) {
    var searchValue = document.getElementById('searchForm').value.trim();

    if (!searchValue) {
        event.preventDefault(); // 폼 제출 방지
        alert("검색어를 입력하세요."); // 검색어가 비어있으면 경고
    }
    // 폼이 제출되어야 할 경우(검색어가 입력된 경우)는 아무런 추가 처리를 하지 않음
    // 기본 동작에 따라 'search.html'로 이동하게 됩니다.
});
