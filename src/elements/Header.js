import React from "react";
import { newGame } from '../actions/manaStateActions';

const Header = ({ dispatchManaState }) => (
    <div className="header">
        <div className="content-container">
            <div className="header--spacing">
                <div>
                    <h1 className="header__title">Mana Tracker</h1>
                    <h2 className="header__subtitle">Battlebond Land Packs</h2>
                </div>

                <div>
                    <button
                        className="button--new"
                        onClick={() => {
                            dispatchManaState(newGame())
                        }}
                    >New Game</button>
                </div>
            </div>



        </div>


    </div>
)

export default Header

//  background-color: rgb(95, 81, 64);