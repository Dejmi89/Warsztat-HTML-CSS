document.addEventListener('DOMContentLoaded', function(){

    //Zadanie 1

    // var dropdown = document.querySelector('#dropdown');
    // var submenu = document.querySelector('.submenu');
    // var triangle = document.querySelector('.triangle');
    //
    //
    // dropdown.addEventListener('mouseenter', function () {
    //     submenu.classList.add('flex');
    //     triangle.classList.add('block');
    // });
    //
    // submenu.addEventListener('mouseleave', function () {
    //     submenu.classList.remove('flex');
    //     triangle.classList.remove('block');
    // });




    //zadanie 2 - blok z nazwą
    var opacities = document.querySelectorAll('.opacity');
    var box1 = document.getElementById('box1');
    var box2 = document.getElementById('box2');

    box1.addEventListener('mouseover', function(){
        opacities[0].style.display ='none';
        box1.className = "shadow";
    });
    box1.addEventListener('mouseout', function () {
        opacities[0].style.display = 'block';
        box1.classList.remove('shadow');
    });

    box2.addEventListener('mouseover', function(){
        opacities[1].style.display ='none';
        box2.className = "shadow";
    });
    box2.addEventListener('mouseout', function () {
        opacities[1].style.display = 'block';
        box2.classList.remove('shadow');
    });

    //zadanie 3

    var buttonPrevious = document.getElementById('arrow1');
    var buttonNext = document.getElementById('arrow2');
    var sliderElements = document.querySelectorAll('#slides li');
    var pictureIndex = 0;


    sliderElements[0].className = 'visible';

    buttonPrevious.addEventListener('click', function () {
        sliderElements[pictureIndex].className = '';
        if (pictureIndex <= 0){
            pictureIndex = sliderElements.length-1;
        }
        else {
            pictureIndex -= 1;
        }
        sliderElements[pictureIndex].className = 'visible';
    });

    buttonNext.addEventListener('click', function () {
        sliderElements[pictureIndex].className='';
        if (pictureIndex >= sliderElements.length-1){
            pictureIndex = 0;
        }
        else {
            pictureIndex += 1;
        }
        sliderElements[pictureIndex].className = 'visible';

    })


});





