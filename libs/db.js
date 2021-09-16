// var knex = require('knex')({
//   client: 'mysql',
//   connection: {
//       host: 'localhost',
//       user: 'root',
//       password: '',
//       database: 'anekabaru2'
//   }
// });

// export default knex;

// var knex = require('knex')({
//   client: 'pg',
//   connection: {
//       host: 'localhost',
//       user: 'postgres',
//       password: 'provisms',
//       database: 'fullstak-next',
//       port: 5432,
//       charset: 'utf8'
//   }
// });

// export default knex;



// var knex = require('knex')({
//   client: 'pg',
//   connection: {
//       host: 'satao.db.elephantsql.com',
//       user: 'lldlrqrb',
//       password: 'F4Gi--hThPUnWZFY69aJREr09V4l2er7',
//       database: 'lldlrqrb'
//   }
  
// });

var knex = require('knex')({
  client: 'pg',
  connection: {
      host: '34.150.195.96',
      user: 'postgres',
      password: 'blokieno170',
      database: 'postgres'
  }
  
});

export default knex;
