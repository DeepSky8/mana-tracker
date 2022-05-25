import { allyBoxMana, allyShockBox, enemyBoxMana, enemyShockBox, tappedPackMana, untappedMana, untappedPackMana } from "../info/manaInfo"

export const defaultManaState = {
    boxSelected: false,
    unplayedMana: [],
    availableMana: [],
    tappedMana: [],
    playedMana: false,
    lastPlayed: null,
    packTapped: [],
    packUntapped: []
}

export const manaReducer = (state, action) => {
    switch (action.type) {
        case 'PLAY_MANA':
            return {
                ...state,
                playedMana: true,
                lastPlayed: action.mana,
                unplayedMana: state.unplayedMana.filter(
                    mana => mana !== action.mana
                ),
                availableMana: state.packUntapped.includes(action.mana) ?
                    state.availableMana.concat(action.mana)
                    :
                    state.availableMana,
                tappedMana: state.packUntapped.includes(action.mana) ?
                    state.tappedMana
                    :
                    state.tappedMana.concat(action.mana)
            }
        case 'TAP_MANA':
            return {
                ...state,
                availableMana: state.availableMana.filter(mana => mana !== action.mana),
                tappedMana: state.tappedMana.concat(action.mana)
            }
        case 'LOAD_ALLY_MANA':
            return {
                ...state,
                boxSelected: true,
                unplayedMana: allyBoxMana,
                packUntapped: untappedPackMana,
                packTapped: tappedPackMana
            }
        case 'LOAD_ENEMY_MANA':
            return {
                ...state,
                boxSelected: true,
                unplayedMana: enemyBoxMana,
                packUntapped: untappedPackMana,
                packTapped: tappedPackMana
            }
        case 'LOAD_MONO_MANA':
            return {
                ...state,
                boxSelected: true,
                unplayedMana: untappedPackMana,
                packUntapped: untappedPackMana,
                packTapped: []
            }
        case 'LOAD_ALLY_SHOCK_MANA':
            return {
                ...state,
                boxSelected: true,
                unplayedMana: allyShockBox,
                packUntapped: allyShockBox,
                packTapped: []
            }
        case 'LOAD_ENEMY_SHOCK_MANA':
            return {
                ...state,
                boxSelected: true,
                unplayedMana: enemyShockBox,
                packUntapped: enemyShockBox,
                packTapped: []
            }
        case 'NEXT_TURN':
            return {
                ...state,
                playedMana: false,
                lastPlayed: null,
                availableMana: state.availableMana.concat(state.tappedMana),
                tappedMana: []
            }
        case 'UNDO':
            return {
                ...state,
                lastPlayed: null,
                playedMana: false,
                unplayedMana: state.unplayedMana.concat(state.lastPlayed),
                availableMana: state.availableMana.length > 0 ?
                    state.availableMana.filter(mana => mana !== state.lastPlayed)
                    :
                    state.availableMana,
                tappedMana: state.tappedMana.length > 0 ?
                    state.tappedMana.filter(mana => mana !== state.lastPlayed)
                    :
                    state.tappedMana
            }
        case 'UNTAP_MANA':
            return {
                ...state,
                availableMana: state.availableMana.concat(state.tappedMana),
                tappedMana: []
            }
        case 'NEW_GAME':
            return defaultManaState
        default: return state
    }
}


const manaList = [
    'w',
    'u',
    'b',
    'r',
    'g',
    // 5
    'wu',
    'wb',
    'wr',
    'wg',
    'ub',
    // 10
    'ur',
    'ug',
    'br',
    'bg',
    'rg'
]

