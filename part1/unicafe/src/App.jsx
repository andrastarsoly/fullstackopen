import { useState } from 'react'



const SectionHeader = (props) => {
  return(
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}


const handleClick = () => {

}


  


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <SectionHeader title = "give feedback"/>
      <SectionHeader title = "statistics"/>
    </div>
  )
}

export default App