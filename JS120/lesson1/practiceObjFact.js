function createBooks (title, author, read = false) {
  return {
    title,
    author,
    read,

    getDescription() {
      console.log(`${this.title} was written by ${this.author}. I ${this.read ? "have":"haven't"} read it.`);
    },

    readBook () {
      this.read = true;
    },
  };
}

book1 = createBooks("Mythos", "Stephen Fry");
book2 = createBooks("Me Talk Pretty One Day", "David Sedaris", false);
book3 = createBooks("Aunts aren't Gentlemen", "PG Wodehouse", true);

book1.getDescription();
book2.getDescription();
book3.getDescription();

book1.readBook();

console.log(book1.read);
console.log(book2.read);
console.log(book3.read);

book1.getDescription();
book2.getDescription();
book3.getDescription();