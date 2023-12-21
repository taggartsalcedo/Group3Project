const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seed() {
  await prisma.movie.createMany({
    data: [{ title: "Scream", genre: "horror", ageRating: "R", release_year: 1996, director: "Wes Craven", imglink: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p18852_p_v10_al.jpg" },
          { title: "Nightmare on Elm Street", genre: "horror", ageRating: "R", release_year: 1984, director: "Jack Sholder", imglink: "https://m.media-amazon.com/images/M/MV5BNzFjZmM1ODgtMDBkMS00NWFlLTg2YmUtZjc3ZTgxMjE1OTI2L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg" },
          { title: "Insidious", genre: "horror", ageRating: "PG13", release_year: 2010, director: "Patrick Wilson", imglink: "https://m.media-amazon.com/images/M/MV5BMTYyOTAxMDA0OF5BMl5BanBnXkFtZTcwNzgwNTc1NA@@._V1_.jpg" },
          { title: "Casino Royale", genre: "action", ageRating: "PG13", release_year: 2006, director: "Martin Campbell", imglink: "https://upload.wikimedia.org/wikipedia/en/1/15/Casino_Royale_2_-_UK_cinema_poster.jpg" },
          { title: "First Blood", genre: "action", ageRating: "R", release_year: 1984, director: "Ted Kotcheff", imglink: "https://m.media-amazon.com/images/M/MV5BODBmOWU2YWMtZGUzZi00YzRhLWJjNDAtYTUwNWVkNDcyZmU5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg" },
          { title: "John Wick", genre: "action", ageRating: "R", release_year: 2014, director: "Chad Stahelski", imglink: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg" },
          { title: "Happy Gilmore", genre: "comedy", ageRating: "PG13", release_year: 1996, director: "Dennis Dugan", imglink: "https://upload.wikimedia.org/wikipedia/en/b/be/Happygilmoreposter.jpg" },
          { title: "Anger Management", genre: "action", ageRating: "PG13", release_year: 2014, director: "Chad Stahelski", imglink: "https://m.media-amazon.com/images/M/MV5BMDg1YTNiODItZGYyOC00NGIwLWI3MjYtMTY3NDQ0ZDIwYjBiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg" },
          { title: "Superbad", genre: "comedy", ageRating: "R", release_year: 2003, director: "Peter Segall", imglink: "https://m.media-amazon.com/images/M/MV5BY2VkMDg4ZTYtN2M3Yy00NWZiLWE2ODEtZjU5MjZkYWNkNGIzXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_FMjpg_UX1000_.jpg" },
          { title: "Straight Outta Compton", genre: "drama", ageRating: "R", release_year: 2014, director: "F. Gary Grey", imglink: "https://m.media-amazon.com/images/M/MV5BMTA5MzkyMzIxNjJeQTJeQWpwZ15BbWU4MDU0MDk0OTUx._V1_FMjpg_UX1000_.jpg" },
          { title: "Goodfellas", genre: "drama", ageRating: "R", release_year: 1990, director: "Martin Scorsese", imglink: "https://assets.mycast.io/posters/godfellas-fan-casting-poster-38118-large.jpg?1589372662" },
          { title: "Boyz N the Hood", genre: "drama", ageRating: "R", release_year: 1991, director: "John Singleton", imglink: "https://m.media-amazon.com/images/M/MV5BZmRjNDI5NTgtOTIwMC00MzJhLWI4ZTYtMmU0ZTE3ZmRkZDNhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg" },
          
  ],
  });

  await prisma.user.createMany({
    data: [{ username: "John", password: "john", email: "john@gmail.com", isAdmin: true},
    { username: "Clayton", password: "clayton", email: "clayton@gmail.com", isAdmin: false},
    { username: "Taggert", password: "taggert", email: "taggert@gmail.com", isAdmin: false}
  ]

  });
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
