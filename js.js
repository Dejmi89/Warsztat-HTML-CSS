document.addEventListener('DOMContentLoaded', function(){

    //Zadanie 1

    var menu = document.querySelector('.menu');
    var submenu = document.querySelector('.submenu');
    var triangle = document.querySelector('.triangle');


    menu.addEventListener('mouseenter', function () {
        submenu.classList.add('block');
        triangle.classList.add('block');
    })

    submenu.addEventListener('mouseleave', function () {
        submenu.classList.remove('block');
        triangle.classList.remove('block');
    })




    //zadanie 2 - blok z nazwą
    var opacities = document.querySelectorAll('.opacity');
    var box1 = document.getElementById('box1');
    var box2 = document.getElementById('box2');

    box1.addEventListener('mouseover', function(){
        opacities[0].style.display ='none';
    })
    box1.addEventListener('mouseout', function () {
        opacities[0].style.display = 'block';
    })

    box2.addEventListener('mouseover', function(){
        opacities[1].style.display ='none';
    })
    box2.addEventListener('mouseout', function () {
        opacities[1].style.display = 'block';
    })

    //zadanie 3

    // var buttonPrevious = document.getElementById('arrow1');
    // var buttonNext = document.getElementById('arrow2');
    // var sliderElements = document.querySelectorAll('.slider li');
    //
    // var sliderElementsTable = [];
    // for (var i=0; i<sliderElements.length; i++){
    //     sliderElementsTable.push(sliderElements[i]);
    // }
    // var pictureIndex = 0;
    // sliderElementsTable[0].className = 'visible';
    //
    // buttonNext.addEventListener('click', function (){
    //     sliderElementsTable[pictureIndex].className = '';
    //     if(pictureIndex >= sliderElementsTable.length-1){
    //         pictureIndex =0;
    //     }
    //     else {
    //         pictureIndex += 1;
    //     }
    //     sliderElementsTable[pictureIndex].className = 'visible';
    // });
    //
    // buttonPrevious.addEventListener('click', function() {
    //     sliderElementsTable[pictureIndex].className = '';
    //     if (pictureIndex <= 0) {
    //         pictureIndex = sliderElementsTable.length - 1;
    //     }
    //     else {
    //         pictureIndex -= 1;
    //     }
    //
    //     sliderElementsTable[pictureIndex].className = 'visible';
    // });
    // console.log();
});





