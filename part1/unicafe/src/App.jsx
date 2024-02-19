import { useState } from 'react'



const SectionHeader = ({ title }) => <h1>{title}</h1>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Stat = ({ text, counter }) => <p> {text} {counter}</p>

  


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)

  const handleNeutralClick = () => setNeutral(neutral + 1)

  const handleBadClick = () => setBad(bad + 1)


  return (
    <div>
      <SectionHeader title = "give feedback"/>
      <Button 
        onClick={handleGoodClick}
        text="good"
      />
      <Button onClick={handleNeutralClick}
        text="neutral"
      />
      <Button onClick={handleBadClick}
        text="bad"
      />
      <SectionHeader title = "statistics"/>
      <Stat text="good" counter={good}/>
      <Stat text="neutral" counter={neutral}/>
      <Stat text="bad" counter={bad}/>
      <Stat text="all" counter={good + neutral + bad}/>
      <Stat text="avarage" counter={(good - bad)/(good + neutral + bad)}/>
      <Stat text="positive" counter={(good / (good + neutral + bad))*100 + "%"}/> 
    </div>
  )
} 

export default App