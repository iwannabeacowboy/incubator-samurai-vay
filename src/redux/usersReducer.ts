export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {
        small: string ,
        large: string
    }
    status: string
    followed: boolean
}

const initialState = {
    users: [] as UserType[]
}

export type UsersPageType = typeof initialState

export type UsersActionType = toggleFollowAType | setUsersAType
export const usersReducer = (state: UsersPageType = initialState, action: UsersActionType): UsersPageType => {
    switch (action.type) {
        case 'TOGGLE-FOLLOW':
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: !el.followed} : el)
            }
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.payload.users]}
        default:
            return state
    }
}

type toggleFollowAType = ReturnType<typeof toggleFollowAC>
export const toggleFollowAC = (userID: number) => {
    return {
        type: 'TOGGLE-FOLLOW',
        payload: {
            userID
        }
    } as const
}

type setUsersAType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}