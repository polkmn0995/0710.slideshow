var slides = document.querySelectorAll("#container > img");
var prev = document.querySelector(".button1");
var next = document.querySelector(".button2");
var current = 0; //표시할 위치 기본 값 0
showSlide(current); //showSlide() 함수를 실행해서 current 위치의 이미지 표시
prev.onclick = prevSlide;
next.onclick = nextSlide;

//이미지 자동 이동을 위한 타이머 변수
var slideInterval = setInterval(nextSlide, 2000); //n000초 마다 다음 이미지로 이동

function showSlide(n) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; //모든 이미지를 화면에서 감춤
  }
  slides[n].style.display = "block"; //n번째 이미지를 화면에 표시
}

function prevSlide() {
  if (current > 0) current -= 1; //현재 이미지가 첫번째가 아닐경우, -1위치로
  else current = slides.length - 1; //현재 이미지가 첫번째라면 마지막으로
  showSlide(current); //이동한 위치의 이미지 표시
}
function nextSlide() {
  if (current < slides.length - 1) current += 1;
  else current = 0;
  showSlide(current);
}

//마우스가 슬라이드 영역에 들어왔을때 타이머 일시 정지
document.querySelector("#container").onmouseenter = function () {
  clearInterval(slideInterval);
};

// 마우스가 슬라이드 영역을 벗어났을때 타이머 작동 재개
document.querySelector("#container").onmouseleave = function () {
  slideInterval = setInterval(nextSlide, 2000);
};
