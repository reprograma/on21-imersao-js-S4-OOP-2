import User from './classUser.js';

class Author extends User {

    #numPost

    constructor(email, password) {
        super(email, password)

        this.#numPost = 0;

    }

    islogged() {
        //...
    }

    createPost(post) {
        this.#post++;
    }

    get numPost() {
        return this.createPost()
    }
}

