import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Anecdote = (props) => {
  return(
  <>
    <p>{props.anecdote}</p>
    <p>has {props.allPoints} votes</p>
  </>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const startPoints = new Array(8).fill(0);


  const [selected, setSelected] = useState(0);
  const [allPoints, setallPoints] = useState(startPoints);
  const [maxIndex, setMaxIndex] = useState(0);


  const handleVote = () => {
    const copy = [ ...allPoints ];
    copy[selected] += 1;
    let max = Math.max(...copy)
    setallPoints(copy);
    setMaxIndex(copy.indexOf(max));
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const handleRandomVote = () => setSelected(getRandomInt(anecdotes.length));


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} allPoints={allPoints[selected]}/>
      <Button 
        handleClick = {handleVote}
        text="vote"
      />
      <Button 
        handleClick = {handleRandomVote}
        text="next anecdote"
      />
      <h1>Anecdote with the most votes</h1>
      <Anecdote anecdote={anecdotes[maxIndex]} allPoints={allPoints[maxIndex]}/>
    </div>
  )
}

export default App
