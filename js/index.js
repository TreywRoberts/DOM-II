// Your code goes here
const navLink = document.querySelector('nav')
navLink.addEventListener('mouseover', function (event){
    event.target.style.color = 'red';
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);



