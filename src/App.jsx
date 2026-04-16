import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Footer from "./components/Footer";
import Flashcard from './components/Flashcard';


const data = [
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

];

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        <main>
          <div>
            <Flashcard/>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App
