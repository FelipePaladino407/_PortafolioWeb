const books = [
    {
        title: 'Merequetengue',
        author: 'Stephen Hawking'
    },
    {
        title: 'John Lenon',
        author: 'John Smith'
    },
    {
        title: 'Harry the poker',
        author: 'MacPato "el ratero"'
    }
]

function getTheTitles(books){
    titles = [];
    for (const book of books){
        titles.push(book.title);

    }
    return titles;
}

console.log(getTheTitles(books));