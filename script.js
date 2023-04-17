let city = 'new york'
_run()

function btn(){
      city = document.getElementById('inp').value       
      _run()
}

function x(self){
    self.parentElement.style.display = 'none'
}

function _run(){
fetch('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&units=metric&appid=847ab84db4f1d2e9818579ffd8cc033e')
.then(res => res.json())
.then(data => {

    if(data.name == undefined){
        document.getElementById('pop').style.display = 'flex'
        city = 'new york'
       _run()
       document.getElementById('inp').value=' '
    }

    document.querySelector('#info>div:nth-of-type(1)').innerHTML = 'Weather in &nbsp <strong>' + data.name +'</strong>'
    document.querySelector('#info>div:nth-of-type(2)>div:nth-of-type(1)').innerHTML = Math.round (data.main.temp) +' <strong>° C</strong>'
    document.getElementById('up').innerHTML = Math.round (data.main.temp_max) +'°'
    document.getElementById('down').innerHTML = Math.round (data.main.temp_min) +'°'
    document.getElementById('_main').innerHTML = data.weather[0].description
    document.getElementById('humidity').innerHTML = data.main.humidity +"%"
    // document.getElementById('des').innerHTML = data.weather[0].description
    document.getElementById('des').innerHTML ='Wind : ' + (data.wind.speed).toFixed(1) + ' m/s'
    document.getElementById('_icon').setAttribute('src' , 'http://openweathermap.org/img/wn/' + data.weather[0].icon+'.png')
})
}
