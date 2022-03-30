import { useState, useEffect } from 'react'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_APP_API + ''

function App() {
  const [server, serServer] = useState('')
  const [data, setData] = useState('')
  useEffect(() => {
    axios.get('/').then(res => {
      setData(res.data)
    }).catch(e => {
      setData("error" + e.message)
    })
  }, [])
  return (
    <div className="App">
      ENV= {import.meta.env.VITE_APP_NAME}
      ENV2= {import.meta.env.VITE_APP_API}
      DATE FROM SERVER: {data}
      <br />
      <button type="button" onClick={() => {
        axios.get('/db').then(res => {
          serServer(JSON.stringify(res.data))
        }).catch(e => {
          serServer("error" + e.message)
        })
      }}>
        get data from db
      </button>
      <br />
      data from server:{server}
    </div>
  )
}

export default App
