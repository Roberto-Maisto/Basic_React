import React from "react";
function App() {
  const stampa = () => {
    console.log('stampa')
  }
  return (
    <div>
      <h2>Ciao mondo</h2>
      <button onClick={stampa}>cliccami</button>
    </div>
  )
}

export default App; // Questo comando si fa sempre e serve per attivare la componente "App".



