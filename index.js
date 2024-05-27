const modal = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.btn-open-modal');
const btncloseModal = document.querySelector('.btn-close-modal');

//로그인 버튼을 눌렀을때 모달 띄우기
btnOpenModal.addEventListener("click", () => {
    modal.style.display = "flex";
    document.body.classList.add("stop-scroll");
});
//모달 버튼 눌러 닫기
btncloseModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.classList.remove("stop-scroll");
});
//모달 밖을 눌러 닫기
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        ocument.body.classList.remove("stop-scroll");
    }
});
