document.getElementById("discord").addEventListener("click", function () {
    var textToCopy = "kosmin.";

    var textArea = document.createElement("textarea");
    textArea.value = textToCopy;

    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand("copy");

    document.body.removeChild(textArea);

    alert("Текст скопирован в буфер обмена!");
});    
    function logoBig() {
        let projects = document.querySelector('.projects__content') 
        let artists  = document.querySelector('.artists__content')
        let music = document.querySelector('.music__content')
        let clips = document.querySelector('.clips__content')
        let logoClass = document.querySelector('.logo')
        let logoId = document.querySelector('#logo')

        logoId.style.fontSize = "14vw"
        projects.classList.add('none')
        artists.classList.add('none')
        music.classList.add('none')
        clips.classList.add('none')
    }

    function projectsOn() {
        let projects = document.querySelector('.projects__content') 
        let artists  = document.querySelector('.artists__content')
        let music = document.querySelector('.music__content')
        let clips = document.querySelector('.clips__content')
        let logo = document.getElementById('logo')
        let l = document.querySelector('#logo')
        let menu = document.querySelector('.menu')
        let menuContent = document.querySelector('.menu__content')

        projects.classList.remove('none')
        artists.classList.add('none')
        music.classList.add('none')
        clips.classList.add('none')
        
        if (document.documentElement.clientWidth < 426) { 
            logo.classList.add('none') 
        } else {
            logo.style.fontSize = "2vw"}

        if (document.documentElement.clientWidth < 426) {
            menu.classList.add('none')
            menuContent.classList.add('none')
        }
}

    function nothingOn() {
        let projects = document.querySelector('.projects__content') 
        let artists = document.querySelector('.artists__content')
        let music = document.querySelector('.music__content')
        let clips = document.querySelector('.clips__content')
        let logo = document.querySelector('#logo')
        let menu = document.querySelector('.menu')
        let menuContent = document.querySelector('.menu__content')
        logo.style.fontSize = "2vw"
        projects.classList.add('none')
        artists.classList.remove('none')
        music.classList.add('none')
        clips.classList.add('none')

        if (document.documentElement.clientWidth < 426) { 
            logo.classList.add('none') 
        } else {
            logo.style.fontSize = "2vw"}

        if (document.documentElement.clientWidth < 426) {
            menu.classList.add('none')
            menuContent.classList.add('none')
        }
    }

    function musicOn() {
        let projects = document.querySelector('.projects__content') 
        let artists = document.querySelector('.artists__content')
        let music = document.querySelector('.music__content')
        let clips = document.querySelector('.clips__content')
        let logo = document.querySelector('#logo')
        let menu = document.querySelector('.menu')
        let menuContent = document.querySelector('.menu__content')
        logo.style.fontSize = "2vw"
        projects.classList.add('none')
        artists.classList.add('none')
        music.classList.remove('none')
        clips.classList.add('none')

        if (document.documentElement.clientWidth < 426) { 
            logo.classList.add('none') 
        } else {
            logo.style.fontSize = "2vw"}

        if (document.documentElement.clientWidth < 426) {
            menu.classList.add('none')
            menuContent.classList.add('none')
        }
    }

    function clipsOn() {
        let projects = document.querySelector('.projects__content') 
        let artists = document.querySelector('.artists__content')
        let music = document.querySelector('.music__content')
        let clips = document.querySelector('.clips__content')
        let logo = document.querySelector('#logo')
        let menu = document.querySelector('.menu')
        let menuContent = document.querySelector('.menu__content')
        logo.style.fontSize = "2vw"
        projects.classList.add('none')
        artists.classList.add('none')
        music.classList.add('none')
        clips.classList.remove('none')

        if (document.documentElement.clientWidth < 426) { 
            logo.classList.add('none') 
        } else {
            logo.style.fontSize = "2vw"}

        if (document.documentElement.clientWidth < 426) {
            menu.classList.add('none')
            menuContent.classList.add('none')
        }
    }

    function menuOn() {
        let projects = document.querySelector('.projects__content') 
        let artists = document.querySelector('.artists__content')
        let music = document.querySelector('.music__content')
        let clips = document.querySelector('.clips__content')
        let logo = document.querySelector('#logo')
        let menu = document.querySelector('.menu')
        let menuContent = document.querySelector('.menu__content')
        projects.classList.add('none')
        artists.classList.add('none')
        music.classList.add('none')
        clips.classList.add('none')
        logo.classList.remove('none')
        logo.style.fontSize = "14vw"
        menu.classList.remove('none')
        menuContent.classList.remove('none')


    }