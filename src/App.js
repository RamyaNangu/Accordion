import Accordion from "./components/Accordion"
import './App.css'

const App = () => {
  const sections = [
    { title: "Section 1", content: "Content for section 1" },
    { title: "Section 2", content: "Content for section 2" },
    { title: "Section 3", content: "Content for section 3" },
  ]

  return(
    <div>
       <Accordion sections={sections} />
    </div>
  )
}

export default App