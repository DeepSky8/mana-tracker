import React from "react";
import { playMana } from "../actions/manaStateActions";
import ManaButton from "./ManaButton";


const UnplayedMana = ({ manaState, dispatchManaState }) => {
    const firstRow = manaState.unplayedMana.sort((a, b) => a - b).filter(manaPosition => manaPosition < 5)
    const secondRow = manaState.unplayedMana.sort((a, b) => a - b).filter(manaPosition => manaPosition > 4)

    return (
        <div>
            {firstRow.length > 0 &&

                firstRow.map(manaPosition => {
                    return <ManaButton
                        key={manaPosition}
                        disabled={manaState.playedMana}
                        display={manaPosition}
                        takeAction={() => {
                            if (manaState.unplayedMana.includes(manaPosition)) {
                                dispatchManaState(
                                    playMana(manaPosition))
                            }
                        }}
                    />
                })}

            <br />

            {secondRow.length > 0 &&

                secondRow.map(manaPosition => {
                    return <ManaButton
                        key={manaPosition}
                        disabled={manaState.playedMana}
                        display={manaPosition}
                        takeAction={() => {
                            if (manaState.unplayedMana.includes(manaPosition)) {
                                dispatchManaState(
                                    playMana(manaPosition))
                            }
                        }}
                    />

                })}
        </div>
    )
}
export default UnplayedMana

