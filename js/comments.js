
/* const loadComments = async () => {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    const res = await fetch( url );
    const data = await res.json();
    displayComments( data );
} */

function loadComments() {
    fetch( 'https://jsonplaceholder.typicode.com/comments' )
        .then( res => res.json() )
        .then( data => displayComments( data ) );
}
loadComments();

const displayComments = comments => {
    for ( const comment of comments ) {
        console.log( comment );
    }
    // console.log( comments );
}

