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
      console.log(e);
      setData("error" + e.message)
    })
  }, [])
  return (
    <div className="App">
      React ENV1= {import.meta.env.VITE_APP_NAME} <br />
      React ENV2= {import.meta.env.VITE_APP_API}<br />
      DATE FROM SERVER: {data}<br />
      <br />
      <button type="button" onClick={() => {
        axios.get('/db').then(res => {
          serServer(JSON.stringify(res.data))
        }).catch(e => {
          serServer("error" + e.message)
        })
      }}>
        get some other data from server
      </button>
      <br />
      data from server:{server}
      <br />
      {import.meta.env.VITE_APP_API}
    </div>
  )
}

export default App
