class Author {
    #authorName;
    #authorEmail;
    #authorBirthDate;

    constructor(authorName, authorEmail, authorBirthDate) {
        this.#authorName = authorName;
        this.#authorEmail = authorEmail;
        this.#authorBirthDate = authorBirthDate;
    }

    get authorName() {
        return this.#authorName;
    }

    set authorName(authorName) {
        this.#authorName = authorName;
    }

    get authorEmail() {
        return this.#authorEmail;
    }

    set authorEmail(authorEmail) {
        this.#authorEmail = authorEmail;
    }

    get authorBirthDate() {
        return this.#authorBirthDate;
    }

    set authorBirthDate(authorBirthDate) {
        this.#authorBirthDate = authorBirthDate;
    }

}