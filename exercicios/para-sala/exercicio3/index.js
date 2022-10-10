const author = require("./Author");

const autor = new author("fernanda@email.com", "12345");
console.log(autor.posts);
console.log(autor.createPosts(3));
console.log(autor.createPosts(4));
console.log(autor.posts);
