const initState = {
    isLoading: false
}

/*type InitStateType = {
    isLoading: boolean
}*/

type InitStateType = typeof initState

export const loadingReducer = (state: InitStateType = initState, action: LoadingActionType): InitStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-STATUS-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE-STATUS-LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => {
    return {type: 'CHANGE-STATUS-LOADING', isLoading}
} // fix any

