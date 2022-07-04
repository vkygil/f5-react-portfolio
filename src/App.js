import { useState } from "react"
import NoteList from "./components/MainPage"

const App = () => {

  let [data, setData] = useState([
    {
      name: "Sukhchain Singh",
      title: "WEB DEVELOPER"
    } 
  ])

  return (
    <div>
      <Portfolio data={data} />
    </div>
  )
}
export default App