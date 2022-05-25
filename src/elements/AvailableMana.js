import React from "react";
import { tapMana } from "../actions/manaStateActions";
import ManaButton from "./ManaButton";


const AvailableMana = ({ manaState, dispatchManaState }) => {
    const firstRow = manaState.availableMana.sort((a, b) => a - b).filter(manaPosition => manaPosition < 5)
    const secondRow = manaState.availableMana.sort((a, b) => a - b).filter(manaPosition => manaPosition > 4)

    return (
        <div>
            {firstRow.length > 0 &&

                firstRow.map(manaPosition => {
                    return <ManaButton
                        key={manaPosition}

                        display={manaPosition}
                        takeAction={() => {
                            if (manaState.availableMana.includes(manaPosition)) {
                                dispatchManaState(
                                    tapMana(manaPosition))
                            }
                        }}
                    />
                })}

            <br />

            {secondRow.length > 0 &&

                secondRow.map(manaPosition => {
                    return <ManaButton
                        key={manaPosition}

                        display={manaPosition}
                        takeAction={() => {
                            if (manaState.availableMana.includes(manaPosition)) {
                                dispatchManaState(
                                    tapMana(manaPosition))
                            }
                        }}
                    />
                })}
        </div>
    )
}
export default AvailableMana