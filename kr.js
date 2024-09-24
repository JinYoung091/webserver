function getSearchData() {
  return new Promise((resolve, reject) => {
    fetch("http://192.168.50.136:8080/api/data"
    )
      .then(response => response.json())
      .then(data => {
        resolve(data)
      })
  })
}
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

window.onload = function () {
  getSearchData().then(function (data) {
    console.log(data)
    for (let i = 0; i < data.length; i++) {
      if (data[i].nation === "한국") {
        console.log(data[i])
        const div = document.createElement("div")
        div.innerHTML =
          '<div class="postitem">' +
          '<a href="/detail.html?name=' + data[i].name + '" id="' + data[i].name + '">' +
          '<div class="poster">' +
          '<div>' +
          '<img class="posterImg" src="' + data[i].poster + '" alt="">' +
          '</div>' +
          '</div>' +
          '<div>' +
          '<div class="expname" style="cursor : pointer;">' + data[i].name + '</div>' +
          '<div class="expyear" style="cursor : pointer;">' + data[i].release + " · " + data[i].nation + '</div>' +
          '<div class="expscore" style="cursor : pointer;">' + convertRatingToText(data[i].score) + '</div>' +
          '</div>' +
          '</a>' +
          '</div>'
        document.querySelector(".koreaList").appendChild(div)
      }
    }
  })
}
