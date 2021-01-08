// import node modules
import { Pool, createPool } from "mysql2/promise";

// function to create db pool/connection
export function connect(): Pool {

    const connection: Pool = createPool(
        {
            port: 3306,
            user: 'root',
            password: '',
            host: 'localhost',
            connectionLimit: 10,
            database: 'mariadb_typescript',
        }
    );
    
    return connection;
}