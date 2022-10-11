import { Author } from "./Author.js";
import { Book } from "./Book.js";

class aboutBook {
  authorName = new Author(
    "André Vianco",
    "vianco@gmail",
    new Date(10, 1, 1975)
  );
  book = () => {
    const book = new Book(
      "Os sete",
      9788845292613,
      this.authorName.name,
      126.9,
      1
    );
    return book;
  };
}

const instanceBook = new aboutBook();

console.log(instanceBook.book().author);
