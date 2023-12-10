import reactpic from './images/react.png'
import React from 'react';
import './App.css'
function App() {
  return (
    <div className="App">
      <React.Fragment>
      <img src={reactpic} alt ="reactpic"/>  
      <p>React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance.</p>
      </React.Fragment> 
    </div>
  );
}

export default App;