import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Flashcard from "./components/Flashcard";

const flashcardInfo = [
  {
    title: "useState",
    definition: "A Hook that lets you add React state to function components.",
  },
  {
    title: "process.argv",
    definition:
      "An array containing the command-line arguments passed when the Node process was launched.",
  },
  {
    title: "Spread Operator",
    definition:
      "The ... syntax used to copy elements of an array or properties of an object into a new one.",
  },
  {
    title: "String Interpolation",
    definition:
      "The process of evaluating a string containing placeholders, like `Hello, ${name}`.",
  },
  {
    title: "useState",
    definition:
      "A React Hook that returns a stateful value and a function to update it.",
  },
  {
    title: "Ternary Operator",
    definition:
      "A shorthand for if...else using condition ? exprIfTrue : exprIfFalse. It is the primary way to handle conditional logic inside JSX.",
  },
  {
    title: "Map Method",
    definition:
      "A JavaScript array method used in React to iterate over data and return an array of JSX elements (like your flashcards!).",
  },
  {
    title: "Lifting State Up",
    definition:
      'The pattern of moving state to the closest common ancestor of components that need to share that data. If two "sibling" components need to share the same data, you must move that state up to their closest common parent.',
  },
  {
    title: "ES Modules",
    definition:
      "The system used to share code between files. export default allows a component to be used elsewhere via import.",
  },
  {
    title: "Destructuring",
    definition:
      'A syntax that allows you to "unpack" values from arrays or properties from objects into distinct variables, commonly used with props.',
  },
  {
    title: "Callback Function",
    definition:
      "A function passed as an argument to another function. In React, parents often pass callbacks to children so the child can trigger an update in the parent.",
  },
  {
    title: "Props (Properties)",
    definition:
      "Arguments passed into React components. They are read-only and allow data to flow from a parent component down to a child component.",
  },
  {
    title: "Fragment",
    definition:
      "A special wrapper (<>...</>) that lets you group multiple elements without adding an extra, unnecessary node to the DOM.",
  },
  {
    title: "Conditional Rendering",
    definition:
      "The ability to display different UI elements based on certain conditions, often achieved using the ternary operator or logical && operator.",
  },
  {
    title: "Virtual DOM",
    definition:
      "A lightweight copy of the real DOM that React keeps in memory. React uses it to figure out the most efficient way to update the user interface.",
  },
  {
    title: "JSX",
    definition:
      "A syntax extension for JavaScript that looks like HTML. It allows you to write structured components that React transforms into actual DOM elements.",
  },
  {
    title: "Arrow Functions",
    definition:
      "A concise way to write JavaScript functions using the => syntax. They are frequently used for component definitions and event handlers in React.",
  },
  {
    title: "Immutable State",
    definition:
      "The principle that you should never modify state directly. Instead, you create a copy of the state with the desired changes and update it using a setter function.",
  },
];

function App() {
  const [flipped, setFlipped] = useState(null);
  const [viewedCards, setViewed] = useState(new Set());
  const handleFlip = (flip) => {
    setFlipped(flipped === flip ? null : flip);
    setViewed((viewed) => new Set(viewed).add(flip));
  };
  const handleReset = () => {
    setViewed(new Set());
    setFlipped(null); //close the open card with reset
  };

  return (
    <>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        <main>
          <div className="justify-items-center m-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flashcardInfo.map((item, i) => (
              <Flashcard
                //i is the position in the array, key is a string attribute like an ID badge for each item in a list, react uses it to keep track of whats changed in a list instead of rerendering the entire list
                key={i}
                title={item.title}
                definition={item.definition}
                isFlipped={flipped === i}
                onFlip={() => handleFlip(i)}
              />
            ))}
          </div>
        </main>
        <div className="mb-30"></div>
        {/* //.size is the number of elements/entries currently contained in a set of data 
        //passing in the state as props, count and total 
        //count is the .size() of viewedCards 
        //total is the length of the flashcardInfo array */}
        <Footer count={viewedCards.size} total={flashcardInfo.length} reset={handleReset} />
      </div>
    </>
  );
}

export default App;
