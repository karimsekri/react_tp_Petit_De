import { useMemo, useState } from 'react'

import Die from './components/Die'

function App() {
  const [Value1, setValeur1] = useState(1);
  const [Value2, setValeur2] = useState(1);
  const [Value3, setValeur3] = useState(1);

  const handleRoll = (newValue: number) => {
    setValeur1(newValue);
  };
  const handleRoll1 = (newValue: number) => {
    setValeur1(newValue);
  };
  const handleRoll2 = (newValue: number) => {
    setValeur2(newValue);
  };
  const handleRoll3 = (newValue: number) => {
    setValeur3(newValue);
  };

  
  const somme = useMemo(() => Value1 + Value2 + Value3, [Value1,Value2,Value3])

  return (
    <>
      {/* 1. Créer un composant enfant */}
      <h1>1. Créer un composant enfant</h1>
      <div>
        <Die />
      </div>

      {/* 2. Communiquer de l'enfant au parent */}
      <h1>2. Communiquer de l'enfant au parent</h1>
      <div>
        <Die onRoll={handleRoll} />
        <p>{Value1}</p>
      </div>

      {/* 3. La somme des dés */}
      <h1>3. La somme des dés</h1>
      <div>
        <Die onRoll={handleRoll1} />
        <Die onRoll={handleRoll2} />
        <Die onRoll={handleRoll3} />
        <p>somme: {Value1+Value2+Value3}</p>
        <p>somme: {somme}</p>
      </div>
    </>
  )
}

export default App
