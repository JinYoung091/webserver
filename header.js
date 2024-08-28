// 검색어를 처리하는 함수
var searchdata = document.getElementById("sh1");


function processSearch() {
    const query = document.getElementById('searchForm').value;
        // 예: search-results.html 페이지로 이동하며 검색어 전달
        window.location.href = `search.html?q=${encodeURIComponent(search)}`;

}

// 엔터 키를 눌렀을 때 실행
function handleSearch(event) {
    if (event.key === 'Enter') { // 엔터 키인지 확인
        processSearch(); // 검색어 처리 함수 호출
    }
}

// 버튼 클릭 시 실행
document.getElementById('searchButton').addEventListener('click', processSearch);

// 입력 필드에 키보드 이벤트 리스너 추가
document.getElementById('searchForm').addEventListener('keydown', handleSearch);

document.getElementById('searchForm').addEventListener(KeyboardEvent,encodeURI);

