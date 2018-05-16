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

    });

    //Zadanie 4

    var dropdowns = document.getElementsByClassName('drop_down_list');
    var checkboxInput = document.getElementById('transport');

    var sum = document.querySelector('.sum');
    var panel_left = document.querySelector('.panel_left');
    var panel_right = document.querySelector('.panel_right');
    var headingLeft = panel_left.firstElementChild;
    var headingRight = panel_right.firstElementChild;
    var transport = panel_left.querySelector('.transport');
    var transportValue = panel_right.querySelector('.transport_value');
    

    checkboxInput.addEventListener('click', function (e) {  
        e.preventDefault();
        if (checkboxInput.checked === true){
            console.log('checked');
        }
        else {
            console.log('not checked');
        }
        


    })
    

    
   
    
    
    for (var i = 0; i<dropdowns.length; i++){
        dropdowns[i].addEventListener('click', function (e) {
            e.preventDefault();
            let panel = this.querySelector ('.list_panel');

            if (panel.style.display === 'block'){
                panel.style.display = 'none';
            }
            else {
                panel.style.display = 'block';
            }
            
            let panelsChildren = panel.children;
            

            for (var j = 0; j<panelsChildren.length; j++){
                
                panelsChildren[j].addEventListener('click', function (e) {
                    e.preventDefault();
                    let colorInfo = panel_left.querySelector('.color') ;
                    let patternInfo = panel_left.querySelector('.pattern') ;
                    let colorValue = panel_right.querySelector('.color_value');
                    let patternValue = panel_right.querySelector('.pattern_value');
                    

                   if (this.dataset.type === 'armchair'){
                    headingLeft.innerText = this.innerText;
                    headingRight.innerText = this.dataset.price;
                    
                    
                   }
                   else if(this.dataset.type === 'color'){
                    colorInfo.innerText = this.innerText;
                    colorValue.innerText = this.dataset.price;

                    
                   }

                   else if(this.dataset.type === 'pattern'){
                    patternInfo.innerText = this.innerText;
                    patternValue.innerText = this.dataset.price;

                    
                   }
                   count =   Number(headingRight.innerText);
                   count1 =  Number(colorValue.innerText);
                   count2 =  Number(patternValue.innerText);

                   
                    sum.innerText = count+count1+count2;
                  })

                panelsChildren[j].addEventListener('mouseenter', function (e) {
                    this.style.background = 'green';
                })
                panelsChildren[j].addEventListener('mouseleave', function (e) {
                    this.style.background = 'none';
                })
            }
            
            
            

                
                
            
            
          })
    }
    
    

});





