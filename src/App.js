
import './App.css';
import React, { useEffect, useReducer } from 'react';
import ManaDisplay from './elements/ManaDisplay';
import { manaReducer, defaultManaState } from './reducers/manaReducer';
import { newGame, untapMana } from './actions/manaStateActions';
import NextButton from './elements/NextButton';
import UndoLandPlay from './elements/UndoLandPlay';
import Footer from './elements/Footer';
import ManaPackType from './elements/ManaPackType';

function App() {
  const [manaState, dispatchManaState] = useReducer(manaReducer, defaultManaState)

  // useEffect(() => {
  //   console.log('manaState: ', manaState)
  // }, [manaState])

  return (
    <div>

      {!manaState.boxSelected &&
        <ManaPackType
          dispatchManaState={dispatchManaState}
        />
      }
      {manaState.boxSelected &&
        <div>
          <button onClick={() => {
            dispatchManaState(newGame())
          }}
          >New Game</button>

          <button onClick={() => {
            dispatchManaState(untapMana())
          }}
          >Untap Mana</button>

          <UndoLandPlay
            manaState={manaState}
            dispatchManaState={dispatchManaState}
          />

          <br />
          <br />
          <ManaDisplay
            manaState={manaState}
            dispatchManaState={dispatchManaState}
          />
          <br />
          <br />
          <NextButton
            dispatchManaState={dispatchManaState}
          />
        </div>
      }
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;

// <ManaPackType
// dispatchManaState={dispatchManaState}
// />
