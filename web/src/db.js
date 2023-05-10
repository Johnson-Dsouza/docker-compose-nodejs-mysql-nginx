import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "db",
  user: "root",
  password: "Testpassword@123",
  port: 3306,
  database: "customersdb",
});
