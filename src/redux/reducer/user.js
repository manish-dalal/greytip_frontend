import ActionTypes from '../constants/ActionTypes'

const initialState = {
  name: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SAVE_USER:
      return {
        ...state,
        ...action.payload
      }

    case ActionTypes.USER_LOGOUT:
      localStorage.clear()
      return {
        ...initialState
      }
    default:
      return state
  }
}

export default userReducer
