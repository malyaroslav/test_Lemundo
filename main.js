let tabNav = document.querySelectorAll('.tabs-nav__item'),
       tabContent = document.querySelectorAll('.tab'), 
        amountSale = document.querySelectorAll('.amount')[0],
       tabName;

function onActive(){
    if(localStorage.on_active){
        console.log(localStorage.on_active);
        tabNav.forEach(item=>{
                item.classList.remove('is-active');
            });
        tabContent.forEach(item=>{
                item.classList.remove('is-active');
            })
        let local = localStorage.on_active;
        
        let targetElement = document.querySelectorAll(`.${local}`);
        
        targetElement.forEach(item=>{
                item.classList.add('is-active');
            });
         tabNav.forEach(item=>{
             if(item.getAttribute('data-tab-name') == local){
                item.classList.add('is-active');
             }
         });
        }
};

let tab = function () {
    tabNav.forEach(item=>{
        item.addEventListener('click', function(){
            tabNav.forEach(item=>{
                item.classList.remove('is-active');
            });
            this.classList.add('is-active');
            tabName = this.getAttribute('data-tab-name');
            localStorage.setItem('on_active', tabName);
            selectTabContent(tabName);
        });
        function selectTabContent(tabName){
          tabContent.forEach(item=>{
              item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
          })  
        };
    })
};

function preis(e){
    let buttons = document.querySelectorAll('button');
        for(let i = 0; i<buttons.length; i++){
        buttons[i].addEventListener('click', function(){
            for(let j = 0; j<buttons.length; j++){
               buttons[j].style.backgroundColor="rgba(203, 199, 199, 0.07)" 
            }
            this.style.backgroundColor="#EE82EE";
            let num = +this.innerHTML
            sum(num);
        })
    };
    
    function sum(num){
       
        let preis = +19.95 * num;
        let percent = +10;
        let amount;
        let percent_process
        
        
        switch(num){
            case 1:
                amount = (preis-(preis/100*percent)).toFixed(2);
                percent_process = percent
                console.log(amount);
                
                break;
            case 2:
                amount = (preis-(preis/100*percent)).toFixed(2);
                percent_process = percent;
                console.log(amount);
                break;
            case 3:
                amount = (preis-(preis/100*(percent*2))).toFixed(2);
                percent_process = percent*2;
                console.log(amount);
                break;
            case 5:
                amount = (preis-(preis/100*(percent*3))).toFixed(2);
                percent_process = percent*3;
                console.log(amount);
                break;
            case 8:
                amount = (preis-(preis/100*(percent*3))).toFixed(2);
                percent_process = percent*3;
                console.log(amount);
                break;
            case 10:
                amount = (preis-(preis/100*(percent*3))).toFixed(2);
                percent_process = percent*3;
                console.log(amount);
                break;
              }
    amountSale.innerHTML= `Betrag: ${amount}<br/>Rabatt: ${percent_process}% <br/> Menge: ${num}`;
    }
}

tab();
onActive();
preis();