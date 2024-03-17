const Content = (props) => {

    const parts = props.parts;
    const exercises = parts.map(ex => ex.exercises);
    const total = exercises.reduce((a, b) => a + b)

    return (
        <div>
          {parts.map(part => <Part key={part.id} part={part}/>)}
          <b>total {total} of exercises</b>
        </div>
    )

}

const Part = (props) => {

    return(
      <p>{props.part.name} {props.part.exercises}</p>
    )
}

const Course = (props) => {

    const parts = props.course.parts;

    return(
      <div>
        <h1>{props.course.name}</h1>
        <Content parts = {parts}/>
      </div>
    )
  }
  
export default Course