const BACKEND_URL = 'http://192.168.50.136:8080/api/search';

const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get('search');

function convertRatingToText(score) {
  let text = "";

  switch (score) {
      case 1:
          text = "<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FsS4QY%2FbtqKjcu1oOO%2FAjzkH5oQtsepPFEoJS5nEK%2Fimg.jpg' alt='1'>";
          break;
      case 2:
          text = "<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FTOsgH%2FbtqKbXsA0Te%2FPK91pPsft0SCtCnkZJu4vK%2Fimg.jpg' alt='2'>";
          break;
      case 3:
          text = "<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcZQKoW%2FbtqKgEeGId1%2FpLYVVcKEkzHLuH4cgHo2Xk%2Fimg.jpg' alt='3'>";
          break;
      case 4:
          text = "<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FSAiat%2FbtqKgE6PVr5%2FbCq8JBePdkkdJJt9UOxe20%2Fimg.jpg' alt='4'>";
          break;
      case 5:
          text = "<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdh2y18%2FbtqKh96l5eM%2FDnP0GdnXOwQtnv49HpJHS0%2Fimg.jpg' alt='5'>";
          break;
      default:
          text = "평점 정보 없음";
          break;
  }
  return text;
}

if (query) {
  fetch(`${BACKEND_URL}?query=${encodeURIComponent(query)}`)
      .then(response => response.json())
      .then(data => {
          console.log('Search Results:', data); 
          const resultsElement = document.getElementById('searchList');
          const nameElement = document.getElementById('nametag');
          resultsElement.innerHTML = ''; // 기존 내용을 지웁니다.
          const name = '<p>"'+ query +'" 의 검색 결과'+ '</p>';

          const nametag = document.createElement('h2')
          nametag.innerHTML = name;
          nameElement.appendChild(nametag);

          data.forEach(data => {  // 각 항목을 반복 처리합니다.
              const htmlContent = 
                  '<div class="postitem">' +
                      '<a href="/detail.html?name='+ data.name +'" id="'+ data.name +'">' +
                          '<div class="poster">' +
                              '<div>' +
                                  '<img class="posterImg" src="' + data.poster + '" alt="">' +
                              '</div>' +
                          '</div>' +
                          '<div>' +
                              '<div class="expname" style="cursor: pointer;">' + data.name + '</div>' +
                              '<div class="expyear" style="cursor: pointer;">' + data.release + " · " + data.nation + '</div>' +
                              '<div class="expscore" style="cursor: pointer;">' + convertRatingToText(data.score) + '</div>' +
                          '</div>' +
                      '</a>' +
                  '</div>';
              // 새로운 div 요소를 만듭니다.
              const div = document.createElement('div');
              div.innerHTML = htmlContent; // HTML을 div 요소의 내용으로 설정합니다.
              resultsElement.appendChild(div); // resultsElement에 추가합니다.
          });

      })
      .catch(error => console.error('Error fetching search results:', error));
    }

