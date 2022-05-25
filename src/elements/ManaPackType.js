import React from "react";
import { loadAllShocks, loadAllyMana, loadAllyShockMana, loadEnemyMana, loadEnemyShockMana, loadMonoMana } from "../actions/manaStateActions";

const ManaPackType = ({ dispatchManaState }) => {

    return (
        <div className='manaPackContainer'>
            <div>


                <div className="navigation--spacing">
                    <button
                        className="button--landPacks"
                        onClick={() => {
                            dispatchManaState(
                                loadAllyMana()
                            )
                        }}
                    >
                        Ally Tap Lands (default)
                    </button>


                    <button
                        className="button--landPacks"
                        onClick={() => {
                            dispatchManaState(
                                loadEnemyMana()
                            )
                        }}
                    >
                        Enemy Tap Lands
                    </button>

                    <button
                        className="button--landPacks"
                        onClick={() => {
                            dispatchManaState(
                                loadMonoMana()
                            )
                        }}
                    >
                        Mono Lands Only
                    </button>
                </div>


                <div className="navigation--spacing">
                    <button
                        className="button--landPacks"
                        onClick={() => {
                            dispatchManaState(
                                loadAllyShockMana()
                            )
                        }}
                    >
                        Ally Shock Lands
                    </button>

                    <button
                        className="button--landPacks"
                        onClick={() => {
                            dispatchManaState(
                                loadEnemyShockMana()
                            )
                        }}
                    >
                        Enemy Shock Lands
                    </button>

                    <button
                        className="button--landPacks"
                        onClick={() => {
                            dispatchManaState(
                                loadAllShocks()
                            )
                        }}
                    >
                        Shock Lands Only
                    </button>
                </div>

            </div>

        </div>
    )
}

export default ManaPackType

