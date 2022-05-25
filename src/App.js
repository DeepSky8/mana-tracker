import React, { useReducer } from 'react';
import 'normalize.css/normalize.css';
import './App.scss';
import ManaDisplay from './elements/ManaDisplay';
import { manaReducer, defaultManaState } from './reducers/manaReducer';
import Footer from './elements/Footer';
import ManaPackType from './elements/ManaPackType';
import Header from './elements/Header';
import GameNavigation from './elements/GameNavigation';

function App() {
  const [manaState, dispatchManaState] = useReducer(manaReducer, defaultManaState)

  return (
    <div>
      <Header
        manaState={manaState}
        dispatchManaState={dispatchManaState}
      />
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