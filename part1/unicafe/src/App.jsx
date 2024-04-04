import { useState } from 'react'



const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine  = ({ text, counter }) => <tr><td>{text}</td><td>{counter}</td></tr>

const Statistics = (props) => {
  return(
    <div>
    { ((props.good + props.bad + props.neutral) == 0)
      ? 
      <div>
      No feedback was given
      </div>
      :
      <div>
        <table>
          <tbody>
          <StatisticLine text="good" counter={props.good}/>
          <StatisticLine text="neutral" counter={props.neutral}/>
          <StatisticLine text="bad" counter={props.bad}/>
          <StatisticLine text="all" counter={props.good + props.neutral + props.bad}/>
          <StatisticLine text="avarage" counter={(props.good - props.bad)/(props.good + props.neutral + props.bad)}/>
          <StatisticLine text="positive" counter={(props.good / (props.good + props.neutral + props.bad))*100 + "%"}/>
          </tbody>
        </table>
      </div>
    }
    </div>
  )

}


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
      <h1>give feedback</h1>
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
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
} 

export default App