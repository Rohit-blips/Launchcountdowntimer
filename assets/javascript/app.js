
        const dia = document.querySelector('.dia');
        const hora = document.querySelector('.hora');
        const minuto = document.querySelector('.minuto');
        const segundo = document.querySelector('.segundo');

        const layerdia = document.querySelector('.card-dia');
        const layerhora = document.querySelector('.card-hora');
        const layerMinuto = document.querySelector('.card-minuto');
        const layerSegundo = document.querySelector('.card-segundo');

        
        var data = new Date();

        let _ms = data.getMilliseconds(); // milisegundos
        let _seg = data.getSeconds(); // segundos
        let _min = data.getMinutes();  //minutos
        let _hora = data.getHours(); //horas
        let _dia = data.getDay();  //dias
        let diaFinal = _dia + 8;

        function contadorDeOitoDias(){
            if(diaFinal == _dia){
                clearInterval(timeinterval)
            }
            if( diaFinal > _dia){
                _seg--;
            }
            if(_seg == 0){
                _min--
                _seg = 60
                layerMinuto.classList.toggle('layer-active');
            }
            if(_min == 0){
                _hora--
                _min = 60;
                layerhora.classList.toggle('layer-active');
            }
            if(_hora == 0){
                diaFinal--
                _hora = 60
                layerdia.classList.toggle('layer-active');

            }

            dia.innerHTML = diaFinal;
            hora.innerHTML = _hora;
            minuto.innerHTML = _min;
            segundo.innerHTML = _seg;
        }

       
    var timeinterval = setInterval(contadorDeOitoDias,1000);