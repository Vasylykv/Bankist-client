export interface UserState {
  user: object | null
  loading: boolean,
  error: null | string
}

export enum UserActionTypes {
  USER_FETCHING = 'USER_FETCHING',
  USER_FETCHED = 'USER_FETCHED',
  USER_FETCHING_ERROR = 'USER_FETCHING_ERROR'
}

interface UserFetchingAction {
  type: UserActionTypes.USER_FETCHING
}

interface UserFetchedAction {
  type: UserActionTypes.USER_FETCHED,
  payload: object
}

interface UserFetchingErrorAction {
  type: UserActionTypes.USER_FETCHING_ERROR,
  payload: string
}

export type UserAction = UserFetchingAction | UserFetchedAction | UserFetchingErrorAction;