window.onload = function () {
  var board = document.querySelector('.board-js');
   board.addEventListener('dblclick',function(event){
     event.target.style.backgroundColor = 'rgba(90, 242, 251, 0.87)';
     event.target.style.border = '1px solid yellow';
     event.target.textContent = "X"

   });
    board.addEventListener('click',function(event){
       event.target.style.backgroundColor = 'yellow';
        event.target.textContent = "O" /*puede ser innerHTML" TAMBIÉN*/
   });
};

 var centinel = true;
 function 
