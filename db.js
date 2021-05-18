const Sequelize = require('sequelize');
const { STRING, TEXT } = Sequelize;
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/bookmark_db');

const data = [
    {
      name: 'LinkedIn',
      URL: 'http://www.linkedin.com',
      category: 'jobs'
    },
    {
      name: 'Indeed',
      URL: 'http://www.indeed.com',
      category: 'jobs'
    },
    {
      name: 'Amazon',
      URL: 'http://www.amazon.com',
      category: 'shopping'
    },
    {
      name: 'W3C Shools - Javascript',
      URL: 'https://www.w3schools.com/jsref/default.asp',
      category: 'coding'
    },
    {
      name: 'Target',
      URL: 'http://www.shopping.com',
      category: 'shopping'
    },
    {
      name: 'The Weeknd',
      URL: 'https://www.theweeknd.com/',
      category: 'music'
    },
    {
      name: 'Stack Overflow',
      URL: 'https://stackoverflow.com/',
      category: 'coding'
    },
  ];

const Page = conn.define('page', {
    name: {
      type: STRING,
      allowNull: false,
    },
    URL: {
       type: STRING,
       allowNull: false,
     },
     category: {
       type: STRING,
       allowNull: false,
     }
   });

const syncAndSeed = async() => {
    await conn.sync({force: true});
    await data.forEach(el => {
        return Page.create({name: el[0], URL: el[1], category: el[2]})})
}

module.exports = {
    conn,
    syncAndSeed,
    models: {
        Page
    }
};