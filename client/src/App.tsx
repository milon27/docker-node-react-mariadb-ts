import { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'

axios.defaults.baseURL = import.meta.env.VITE_APP_API + ''

function App() {
  const [server, serServer] = useState('')
  const [data, setData] = useState('')
  useEffect(() => {
    axios.get('/').then(res => {
      setData(res.data)
    }).catch(e => {
      console.log(e);
      setData("error" + e.message)
    })
  }, [])
  return (
    <div className="App">
      React ENV1= {import.meta.env.VITE_APP_NAME} <br />
      React ENV2= {import.meta.env.VITE_APP_API}<br />
      UseEffect DATA FROM SERVER: {data}<br />
      <br />
      <button type="button" onClick={() => {
        axios.get('/db').then(res => {
          serServer(JSON.stringify(res.data))
        }).catch(e => {
          serServer("error" + e.message)
        })
      }}>
        create table
      </button>
      <br />

      <button type="button" onClick={() => {
        axios.get('/insert').then(res => {
          serServer(JSON.stringify(res.data))
        }).catch(e => {
          serServer("error" + e.message)
        })
      }}>
        insert a name
      </button>
      <br />

      <button type="button" onClick={() => {
        axios.get('/get').then(res => {
          serServer(JSON.stringify(res.data))
        }).catch(e => {
          serServer("error" + e.message)
        })
      }}>
        show all
      </button>
      <br />



      data from server:{server}
      <br />
      {import.meta.env.VITE_APP_API}

      Today is: {moment().toLocaleString()}
    </div>
  )
}

export default App
