const DETAIL_URL = 'http://192.168.50.136:8080/api/detail';

const dtlUrl = new URLSearchParams(window.location.search);
const nqm = dtlUrl.get('name');

function convertRatingToText(score) {
  let text = "";

  switch (score) {
    case 1:
      text = "★☆☆☆☆";
      break;
    case 2:
      text = "★★☆☆☆";
      break;
    case 3:
      text = "★★★☆☆";
      break;
    case 4:
      text = "★★★★☆";
      break;
    case 5:
      text = "★★★★★";
      break;
    default:
      text = "평점 정보 없음";
      break;
  }
  return text;
}

document.addEventListener('DOMContentLoaded', function () {
  dtl();  // 페이지 로딩 후 dtl 함수 실행

});

function dtl() {
  if (nqm) {
    fetch(`${DETAIL_URL}?query=${encodeURIComponent(nqm)}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const dtlContent =
          '<div class="container">' +
          '<div class="overflow">' +
          '<img src="' + data.poster + '" alt="Movie Poster" class="poster">'+
          '<div class="detail">'+ data.detail +'</div>'+
          '</div>'+
          '<div class="jss">' +
          '<div class="title">' + data.name + '</div>' +
          '<div class="rating">' + convertRatingToText(data.score) + ' 5 / ' + data.score + ' 점</div>' +
          '<div class="country">' + data.release + " · " + data.nation + '</div>' ;
          '</div>';

        const div = document.createElement('div');
        div.innerHTML = dtlContent
        document.getElementById('Ditem').appendChild(div);
      });
  }
}
