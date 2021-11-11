import React from 'react'
import Content from './Components/Content'
import Totals from './Components/Totals'


const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <h1>{course.name}</h1>
      <Content content={course.parts} />
      <Totals content={course.parts} />
    </div>
  );
};

export default App;
