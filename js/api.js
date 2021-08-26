/* fetch( 'https://jsonplaceholder.typicode.com/users/1' )
    .then( response => response.json() )
    .then( json => console.log( json ) ); */

function loadTodo() {
    fetch( 'https://jsonplaceholder.typicode.com/todos' )
        .then( response => response.json() )
        .then( json => console.log( json ) );
}

function displayUser( data ) {
    // const users = data.map( x => x.name );
    const ul = document.getElementById( 'users' );
    for ( const user of data ) {
        const li = document.createElement( 'li' );
        li.innerText = `Name: ${ user.name }
                        Email: ${ user.email }
                        City: ${ user.address.city }
                        
                        `;
        ul.appendChild( li );
    }
    console.log( data );
}

function loadUser() {
    fetch( 'https://jsonplaceholder.typicode.com/users' )
        .then( res => res.json() )
        .then( data => displayUser( data ) );
}

function loadPost() {
    fetch( 'https://jsonplaceholder.typicode.com/posts' )
        .then( res => res.json() )
        .then( data => console.log( data ) );
}

document.getElementById( 'load-todo-button' ).addEventListener( 'click', function () {
    loadTodo();
} );

document.getElementById( 'load-user-button' ).addEventListener( 'click', function () {
    loadUser();
} );

document.getElementById( 'load-post-button' ).addEventListener( 'click', function () {
    loadPost();
} );