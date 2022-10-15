// imports always go at the top of the file
// this is called an IIFE (immediately invoked function expression)
import { getData } from "./modules/dataMiner.js";

// it's a pretty common JavaScript programming pattern
// also called a module file
(() => {
    console.log('fired!');

    let theArtists = document.querySelector('#favourites'),
        theTemplate = document.querySelector('#bio-template').content,
        faveData;

        // debugger;

    function buildArtists(data) {
        // get all the keys (names) from the data object and use that to iterate through the data
        debugger;

        faveData = data
        
        const artists = Object.keys(data); // Object.keys creates an array

        artists.forEach(artist => {
            // copy the template's contents
            let panel = theTemplate.cloneNode(true);

            // get a reference to the template's elements
            let containers = panel.firstElementChild.children;

            // grab the image from the object and set it as the source 
            containers[0].querySelector('img').src = `images/${data[artist].picture}`;
            containers[0].querySelector('img').id = artist;
            containers[0].querySelector('img').addEventListener('click', showArtist); 

            theArtists.appendChild(panel);
//lightbox, makes you click 3 times to close? 
            const lightbox = document.createElement('div')
            lightbox.id = 'lightbox'
            document.body.appendChild(lightbox)

            const images = document.querySelectorAll('img')
            images.forEach(image =>{
            image.addEventListener('click', e => {
                lightbox.classList.add('active')
                const img = document.createElement('img')
                img.src = image.src
                while (lightbox.firstChild) {
                    lightbox.removeChild(lightbox.firstChild)
                    }
                    lightbox.appendChild(img)
    })
})
    lightbox.addEventListener('click',e => {
        if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})

        })
    }
    

    function showArtist() {
        debugger;

        let currentArtist = faveData[this.id];
    }

    getData(`./data.json`, buildArtists);
})();

