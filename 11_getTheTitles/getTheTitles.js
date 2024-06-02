const getTheTitles = function(books) {
    /*const titles = books.map((book) => {
        return book.title;
    });
    return titles;*/
    //Can be done in one line:
    return books.map((book) => books.title)
};

// Do not edit below this line
module.exports = getTheTitles;

/*describe('getTheTitles', () => {
    const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }
    ]

  test('gets titles', () => {
    expect(getTheTitles(books)).toEqual(['Book','Book2']);
  });*/