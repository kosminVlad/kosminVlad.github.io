fetch('data.json')
    .then(response => response.json())
    .then(albums => {
        const musicContent = document.querySelector('.music__content_blocks')

        albums.forEach(elem => {
            const album = `                
            <div class="music__content_block">
            <a href="${elem.url}"> <img class="music__content_img" src="${elem.image}" alt="">
             <h1 class="music__content_h1"> ${elem.title} </h1> </a>
             <p class="music__content_p"> ${elem.author} </p>`

             musicContent.insertAdjacentHTML('beforeend', album)
        })
    })

fetch('clips.json')
    .then(response => response.json())
    .then(clips => {
        const clipsContent = document.querySelector('.clips__content')
    
        clips.forEach(elem => {
            const clip = `                
            <div class="clips__content_block">
            <iframe style="width: 48vw; height: 26vw;" src="${elem.url}" referrerpolicy="no-referrer-when-downgrade" title="YouTube videosads player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p class="clips__content_p">${elem.author} - ${elem.title}</p>
        </div>`

        clipsContent.insertAdjacentHTML('beforeend', clip)
        })
    })

fetch('artists.json')
    .then(response => response.json())
    .then(artists => {
        const artistsContent = document.querySelector('.artists__content_block')

        artists.forEach(elem => {
            const artist = `
            <div class="artist__content_block"> 
            <a href="${elem.url}"> <img class="artists__content_block-img" src="${elem.image}" alt=""> </a>
            <a href="${elem.url}"> <p> ${elem.artist} </p> </a>
        </div>`

        artistsContent.insertAdjacentHTML('beforeend', artist)
        })
    })