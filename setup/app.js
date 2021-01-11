"use strict";
//  set initial count
let count = 0;

// select calue and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// console.log(value);
// console.log(btns);

// btns.forEach( function(items) {
//   console.log(items)
// });

btns.forEach(function (btn){
  btn.addEventListener('click', function(e){
    // console.log(e.currentTarget.classList);
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')){
      count--;
    }
    else if(styles.contains('increase')){
      count++;
    } else {
      count = 0;
    }
    if(count > 0){
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222"
    }
    value.textContent = count;

    console.log(count);
  });
});

