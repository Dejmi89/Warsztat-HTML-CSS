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
    // var listPanels = document.getElementsByClassName('list_panel');
    var application = document.querySelector('.application');
    var checkboxInput = document.querySelector('#transport');
    var label = document.getElementsByTagName('label');

    var sum = document.querySelector('.sum');
    var panel_left = document.querySelector('.panel_left');
    var panel_right = document.querySelector('.panel_right');
    var headingLeft = panel_left.firstElementChild;
    var headingRight = panel_right.firstElementChild;
    console.log(headingLeft);

    // application.addEventListener('click', function (e) {
    //    e.preventDefault();
    // });


    checkboxInput.addEventListener('click', function () {
        if (checkboxInput.checked === true){
            label[0].style.color = "black";
        }
        else if (checkboxInput.checked === false){
            label[0].style.color = "#cecece";
        }
    });

    if (checkboxInput.checked === true){
        var transport = document.getElementById('#transport');
        transport.innerText = '80';
    }

    
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

                   if (this.dataset.type === 'armchair'){
                    headingLeft.innerText = this.innerText;
                    headingRight.innerText = this.dataset.price;
                   }
                   else if(this.dataset.type === 'color'){
                    colorInfo.innerText = this.innerText;
                   }

                   else if(this.dataset.type === 'pattern'){
                    patternInfo.innerText = this.innerText;
                   }
                                

                    
                    
                    
                    
                    console.log(patternInfo);
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
    
    


    // dropdowns[0].addEventListener('click', function (e) {
    //     e.preventDefault();

    //     if (listPanels[0].style.display === "block"){
    //         listPanels[0].style.display = "none";
    //     }
    //     else {
    //         listPanels[0].style.display = "block";
             

    //         var li = listPanels[0].firstElementChild;
    //         li.addEventListener('click', function () { 
    //             headingLeft.innerText = li.innerText;
    //             headingRight.innerText = chairPrices.Clair;
    //          })
    //          li.addEventListener('mouseenter', function () { 
    //             li.style.background = 'red';
    //          })
    //          li.addEventListener('mouseleave', function () { 
    //             li.style.background = 'none';
    //          })

    //          var li2 = listPanels[0].children;
             
    //         li2[1].addEventListener('click', function () { 
    //             headingLeft.innerText = li2[1].innerText;
    //             headingRight.innerText = chairPrices.Margarita;
    //          })
    //          li2[1].addEventListener('mouseenter', function () { 
    //             li2[1].style.background = 'red';
    //          })
    //          li2[1].addEventListener('mouseleave', function () { 
    //             li2[1].style.background = 'none';
    //          })

    //          var li3 = listPanels[0].lastElementChild;
             
    //          li3.addEventListener('click', function () { 
    //              headingLeft.innerText = li3.innerText;
    //              headingRight.innerText = chairPrices.Selena;
    //           })
    //           li3.addEventListener('mouseenter', function () { 
    //              li3.style.background = 'red';
    //           })
    //           li3.addEventListener('mouseleave', function () { 
    //              li3.style.background = 'none';
    //           })
    //     }

    // });

    // dropdowns[1].addEventListener('click', function (e) {
    //     e.preventDefault();

    //     if (listPanels[1].style.display === "block"){
    //         listPanels[1].style.display = "none";
    //     }
    //     else {
    //         listPanels[1].style.display = "block";
            
    //         var li = listPanels[1].firstElementChild;
    //         var color = document.querySelector('.color');
    //         var colorValue = document.querySelector('.color_value');
           
            
    //         li.addEventListener('click', function () { 
    //             color.innerText = li.innerText;
    //             colorValue.innerText = colorsPrices.Red;
    //          })
    //          li.addEventListener('mouseenter', function () { 
    //             li.style.background = 'red';
    //          })
    //          li.addEventListener('mouseleave', function () { 
    //             li.style.background = 'none';
    //          })

    //          var li2 = listPanels[1].children;
    //          li2[1].addEventListener('click', function () { 
    //             color.innerText = li2[1].innerText;
    //             colorValue.innerText = colorsPrices.Black;
    //          })
    //          li2[1].addEventListener('mouseenter', function () { 
    //             li2[1].style.background = 'red';
    //          })
    //          li2[1].addEventListener('mouseleave', function () { 
    //             li2[1].style.background = 'none';
    //          })

    //          var li3 = listPanels[1].lastElementChild;
    //          li3.addEventListener('click', function () { 
    //             color.innerText = li3.innerText;
    //             colorValue.innerText = colorsPrices.Black;
    //          })
    //          li3.addEventListener('mouseenter', function () { 
    //             li3.style.background = 'red';
    //          })
    //          li3.addEventListener('mouseleave', function () { 
    //             li3.style.background = 'none';
    //          })
    //     }
    // });

    // dropdowns[2].addEventListener('click', function (e) {
    //     e.preventDefault();

    //     if (listPanels[2].style.display === "block"){
    //         listPanels[2].style.display = "none";
    //     }
    //     else {
    //         listPanels[2].style.display = "block";

    //         var li = listPanels[2].firstElementChild;
    //         var pattern = document.querySelector('.pattern');
    //         var patternValue = document.querySelector('.pattern_value');
           
            
    //         li.addEventListener('click', function () { 
    //             pattern.innerText = li.innerText;
    //             patternValue.innerText = materialsPrices.fabric;
    //          })
    //          li.addEventListener('mouseenter', function () { 
    //             li.style.background = 'red';
    //          })
    //          li.addEventListener('mouseleave', function () { 
    //             li.style.background = 'none';
    //          })

    //          var li2 = listPanels[2].children;
    //          li2[1].addEventListener('click', function () { 
    //             pattern.innerText = li2[1].innerText;
    //             patternValue.innerText = materialsPrices.leather;
    //          })
    //          li2[1].addEventListener('mouseenter', function () { 
    //             li2[1].style.background = 'red';
    //          })
    //          li2[1].addEventListener('mouseleave', function () { 
    //             li2[1].style.background = 'none';
    //          })
    //     }
    // });
});





