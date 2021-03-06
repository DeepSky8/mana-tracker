import React from "react";
import { undoLandPlay } from "../actions/manaStateActions";

const UndoLandPlay = ({ manaState, dispatchManaState }) => {

    return (
        <button
            className="button--undo"
            disabled={manaState.lastPlayed === null}
            onClick={() => {
                dispatchManaState(
                    undoLandPlay()
                )
            }}
        >
            Pick a different land to play
        </button>
    )
}

export default UndoLandPlay