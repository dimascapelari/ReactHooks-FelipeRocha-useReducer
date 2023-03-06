import { useReducer, useState } from "react";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return {
//         counter: state.counter + 1,
//       };
//     case "decrement":
//       return {
//         counter: state.counter - 1,
//       };
//     default:
//       return state;
//   }
// };

const reducer = (state, action) => {
  switch (action.type) {
    case "add-task":
      return {
        tasks: [...state.tasks, { name: action.payload, isCompleted: false }],
      };
    default:
      return state;
  }
};

function App() {
  // const [state, dispatch] = useReducer(reducer, { counter: 0 });

  const [state, dispatch] = useReducer(reducer, { tasks: [] });

  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      {/* <p>{state.counter}</p> */}
      {/* <button onClick={() => dispatch({ type: "increment" })}>Increment</button> */}
      {/* <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button> */}

      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => dispatch({ type: "add-task", payload: inputValue })}
      >
        Adicionar
      </button>
      {state.tasks.map((task, index) => (
        <p key={index}>{task.name}</p>
      ))}
    </div>
  );
}

export default App;
