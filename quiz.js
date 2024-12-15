var body  = document.getElementById('body')
var mode = document.getElementById('mode')

var tooggleColor;
function toggleMode(){
  
    if( mode.checked){
            localStorage.setItem('Color', 'body')
            tooggleColor = localStorage.getItem("Color")
            if(tooggleColor === 'body'){
           body.className = 'body'
          
            }
    }
        
        else{
             localStorage.setItem('Color', 'light')
            tooggleColor = localStorage.getItem("Color")
            if(tooggleColor === 'light'){
                body.className = "lightcolor"
        

           
            }

        }
    }


    function setbyDefault(){
        if( tooggleColor === null){
            localStorage.setItem('Color', 'light')
                 body.className = "lightcolor"
                

        }

        toggleMode()
    }


   