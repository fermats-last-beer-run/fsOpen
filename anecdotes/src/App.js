import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [greatestVotes, setGreatestVotes] = useState(0);
  console.log(votes);
  console.log(selected);

  const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
  );

  const setRandomSelection = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const incrementInArray = (array, location) => {
    const copy = [...array];
    console.log(copy);
    copy[location] += 1;
    return copy;
  };

  const changeVotes = () => {
    if(votes[selected] + 1 > votes[greatestVotes]) setGreatestVotes(selected)
    setVotes(incrementInArray(votes, selected));
  }

  return (
    <div>
      <div>
        <h1> Anecdote of the Day </h1>
        <p>{anecdotes[selected]}</p>
        {`${votes[selected]} votes `}
        <Button
          handleClick={() => changeVotes()}
          text="vote"
        />
        <Button handleClick={() => setRandomSelection()} text="next anecdote" />
      </div>
      <div>
        <p>{anecdotes[greatestVotes]}</p>
        {`${votes[greatestVotes]} votes `}
      </div>
    </div>
  );
};

export default App;