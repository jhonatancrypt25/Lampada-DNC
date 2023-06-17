var lamp = window.document.getElementById('lampada')
    
    function estarquebrada(){
        return lamp.src.indexOf('quebrada') > -1
    }

    function Ligar(){
        if(!estarquebrada())
        lamp.src='ligada.svg'
    }

    function Desligar(){
        if(!estarquebrada())
        lamp.src = 'desligada.svg'
    }
        lamp.addEventListener ('click',quebrar)
    function quebrar(){
        lamp.src ='quebrada.svg'
    }