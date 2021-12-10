'use strict';

const {
  db,
  models: { User, News },
} = require('../server/db');
const scrapeAllNews = require('../server/lib/scrapeAllNews');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  const news = await scrapeAllNews();
  console.log('headlines collected..');

  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
  ]);

  // const allNews = await Promise.all(
  //   news.forEach((headline) => {
  //     News.create({
  //       source: headline['source'],
  //       title: headline['title'],
  //       link: headline['link'],
  //     });
  //   })
  // );

  const allNews = news.map((headline) => {
    new Promise((resolve, reject) => {
      resolve(
        News.create({
          source: headline['source'],
          title: headline['title'],
          link: headline['link'],
        })
      );
    });
  });

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${allNews.length} headlines`);
  console.log(`seeded successfully`);

  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    // await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
