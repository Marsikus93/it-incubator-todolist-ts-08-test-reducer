export type StateType = {
    age: number, childrenCount: number,
    name: string
}
// @ts-ignore
export type ActionType = {
    type: string
    [key: string]: any
}
export const userReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'INCREMENT-AGE':
            state.age = state.age + 1;
            return state;
        case 'INCREMENT-CHILDREN-COUNT':
            // state.childrenCount = state.childrenCount + 1;
            return {...state, childrenCount: state.childrenCount + 1};
        case 'CHANGE_NAME': {
            return {...state, name: action.newName}

        }
            ;

        default:
            return state
    }
}
