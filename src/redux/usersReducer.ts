export type UserType = {
    id: string
    fullName: string
    status: string
    followed: boolean
    photoUrl: string
    location: {
        city: string
        country: string
    }
}

const initialState = {
    users: [
        {
            id: '1', fullName: 'Ivan', status: 'hello world', followed: false,
            photoUrl: 'AVA',
            location: {
                city: 'Moscow',
                country: 'Russia'
            }
        },
        {
            id: '2', fullName: 'Petro', status: 'goodbye', followed: true,
            photoUrl: 'AVA',
            location: {
                city: 'Perm',
                country: 'Russia'
            },
        }
    ] as UserType[]
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
export const toggleFollowAC = (userID: string) => {
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