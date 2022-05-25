import React from "react";
import { imageArray } from "../info/manaInfo";

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
                height={50}
                width={50}
            />
        </button>
    </>
)

export default ManaButton