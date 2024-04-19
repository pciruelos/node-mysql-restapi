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
    const result =await pool.request().query("SELECT GETDATE()")
    console.log(result, "hello")
    return pool;
  } catch (error) {
    console.log(error);
  }
};
