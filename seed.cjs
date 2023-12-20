const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seed() {
  await prisma.movie.create({
    data: { title: "Spongebob: the movie", genre: "horror", ageRating: "G", release_year: 2020, director: "me", imglink: "no" },
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
