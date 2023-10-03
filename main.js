'use strict';
const slides = document.querySelectorAll('.slide');
const btns = document.querySelectorAll('.btn');
const img = document.querySelectorAll('.img');
const message = document.querySelectorAll('.message');
const name = document.querySelectorAll('.name');
import { card } from './data.js';
// 버튼이 클릭되면 함수 실행 , 내가 클릭한 버튼의 인덱스가 인수로 들어옴



  card.forEach((item , i)=>{

    name[i].textContent = item.name;
    message[i].textContent = item.message;
    img[i].scr = item.img;
    }
  )


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
  });
})

// 자동 슬라이드 함수
const autoSlider = () => {
  
  // 현재 active클래스가 있는 요소 선택
  const active =  document.getElementsByClassName('active');
  let i = 1;

  // 반복적으로 슬라이드가 자동으로 전환하기 위해 반복 호출
  const repeater = () => {

    setTimeout(()=>{
      console.log(active); // 현재 active클래스를 가지고있는 요소 배열 , HTMLCollection(2) [div.slide.active, div.btn.active]
    
      // 전개구문으로 펼쳐서 배열로 하나씩 요소 획인 -> active 클래스 지움
      // 초기화
      [...active].forEach((activeSlide)=>{
        // console.log(activeSlide);
        activeSlide.classList.remove('active');
      });

      slides[i].classList.add('active');
      btns[i].classList.add('active');
      i++;
      //i가 슬라이드 길이와 같아지면 다시 처음으로 이동
      if(slides.length === i){
        i = 0;
      }
      // if(i >= slides.length){
      //   return;
      // }
      // i가 슬라이드 길이와 같아지면 i는 0이되고 다시 repeater함수를 실행해야 무한 반복이 된다.
      repeater();
    }, 10000);
  }

  repeater(); //repeater함수 실행 시작
}
// // 페이지가 로드될 때 자동 슬라이더를 시작하기 위해 마지막에 함수 호출
autoSlider();


// setTimeout(지정된 지연 후에 실행하려는 기능(함수), (함수를 실행하기 전에 대기하는 시간)delay);