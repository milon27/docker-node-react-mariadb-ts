import express, { Request, Response } from 'express'
import doenv from 'dotenv'
import cors from 'cors'
import mysql from 'mysql'
import moment from 'moment'


doenv.config()
const app = express()
app.use(cors({ origin: true }))

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

app.get('/', (req: Request, res: Response) => {
    res.send(`server is running on port 2727, env= ${process.env.NODE_ENV}, now ${moment().toISOString()}`)
})

app.get('/db', async (req: Request, res: Response) => {
    con.query(`
            CREATE TABLE names (
                id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(30) NOT NULL
            ) 
    `, (err, results) => {
        if (err) {
            return res.send(err.message)
        }
        res.send('name db table created.')
    })
})

app.get('/insert', async (req: Request, res: Response) => {
    con.query(`INSERT INTO names (name) VALUES ('John')`, (err, results) => {
        if (err) {
            return res.send(err.message)
        }
        res.send('info inserted')
    })
})

app.get('/get', async (req: Request, res: Response) => {
    con.query('SELECT * from names;', (err, results) => {
        if (err) {
            return res.send(err.message)
        }
        res.send(results)
    })
})



const port = process.env.PORT
app.listen(port, () => console.log(`running on port ${port}`))