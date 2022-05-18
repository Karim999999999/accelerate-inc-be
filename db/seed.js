import { connectToDb, disconnectDb } from './helpers.js';
import articles from './data.js';
import Article from '../models/article.js';
import User from '../models/user.js';

const adminUser = {
  firstName: 'admin',
  lastName: 'user',
  email: 'admin@admin.com',
  username: 'admin',
  password: 'password!1',
  articles: [
    '6241951597021a989b204ea9',
    '6241b5be7785e878f68c8827',
    '6241b6217785e878f68c8833',
  ],
  isAdmin: true,
  isWriter: false,
  isEditor: false,
  isCoach: false,
  isAthlete: false,
  isMedical: false,
};

const writerUser = {
  firstName: 'writer',
  lastName: 'user',
  email: 'writer@writer.com',
  username: 'writer',
  password: 'password!1',
  articles: [
    '62419f217785e878f68c8814',
    '6241b5f37785e878f68c882d',
    '6241b6a07785e878f68c8839',
  ],
  isAdmin: false,
  isWriter: true,
  isEditor: false,
  isCoach: false,
  isAthlete: false,
  isMedical: false,
};

const editorUser = {
  firstName: 'editor',
  lastName: 'user',
  email: 'editor@editor.com',
  username: 'editor',
  password: 'password!1',
  articles: [
    '6241b5497785e878f68c881b',
    '6241b58c7785e878f68c8821',
    '6241b6cb7785e878f68c883e',
  ],
  isAdmin: false,
  isWriter: false,
  isEditor: true,
  isCoach: false,
  isAthlete: false,
  isMedical: false,
};

const coachUser = {
  firstName: 'coach',
  lastName: 'user',
  email: 'coach@coach.com',
  username: 'coach',
  password: 'password!1',
  articles: [],
  isAdmin: false,
  isWriter: false,
  isEditor: false,
  isCoach: true,
  isAthlete: false,
  isMedical: false,
};

const athleteUser = {
  firstName: 'athlete',
  lastName: 'user',
  email: 'athlete@athlete.com',
  username: 'athlete',
  password: 'password!1',
  articles: [],
  isAdmin: false,
  isWriter: false,
  isEditor: false,
  isCoach: false,
  isAthlete: true,
  isMedical: false,
};

const medicalUser = {
  firstName: 'medical',
  lastName: 'user',
  email: 'medical@medical.com',
  username: 'medical',
  password: 'Password!1',
  articles: [],
  isAdmin: false,
  isWriter: false,
  isEditor: false,
  isCoach: false,
  isAthlete: false,
  isMedical: true,
};

async function seed() {
  //? Connecting.
  console.log('About to connect to Mongodb via Mongoose');
  await connectToDb();
  console.log('Successfully connected to Mongo DB via Mongoose!');

  //? Clearing the data
  console.log('Clearing out the db...');
  await User.deleteMany({});
  await Article.deleteMany({});

  //? Creating Admin user
  console.log('Creating users...');
  const [admin, writer, editor, coach, athlete, medical] = await User.create([
    adminUser,
    writerUser,
    editorUser,
    coachUser,
    athleteUser,
    medicalUser,
  ]);
  console.log(`Created admin user: ${admin._id}`);
  console.log(`Created writer user: ${writer._id}`);
  console.log(`Created editor user: ${editor._id}`);
  console.log(`Created coach user: ${coach._id}`);
  console.log(`Created athlete user: ${athlete._id}`);
  console.log(`Created medical user: ${medical._id}`);

  //? SEEDING
  console.log('About to seed...');
  const articlesWithAuthors = articles.map(article => {
    article.author = admin._id;
    return article;
  });
  await Article.create(articlesWithAuthors);
  console.log(`Seeded ${articles.length} articles!`);

  //? Disconnecting
  console.log('About to disconnect..');
  await disconnectDb();
  console.log('Disconnected!');
}
seed();
