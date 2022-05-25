import React from "react";
import { playMana } from "../actions/manaStateActions";
import ManaButton from "./ManaButton";


const UnplayedMana = ({ manaState, dispatchManaState }) => {
    const firstRow = manaState.unplayedMana.sort((a, b) => a - b).slice(0,5)
    const secondRow = manaState.unplayedMana.sort((a, b) => a - b).slice(5)
    // const thirdRow = firstRow.length === 0 ?
    //     manaState.unplayedMana.sort((a, b) => a - b).filter(manaPosition => manaPosition > 9)
    //     :
    //     []
    // const rows = [firstRow, secondRow, thirdRow]

    return (
        <div className="manaBoxes--content">
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
        </div>
    )
}
export default UnplayedMana







// {
//     rows.forEach(rowArray => {
//         rowArray.length > 0 &&

//             rowArray.map(manaPosition => {
//                 return <ManaButton
//                     key={manaPosition}
//                     disabled={manaState.playedMana}
//                     display={manaPosition}
//                     takeAction={() => {
//                         if (manaState.unplayedMana.includes(manaPosition)) {
//                             dispatchManaState(
//                                 playMana(manaPosition))
//                         }
//                     }}
//                 />
//             })
//     })
// }