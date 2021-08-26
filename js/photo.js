function loadPhotos() {
    fetch( 'https://jsonplaceholder.typicode.com/photos' )
        .then( res => res.json() )
        .then( data => displayPhotos( data ) );
}

loadPhotos();

function displayPhotos( photos ) {
    const photoSection = document.getElementById( 'photos' );
    for ( const photo of photos ) {
        if ( photo.albumId == 1 ) {
            const div = document.createElement( 'div' );
            div.classList.add( 'photo' );
            div.innerHTML = `
            <h3>${ photo.title }</h3>
            <img src="${ photo.thumbnailUrl }">
            `
            photoSection.appendChild( div );
        }
    }
}