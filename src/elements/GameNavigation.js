import React from 'react';
import { untapMana } from '../actions/manaStateActions';
import UndoLandPlay from './UndoLandPlay';
import NextButton from './NextButton';

const GameNavigation = ({ manaState, dispatchManaState }) => (
    <div className="navigation--spacing">
        <button
            className="button--undo"
            onClick={() => {
                dispatchManaState(untapMana())
            }}
        >Untap Mana</button>

        <UndoLandPlay
            manaState={manaState}
            dispatchManaState={dispatchManaState}
        />

        <NextButton
            dispatchManaState={dispatchManaState}
        />

    </div>

)

export default GameNavigation