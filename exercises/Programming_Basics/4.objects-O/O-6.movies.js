class Movie {
  constructor(title, director, year, actor, isSeen) {
    this.title = title;
    this.director = director;
    this.year = year;
    this.actor = actor;
    this.isSeen = isSeen;
  }
}

const Prestige = new Movie('The Prestige', 'Chris Nolan', 2006, 'Christian Bale', true);
const Memento = new Movie('Memento', 'Chris Nolan', 2000, 'Guy Pearce', true);
const ForrestGump = new Movie('Forrest Gump', 'Robert Zemeckis', 1994, 'Tom Hanks', true);
const Matrix = new Movie('Matrix', 'Andy Wachovski', 1999, 'Keanu Reeves', false);
const Inception = new Movie('Inception', 'Chris Nolan', 2010, 'Leonardo Di Caprio', true);

const allMovies = {
  prestige: Prestige,
  memento: Memento,
  forrestGump: ForrestGump,
  matrix: Matrix,
  inception: Inception
}

const findSeenMovies = function(movieCollection) {
  for (movie in movieCollection) {
    if (movieCollection[movie].isSeen) {
      console.log(movieCollection[movie]);
    }
  }
}

findSeenMovies(allMovies);
