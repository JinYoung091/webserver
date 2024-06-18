function getSearchData(){
  return new Promise((resolve, reject) => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        resolve(data.data)
      })
  })
}

function convertRatingToText(rating) {
  let ratingText = "";

  switch (rating) {
      case 1:
          ratingText = "★☆☆☆☆";
          break;
      case 2:
          ratingText = "★★☆☆☆";
          break;
      case 3:
          ratingText = "★★★☆☆";
          break;
      case 4:
          ratingText = "★★★★☆";
          break;
      case 5:
          ratingText = "★★★★★";
          break;
      default:
          ratingText = "평점 정보 없음";
          break;
  }

  return ratingText;
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
                      '<img class="poster-img" src="'+ data[i].poster +'" alt="">' +
                  '</div>' +
              '</div>' +
              '<div>' +
                  '<div class="expname" style="cursor : pointer;">' + data[i].name + '</div>' +
                  '<div class="expyear" style="cursor : pointer;">' + data[i].release + " · " + data[i].nation +'</div>' +
                  '<div class="exprating" style="cursor : pointer;">' + convertRatingToText(data[i].rating) + '</div>' +
              '</div>' +
            '</a>' +
          '</div>'
        document.querySelector(".searchList").appendChild(div)
      }
    }
  })
}
