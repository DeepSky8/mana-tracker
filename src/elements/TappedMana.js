import React from "react";
import ManaButton from "./ManaButton";


const TappedMana = ({ manaState }) => {
    const firstRow = manaState.tappedMana.sort((a, b) => a - b).slice(0,5)
    const secondRow = manaState.tappedMana.sort((a, b) => a - b).slice(5)

    return (
        <div className="manaBoxes--content">
            <div>
                {firstRow.length > 0 &&

                    firstRow.map(manaPosition => {

                        return <ManaButton
                            key={manaPosition}
                            disabled={true}
                            display={manaPosition}
                        />
                    })}

                <br />

                {secondRow.length > 0 &&

                    secondRow.map(manaPosition => {

                        return <ManaButton
                            key={manaPosition}
                            display={manaPosition}
                            disabled={true}
                        />

                    })}
            </div>

        </div>
    )
}
export default TappedMana