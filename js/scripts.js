// scripts.js 파일
function typeWriter(element, text, i = 0, speed = 150) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(element, text, i, speed), speed);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('h1'); // h1 태그 선택
    const text = "반갑습니다,\n저는 이희재입니다."; // 표시할 텍스트
    header.innerHTML = ""; // 초기 내용을 비워줍니다.
    typeWriter(header, text, 0, 150); // 타이핑 시작
});
