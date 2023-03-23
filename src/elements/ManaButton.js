import React from "react";
import { altTextList, imageArray } from "../info/manaInfo";

const ManaButton = ({ takeAction, display, disabled }) => (
    <>
        <button
            className="button--mana"
            disabled={disabled}
            onClick={takeAction}
        >
            <img
                className="image--mana"
                src={imageArray[display]}
                alt={altTextList[display]}
                height={50}
                width={50}
            />
        </button>
    </>
)

export default ManaButton