const { Pool, Client } = require("pg");

const credentials = {
  user: "postgres",
  host: "localhost",
  database: "instagram",
  password: "codingmart@123",
  port: 5432,
};

// console.log(
//   DATABASE_USER_NAME,
//   DATABASE_NAME,
//   DATABASE_HOST,
//   DATABASE_PASSWORD,
//   DATABASE_PORT
// );

const client = new Client(credentials);
client.connect((err) => {
  if (err) console.log(err);
  else console.log("Connected to Database");
});

async function getRes(){
    let users=await client.query('select * from shyam');
    console.log(users.rows);
}

getRes();
