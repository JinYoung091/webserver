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
function generateRandomIndexes(maxLength, count) {
            const indexes = [];
            while (indexes.length < count) {
                const randomIndex = Math.floor(Math.random() * maxLength);
                if (!indexes.includes(randomIndex)) {
                    indexes.push(randomIndex);
                }
            }
            return indexes;
}

window.onload = function () {
    getSearchData().then(function (data) {



        const poList = document.querySelector(".poList");
        poList.innerHTML = '';



        const randomIndexes = generateRandomIndexes(data.length, 10);
        randomIndexes.forEach(index => {
            const movie = data[index];
            const ca = document.createElement("div");
            ca.className = "postitem";
            ca.innerHTML =
                `<a href="/detail.html?name=${movie.name}" id="${movie.name}">
                    <div class="poster">
                        <div>
                            <img class="posterImg" src="${movie.poster}" alt="">
                        </div>
                    </div>
                    <div>
                        <div class="expname" style="cursor: pointer;">${movie.name}</div>
                        <div class="expyear" style="cursor: pointer;">${movie.release} · ${movie.nation}</div>
                        <div class="expscore" style="cursor: pointer;">${convertRatingToText(movie.score)}</div>
                    </div>
                </a>`;
            poList.appendChild(ca);
        });


    });


    getSearchData().then(function (data) {
        let count = 0;
        for (let k = 0; k < data.length && count < 5; k++) {
            if (data[k].nation === "한국") {
                const kr = document.createElement("kr")
                kr.innerHTML =
                    '<div class="postitem">' +
                    '<a href="/detail.html?name='+ data[k].name +'" id="'+ data[k].name +'">' +
                    '<div class="poster">' +
                    '<div>' +
                    '<img class="posterImg" src="' + data[k].poster + '" alt="">' +
                    '</div>' +
                    '</div>' +
                    '<div>' +
                    '<div class="expname" style="cursor : pointer;">' + data[k].name + '</div>' +
                    '<div class="expyear" style="cursor : pointer;">' + data[k].release + " · " + data[k].nation + '</div>' +
                    '<div class="expscore" style="cursor : pointer;">' + convertRatingToText(data[k].score) + '</div>' +
                    '</div>' +
                    '</a>' +
                    '</div>'
                document.querySelector(".krList").appendChild(kr)
                count++;
            }
        }
    })

    getSearchData().then(function (data) {
        let count = 0;
        for (let e = 0; e < data.length && count < 5; e++) {
            if (data[e].id === 3) {
                const en = document.createElement("en")
                en.innerHTML =
                    '<div class="postitem">' +
                    '<a href="/detail.html?name='+ data[e].name +'" id="'+ data[e].name +'">' +
                    '<div class="poster">' +
                    '<div>' +
                    '<img class="posterImg" src="' + data[e].poster + '" alt="">' +
                    '</div>' +
                    '</div>' +
                    '<div>' +
                    '<div class="expname" style="cursor : pointer;">' + data[e].name + '</div>' +
                    '<div class="expyear" style="cursor : pointer;">' + data[e].release + " · " + data[e].nation + '</div>' +
                    '<div class="expscore" style="cursor : pointer;">' + convertRatingToText(data[e].score) + '</div>' +
                    '</div>' +
                    '</a>' +
                    '</div>'
                document.querySelector(".enList").appendChild(en)
                count++;
            }
        }
    })

    getSearchData().then(function (data) {
        let count = 0;
        for (let a = 0; a < data.length && count < 5; a++) {
            if (data[a].id === 2) {
                const am = document.createElement("am")
                am.innerHTML =
                    '<div class="postitem">' +
                    '<a href="/detail.html?name='+ data[a].name +'" id="'+ data[a].name +'">' +
                    '<div class="poster">' +
                    '<div>' +
                    '<img class="posterImg" src="' + data[a].poster + '" alt="">' +
                    '</div>' +
                    '</div>' +
                    '<div>' +
                    '<div class="expname" style="cursor : pointer;">' + data[a].name + '</div>' +
                    '<div class="expyear" style="cursor : pointer;">' + data[a].release + " · " + data[a].nation + '</div>' +
                    '<div class="expscore" style="cursor : pointer;">' + convertRatingToText(data[a].score) + '</div>' +
                    '</div>' +
                    '</a>' +
                    '</div>'
                document.querySelector(".amList").appendChild(am)
                count++;
            }
        }
    })

}