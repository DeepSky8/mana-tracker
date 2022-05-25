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
            Unplayed Mana<br />
            <UnplayedMana
                manaState={manaState}
                dispatchManaState={dispatchManaState}
            />
            <br />Available Mana<br />
            <AvailableMana
                manaState={manaState}
                dispatchManaState={dispatchManaState}
            />
            <br />Tapped Mana<br />
            <TappedMana
                manaState={manaState}
                dispatchManaState={dispatchManaState}
            />
        </div>
    )
}

export default ManaDisplay

// manaList.indexOf(mana)