const initialState = {
    token: null
}

const authReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        default:
            return state
    }
}

export default authReducer