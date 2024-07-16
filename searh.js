function getSearchData(){
  return new Promise((resolve, reject) => {
    fetch('http://192.168.50.136:8080/api/data')
      .then(response => response.json())
      .then(data => {
        resolve(data.data)
      })
  })
}

function convertRatingToText(score) {
  let scoreText = "";

  switch (score) {
      case 1:
          scoreText = "★☆☆☆☆";
          break;
      case 2:
          scoreText = "★★☆☆☆";
          break;
      case 3:
          scoreText = "★★★☆☆";
          break;
      case 4:
          scoreText = "★★★★☆";
          break;
      case 5:
          scoreText = "★★★★★";
          break;
      default:
          scoreText = "평점 정보 없음";
          break;
  }

  return scoreText;
}

window.onload = function(){
  getSearchData().then(function(data){
    console.log(data)
    for(let i = 0; i < data.length; i++){
      if(data[i].id === 1){
        console.log(data[i])
        const div = document.createElement("div")
        div.innerHTML = 
          '<div class="postitem">' +
            '<a href="" class="view">' +
              '<div class="poster">' +
                  '<div>' +
                      '<img class="posterImg" src="'+ data[i].poster +'" alt="">' +
                  '</div>' +
              '</div>' +
              '<div>' +
                  '<div class="expname" style="cursor : pointer;">' + data[i].name + '</div>' +
                  '<div class="expyear" style="cursor : pointer;">' + data[i].release + " · " + data[i].nation +'</div>' +
                  '<div class="expscore" style="cursor : pointer;">' + convertRatingToText(data[i].score) + '</div>' +
              '</div>' +
            '</a>' +
          '</div>'
        document.querySelector(".searchList").appendChild(div)
      }
    }
  })
}
