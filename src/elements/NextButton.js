import React from "react";
import { nextTurn } from "../actions/manaStateActions";

const NextButton = ({ dispatchManaState }) => {

    return (
        <div>
            <button
                onClick={() => {
                    dispatchManaState(
                        nextTurn()
                    )
                }}
            >
                Next Turn
            </button>
        </div>
    )
}

export default NextButton