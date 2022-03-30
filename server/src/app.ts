import express, { Request, Response } from 'express'
import doenv from 'dotenv'
import cors from 'cors'
import mysql from 'mysql'

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
    res.send(`okk, env= ${process.env.NODE_ENV}`)
})

app.get('/db', async (req: Request, res: Response) => {
    con.query('SELECT "name" as name;', (err, results) => {
        if (err) {
            return res.send(err.message)
        }
        res.send(results[0])
    })
})

const port = process.env.PORT
app.listen(port, () => console.log(`running on port ${port}`))