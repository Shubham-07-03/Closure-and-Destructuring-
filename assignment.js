/*
1. You are building a counter application that tracks the number of times a button is clicked. Implement the
counter using closure.
*/

function createCounter() {
    let count = 0; 

    return {
        increment: function() {
            count++;
            console.log(count);
        },
        decrement: function() {
            count--;
            console.log(count);
        },
        getCount: function() {
            return count;
        }
    };
}
const counter = createCounter();

counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.decrement(); // Output: 1
console.log(counter.getCount()); // Output: 1






/*
2. You have an object representing a customer order with properties orderId, productName, and quantity.
Use destructuring to extract and print these properties.
*/

let order = {
    orderId: "123456",
    productName: 'Laptop',
    quantity: 2,
};

// Destructuring the properties
const { orderId, productName, quantity } = order;

// Printing the extracted properties
console.log(`Order ID: ${orderId}`);
console.log(`Product Name: ${productName}`);
console.log(`Quantity: ${quantity}`);

output: 
Order ID: 123456
Product Name: Laptop
Quantity: 2


/*
3. In this coding challenge let's try to implement the cart feature using javascript closure. Using JS closures
try to create a cart array and return a function to getCartItems.
*/

function createCart() {
    const cart = []; // Private array to hold cart items

    return {
        addItem: function(item) {
            cart.push(item); // Add item to the cart
            console.log(`${item} has been added to the cart.`);
        },
        removeItem: function(item) {
            const index = cart.indexOf(item);
            if (index > -1) {
                cart.splice(index, 1); // Remove item from the cart
                console.log(`${item} has been removed from the cart.`);
            } else {
                console.log(`${item} is not in the cart.`);
            }
        },
        getCartItems: function() {
            console.log(`Cart Items: ${JSON.stringify(cart)}`);
        }
    };
}
const myCart = createCart();

myCart.getCartItems(); // Output: Cart Items: []
myCart.addItem('Laptop');      // Output: Laptop has been added to the cart.
myCart.addItem('Mouse');       // Output: Mouse has been added to the cart.
myCart.getCartItems(); // Output: Cart Items: ["Laptop","Mouse"]
myCart.removeItem('Mouse');    // Output: Mouse has been removed from the cart.
myCart.getCartItems(); // Output: Cart Items: ["Laptop"]








/*
 4. Continuing the previous coding challenge, now let’s implement the add to cart feature. On calling add to
    cart closure function, the object of productId, name, quantity and price should be added to the cartItem.
    Note that if duplicate items with same prouductId is added, the product quantity must be incremented. Use
    javascript closures to achieve the output.
*/

function shoppingCart() {
    let cartItems = [];
  
    function addItem(product) {
      const existingItem = cartItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // If product exists, increment quantity
        existingItem.quantity += 1;
      } else {
        // Add new product to cart with quantity 1
        cartItems.push({ ...product, quantity: 1 });
      }
    }
  
    function getCartItems() {
      return cartItems;
    }
  
    return {
      addItem,
      getCartItems
    };
  }
  const cart = shoppingCart();
  console.log('Cart Items:', cart.getCartItems()); // OUTPUT: []
  
  const product1 = { id: 1, name: 'Product 1', price: 10 };
  const product2 = { id: 2, name: 'Product 2', price: 20 };
  
  cart.addItem(product1);
  cart.addItem(product2);
  cart.addItem(product1);
  
  console.log('Cart Items:', cart.getCartItems());
  // OUTPUT:
  // Cart Items: [
  //   { id: 1, name: 'Product 1', price: 10, quantity: 2 },
  //   { id: 2, name: 'Product 2', price: 20, quantity: 1 }
  // ]
  







/*
5. Continuing the previous coding challenge, now let’s implement the remove item from cart feature. On
calling the remove item closure function, the specified productId item must be removed from cartItems
array.Use javascript closures to achieve the output.
*/

function shoppingCart() {
    let cartItems = [];

    // Add an item to the cart
    function addItem(product) {
        let existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            // If the product already exists, increase the quantity
            existingItem.quantity += 1;
        } else {
            // Otherwise, add a new item with a quantity of 1
            product.quantity = 1;
            cartItems.push(product);
        }
    }

    // Remove an item from the cart by productId
    function removeItem(productId) {
        cartItems = cartItems.filter(item => item.id !== productId);
    }

    // Get current cart items
    function getCartItems() {
        return cartItems;
    }

    // Return closures to add, remove, and get cart items
    return {
        addItem,
        removeItem,
        getCartItems
    };
}
const cart = shoppingCart();

// Adding products
const product1 = { id: 1, name: 'Product 1', price: 10 };
const product2 = { id: 2, name: 'Product 2', price: 20 };

cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product1); // Adding Product 1 again increases quantity

console.log('Cart Items:', cart.getCartItems());
// Output: Cart Items: [
//   { id: 1, name: 'Product 1', price: 10, quantity: 2 },
//   { id: 2, name: 'Product 2', price: 20, quantity: 1 }
// ]

// Removing Product 2
cart.removeItem(2);

console.log('Cart Items:', cart.getCartItems());
// Output: Cart Items: [
//   { id: 1, name: 'Product 1', price: 10, quantity: 2 }
// ]












/*
6. You are developing a music playlist management system. Implement functions that leverage closures
    and higher-order functions to perform common playlist operations.

Task 1: Create a function createPlaylist that takes a playlist name as a parameter and returns a closure. This
        closure should allow adding and listing songs for the given playlist.

Task 2: Create a function addSong that takes a song name and artist as parameters and adds the song to the
        specified playlist. Use the closure created in TASK 1.

Task 3: Create a function listSongs that lists all the songs in a specified playlist. Use the closure created in the
        Task 1
*/

// Task 1: Create a playlist
function createPlaylist(playlistName) {
    let songs = [];

    // Return closures for managing the playlist
    return {
        addSong: function(songName, artist) {
            songs.push({ songName, artist });
        },
        listSongs: function() {
            if (songs.length === 0) {
                console.log(`${playlistName} is empty.`);
            } else {
                const songList = songs.map(song => `${song.songName} by ${song.artist}`).join(', ');
                console.log(`${playlistName} Playlist: ${songList}`);
            }
        }
    };
}

// Task 2: Add a song to the playlist
function addSong(playlist, songName, artist) {
    playlist.addSong(songName, artist);
}

// Task 3: List all songs in the playlist
function listSongs(playlist) {
    playlist.listSongs();
}
const myPlaylist = createPlaylist("My Favorites");

addSong(myPlaylist, "Perfect", "Ed Sheeran");
addSong(myPlaylist, "Closer", "The Chainsmokers");
addSong(myPlaylist, "Lover", "Taylor Swift");

listSongs(myPlaylist); 
// Output: My Favorites Playlist: Song1 by Artist1, Song2 by Artist2, Song3 by Artist3











