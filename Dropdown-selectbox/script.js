const selectBtn = document.querySelector('.select-btn');
const listBox = document.querySelector('.list-language');
const listBtn = document.querySelectorAll('.listBtn');

// 버튼 토글
selectBtn.addEventListener('mousedown', () => {
    selectBtn.classList.toggle('on');
});

// 버튼 블러
selectBtn.addEventListener('blur', () => {
    selectBtn.classList.remove('on');
});

// 선택한 언어 버튼에 반영
listBtn.forEach(item => {
    item.addEventListener('mousedown', (e) => {
        const btnName = e.currentTarget.textContent;
        selectBtn.textContent = btnName;
    });
    
});
