const slides = document.querySelectorAll('.slide');
const btns = document.querySelectorAll('.btn');
let currentSlide = 0;


// 버튼이 클릭되면 함수 실행 , 내가 클릭한 버튼의 인덱스가 인수로 들어옴
const manualNav = (manual)=>{ 
  // 초기화
  slides.forEach((slide)=>{
    slide.classList.remove('active');
  })
  btns.forEach((btn)=>{
    btn.classList.remove('active');
  })
  // 내가 선택한 버튼순서 = 슬라이드 순서
  slides[manual].classList.add('active');
  btns[manual].classList.add('active');

}
btns.forEach((btn , index)=>{
  btn.addEventListener('click',()=>{
    // 클릭한 버튼 인덱스를 전달
    manualNav(index);
    // 클릭한 인덱스가 현재 슬라이드가 된다.
    currentSlide = index;
  });
})
