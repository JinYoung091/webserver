const DETAIL_URL = 'http://192.168.50.136:8080/api/detail';

const dtlUrl = new URLSearchParams(window.location.search);
const nqm = dtlUrl.get('name');

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

  document.addEventListener('DOMContentLoaded', function() {
    dtl();  // 페이지 로딩 후 dtl 함수 실행
    
  });
  
function dtl() {
    if (nqm) {
    fetch(`${DETAIL_URL}?query=${encodeURIComponent(nqm)}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const dtlContent = 
        '<div class="container">'+
        '<img src="' + data.poster + '" alt="Movie Poster" class="poster">'+
        '<div class="title">' + data.name + '</div>'+
        '<div class="rating">' + convertRatingToText(data.score) + '</div>'+
        '<div class="country">' + data.release + " · " + data.nation + '</div>'+
        '<div class="detail" >'+ data.detail +'</div>'+
        '</div>';

        const div = document.createElement('div');
        div.innerHTML = dtlContent
        document.getElementById('Ditem').appendChild(div);
      });
    }
  }
  