const initState = {
    themeId: 1,
}
export type InitStateType = typeof initState

export const themeReducer = (state: InitStateType = initState, action: changeThemeIdType): InitStateType => { // fix any
    switch (action.type) {
      // дописать
        case 'SET_THEME_ID': {
            return {
                ...state,
                themeId: action.id
            }
        }
        default:
            return state
    }
}

type changeThemeIdType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number): {
    id: number,
    type: 'SET_THEME_ID'
} => ({type: 'SET_THEME_ID', id}) // fix any
