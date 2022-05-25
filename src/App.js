import React, { useEffect, useReducer } from 'react';
import 'normalize.css/normalize.css';
import './App.scss';
import ManaDisplay from './elements/ManaDisplay';
import { manaReducer, defaultManaState } from './reducers/manaReducer';
import { newGame, untapMana } from './actions/manaStateActions';
import NextButton from './elements/NextButton';
import UndoLandPlay from './elements/UndoLandPlay';
import Footer from './elements/Footer';
import ManaPackType from './elements/ManaPackType';
import Header from './elements/Header';
import GameNavigation from './elements/GameNavigation';

function App() {
  const [manaState, dispatchManaState] = useReducer(manaReducer, defaultManaState)

  return (
    <div>
      <Header dispatchManaState={dispatchManaState} />
      <div className="content-container">
        <div className='mainBodyDiv'>

          {!manaState.boxSelected &&
            <ManaPackType
              dispatchManaState={dispatchManaState}
            />
          }
          {manaState.boxSelected &&
            <div>
              <GameNavigation
                manaState={manaState}
                dispatchManaState={dispatchManaState}
              />
              <ManaDisplay
                manaState={manaState}
                dispatchManaState={dispatchManaState}
              />
            </div>
          }
          <Footer />
        </div>
      </div>

    </div>

  );
}

export default App;

// <ManaPackType
// dispatchManaState={dispatchManaState}
// />
