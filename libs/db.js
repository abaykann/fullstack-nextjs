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
//       user: 'alazizakbar',
//       password: '123456',
//       database: 'akbar',
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

// export default knex;


var knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'ec2-52-7-115-250.compute-1.amazonaws.com',
    user: 'axeerdtzavcghq',
    password: '784c58cd33acd9f420ba724b9f76b039ab49c14f89bfcf25b19cf30ef79f8899',
    database: 'dlgkmlei89533',
    ssl: { rejectUnauthorized: false }
  }
  
});

export default knex;
