let initialState = {
    name: 'Name',
    address: 'Address',
    city: 'City',
    state: 'State',
    zipcode: 0,
}
const UPDATE_NAME = 'UPDATE_NAME'
const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
const UPDATE_CITY = 'UPDATE_CITY'
const UPDATE_STATE = 'UPDATE_STATE'
const UPDATE_ZIPCODE = 'UPDATE_ZIPCODE'

export default function reducer(state=initialState, action){
    switch(action.type){
        case UPDATE_NAME:
        return Object.assign({}, state, {name: action.payload})
        case UPDATE_ADDRESS:
        return Object.assign({}, state, {address: action.payload})
        case UPDATE_CITY:
        return Object.assign({}, state, {city: action.payload})
        case UPDATE_STATE:
        return Object.assign({}, state, {state: action.payload})
        case UPDATE_ZIPCODE:
        return Object.assign({}, state, {zipcode: action.payload})
    }
}

export function updateName(value){
    return{
        type: UPDATE_NAME,
        payload: value
    }
}
export function updateAddress(value){
    return{
        type: UPDATE_ADDRESS,
        payload: value
    }
}
export function updateCity(value){
    return{
        type: UPDATE_CITY,
        payload: value
    }
}
export function updateState(value){
    return{
        type: UPDATE_STATE,
        payload: value
    }
}
export function updateZipcode(value){
    return{
        type: UPDATE_ZIPCODE,
        payload: value
    }
}