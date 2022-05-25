import React from "react";
import { loadAllyMana, loadAllyShockMana, loadEnemyMana, loadEnemyShockMana, loadMonoMana } from "../actions/manaStateActions";

const ManaPackType = ({ dispatchManaState }) => {

    return (
        <div>
            <button
                onClick={() => {
                    dispatchManaState(
                        loadAllyMana()
                    )
                }}
            >
                Ally Tap Lands (default)
            </button>


            <button
                onClick={() => {
                    dispatchManaState(
                        loadEnemyMana()
                    )
                }}
            >
                Enemy Tap Lands
            </button>

            <button
                onClick={() => {
                    dispatchManaState(
                        loadMonoMana()
                    )
                }}
            >
                Only Mono Lands
            </button>

            <button
                onClick={() => {
                    dispatchManaState(
                        loadAllyShockMana()
                    )
                }}
            >
                Ally Shock Lands
            </button>

            <button
                onClick={() => {
                    dispatchManaState(
                        loadEnemyShockMana()
                    )
                }}
            >
                Enemy Shock Lands
            </button>
        </div>
    )
}

export default ManaPackType

