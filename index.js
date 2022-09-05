const searhInpit = document.querySelector ('#searh');
const divs = document.querySelectorAll ('.movie');

//ставим прослушку на графу поиск 
searhInpit.addEventListener ('keyup', function(event) {
//сохраняем результат того, что пишет пользователь
    const word = event.target.value.toLowerCase(); 
//делаем сравнение с названием фильмов и графы поиска и выводим результат
    divs.forEach (function (item) {
        item.querySelector('p').textContent.toLowerCase().includes(word) ? (item.style.display = 'block') : (item.style.display = 'none');
    })
}) 




