function BookInfo(title, author, pages, haveRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.haveRead = haveRead
    this.info = function() {
        return title + ", " + author + ", " + pages + ", " + haveRead
    }
};