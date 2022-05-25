import React, { useEffect } from "react";
import ManaButton from "./ManaButton";
import { playMana, tapMana } from "../actions/manaStateActions";
import { manaList } from "../info/manaInfo";
import UnplayedMana from "./UnplayedMana";
import AvailableMana from "./AvailableMana";
import TappedMana from "./TappedMana";
// import {mtgFavIcon} from '../../public/images/'


const ManaDisplay = ({ manaState, dispatchManaState }) => {

    return (
        <div>
            <div className="manaBoxes--header">
                <h3>Unplayed Mana</h3>
            </div>

            <UnplayedMana
                manaState={manaState}
                dispatchManaState={dispatchManaState}
            />

            <div className="manaBoxes--header">
                <h3>Available Mana</h3>
            </div>
            <AvailableMana
                manaState={manaState}
                dispatchManaState={dispatchManaState}
            />

            <div className="manaBoxes--header">
                <h3>Tapped Mana</h3>
            </div>
            <TappedMana
                manaState={manaState}
                dispatchManaState={dispatchManaState}
            />
        </div>
    )
}

export default ManaDisplay