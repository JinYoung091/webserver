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
                `<a href="" class="view">
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
    });


    getSearchData().then(function (data) {
        let count = 0;
        for (let k = 0; k < data.length && count < 5; k++) {
            if (data[k].nation === "한국") {
                console.log(data[k])
                const kr = document.createElement("kr")
                kr.innerHTML =
                    '<div class="postitem">' +
                    '<a href="" class="view">' +
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
                console.log(data[e])
                const en = document.createElement("en")
                en.innerHTML =
                    '<div class="postitem">' +
                    '<a href="" class="view">' +
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
                console.log(data[a])
                const am = document.createElement("am")
                am.innerHTML =
                    '<div class="postitem">' +
                    '<a href="" class="view">' +
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