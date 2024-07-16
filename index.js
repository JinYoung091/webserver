const modal = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.btn-open-modal');
const btnCloseModal = document.querySelector('.btn-close-modal');

// 로그인 버튼을 눌렀을 때 모달 띄우기
btnOpenModal.addEventListener("click", () => {
    modal.style.display = "flex";
    document.body.classList.add("stop-scroll");
});

// 모달 닫기 버튼을 눌렀을 때 모달 닫기
btnCloseModal.addEventListener('click', () => {
    closeModal();
});

// 모달 밖을 눌렀을 때 모달 닫기
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// ESC 키를 눌렀을 때 모달 닫기
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        closeModal();
    }
});

// 모달 닫기 함수
function closeModal() {
    modal.style.display = 'none';
    document.body.classList.remove("stop-scroll");
}