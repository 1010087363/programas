import React, { useState } from 'react';
import './App.css';

function App() {
  const notaInicial = {
    parciales: ["", "", ""],
    examenParcial: "",
    trabajoFinal: "",
  };

  const [notas, setNotas] = useState(notaInicial);
  const [promedioFinal, setPromedioFinal] = useState(0);

  const actualizarNotas = (tipo, valor) => {
    setNotas((prevNotas) => ({
      ...prevNotas,
      [tipo]: valor,
    }));
  };

  const calcularPromedioFinal = () => {
    const { parciales, examenParcial, trabajoFinal } = notas;
  
    // Validar que todos los campos estén llenos
    if (parciales.some(nota => nota === "") || examenParcial === "" || trabajoFinal === "") {
      alert("Por favor, complete todos los campos antes de calcular el promedio final.");
      return;
      
    }
  
    const promedioParciales = (parciales.reduce((a, b) => a + b, 0) / 3) * 0.55;
    const porcentajeExamenParcial = examenParcial * 0.3;
    const porcentajeTrabajoFinal = trabajoFinal * 0.15;
    const promedioFinalTotal = promedioParciales + porcentajeExamenParcial + porcentajeTrabajoFinal;
  
    // Mostrar el resultado final
    setPromedioFinal(promedioFinalTotal);
    setPromedioFinal(promedioFinalTotal.toFixed(2));
    
    // Mostrar el detalle del porcentaje de cada nota
    alert(
      `Detalle del porcentaje:\n\n` +
      `Calificaciones parciales (55%): ${promedioParciales.toFixed(2)}\n` +
      `Examen parcial (30%): ${porcentajeExamenParcial.toFixed(2)}\n` +
      `Trabajo final (15%): ${porcentajeTrabajoFinal.toFixed(2)}`
    );
  };

  const resetNotas = () => {
    setNotas({
      parciales: ["", "", ""],
      examenParcial: "",
      trabajoFinal: "",
    });
    setPromedioFinal(0);
  };


  return (
    <div className="App">
      <header className="App-header">
        <div className="notas-container">
          <h2>Este algoritmo calcula el promedio FINAL de una materia de algoritmos.
            <br></br>Dicha calificación se compone de los siguientes porcentajes:</h2>

          <h3>• 55%  de sus calificaciones parciales  (3 notas).<br></br>
            • 30% Examen parcial.<br></br>
            • 15% Trabajo final.
          </h3><br></br>

          <div className="nota-input">
            <label>Nota Parcial 1: </label>
            <input
              type="number"
              placeholder="Ingrese la nota del parcial 1"
              value={notas.parciales[0]}
              onChange={(e) => actualizarNotas('parciales', [parseInt(e.target.value, 10), notas.parciales[1], notas.parciales[2]])}
            />
          </div>
          <div className="nota-input">
            <label>Nota Parcial 2: </label>
            <input
              type="number"
              placeholder="Ingrese la nota del parcial 2"
              value={notas.parciales[1]}
              onChange={(e) => actualizarNotas('parciales', [notas.parciales[0], parseInt(e.target.value, 10), notas.parciales[2]])}
            />
          </div>
          <div className="nota-input">
            <label>Nota Parcial 3: </label>
            <input
              type="number"
              placeholder="Ingrese la nota del parcial 3"
              value={notas.parciales[2]}
              onChange={(e) => actualizarNotas('parciales', [notas.parciales[0], notas.parciales[1], parseInt(e.target.value, 10)])}
            />
          </div>
          <div className="nota-input">
            <label>Examen Parcial: </label>
            <input
              type="number"
              placeholder="Ingrese la nota del Examen parcial"
              value={notas.examenParcial}
              onChange={(e) => actualizarNotas('examenParcial', parseInt(e.target.value, 10))}
            />
          </div>
          <div className="nota-input">
            <label>Trabajo Final: </label>
            <input
              type="number"
              placeholder="Ingrese la nota del Trabajo Final"
              value={notas.trabajoFinal}
              onChange={(e) => actualizarNotas('trabajoFinal', parseInt(e.target.value, 10))}
            />
          </div><br></br>
        </div>
        <button className="calcular-btn" onClick={calcularPromedioFinal}>
          Calcular Promedio Final
        </button><br></br>
        <button className="reset-btn" onClick={resetNotas}>
          Resetear Notas
        </button>
        {promedioFinal !== 0 && <h2 className="resultado">Promedio Final de la materia de algoritmos es: {promedioFinal}</h2>}
      
      
      
      
      </header>
    </div>
  );
}

export default App;
