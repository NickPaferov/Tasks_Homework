const initState = {
    theme: 'green'
};

export type ThemeStateType = {
    theme: string
};

export const themeReducer = (state: ThemeStateType = initState, action: changeThemeActionType): ThemeStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {...state, theme: action.theme}
        }
        default:
            return state;
    }
};

type changeThemeActionType = {
    type: 'CHANGE-THEME'
    theme: string
};

export const changeThemeAC = (theme: string): changeThemeActionType => {
    return {type: 'CHANGE-THEME', theme}
}; // fix any