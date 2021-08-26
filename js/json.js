const user = {id: 11, name: 'sami', job: 'programmer'};
const stringified = JSON.stringify( user );
console.log( user );
console.log( stringified );

const shop = {
    name: 'Alia Store',
    address: 'Ranbir Road',
    profit: 15000,
    products: [ 'laptop', 'mobile', 'mouse', 'keyboard', 'power bank' ],
    owner: {
        name: 'Alia Bhatt',
        prefession: 'actress'
    },
    isExpansive: false
};

//JavaScript Object to JSON String/Data
const shopStringified = JSON.stringify( shop );
console.log( shop );
console.log( shopStringified );

//JSON Data to JavaScript Object
const myShopObject = JSON.parse( shopStringified );
console.log( myShopObject );
