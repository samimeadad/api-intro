function loadUser() {
    fetch( 'https://jsonplaceholder.typicode.com/users' )
        .then( response => response.json() )
        .then( data => displayUser( data ) );
}

function loadTodo() {
    fetch( 'https://jsonplaceholder.typicode.com/todos' )
        .then( res => res.json() )
        .then( data => displayTodo( data ) );
}

function displayUser( data ) {
    const ul = document.getElementById( 'users' );
    for ( const user of data ) {
        const li = document.createElement( 'li' );
        li.innerText = `Name: ${ user.name }
                        Address: ${ user.address.city }
                        Email: ${ user.email }
                        
                        `
        ul.appendChild( li );
    }
}

function displayTodo( data ) {
    const ul = document.getElementById( 'todo' );
    for ( const todo of data ) {
        const li = document.createElement( 'li' );
        if ( todo.userId == 10 ) {
            li.innerText = `User ID: ${ todo.userId }
                            ID: ${ todo.id }
                            Title: ${ todo.title }
                            Completed: ${ todo.completed }
                            
                            `;
            ul.appendChild( li );
        }


    }
}

document.getElementById( 'load-user-button' ).addEventListener( 'click', function () {
    loadUser();
} );

document.getElementById( 'load-todo-button' ).addEventListener( 'click', function () {
    loadTodo();
} );