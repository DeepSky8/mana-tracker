export const playMana = (mana) => ({
    type: 'PLAY_MANA',
    mana
})

export const tapMana = (mana) => ({
    type: 'TAP_MANA',
    mana
})

export const loadAllyMana = () => ({
    type: 'LOAD_ALLY_MANA',
})

export const loadEnemyMana = () => ({
    type: 'LOAD_ENEMY_MANA',
})

export const loadMonoMana = () => ({
    type: 'LOAD_MONO_MANA',
})

export const loadAllyShockMana = () => ({
    type: 'LOAD_ALLY_SHOCK_MANA',
})

export const loadEnemyShockMana = () => ({
    type: 'LOAD_ENEMY_SHOCK_MANA',
})
 
export const loadAllShocks = () => ({
    type: 'LOAD_ALL_SHOCKS'
})

export const nextTurn = () => ({
    type: 'NEXT_TURN'
})

export const undoLandPlay = () => ({
    type: 'UNDO'
})

export const newGame = () => ({
    type: 'NEW_GAME'
})

export const untapMana = () => ({
    type: 'UNTAP_MANA'
})