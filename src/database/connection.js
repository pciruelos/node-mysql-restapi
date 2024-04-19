import sql from "mssql";

const dbSettings = {
  user: "sa",
  password: "yourStrong#Password",
  server: "localhost",
  database: "webstore",
  options: {
    encrypt: false,
    trustServerCertificate: true,
  }
};

export const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    console.log("pool up")
    return pool;
  } catch (error) {
    console.log(error);
  }
};
