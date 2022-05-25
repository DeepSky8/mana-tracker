import React from "react";
import { nextTurn } from "../actions/manaStateActions";

const NextButton = ({ dispatchManaState }) => {

    return (

        <button
            className="button--new"
            onClick={() => {
                dispatchManaState(
                    nextTurn()
                )
            }}
        >
            Next Turn
        </button>
    )
}

export default NextButton