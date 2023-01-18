// rootreducer

const initialState = {
    allProducts:[]
}

function rootReducer (state=initialState,action) {
    switch(action.type){

        case 'GET_ALL_PRODUCTS':
            return(
                {
                    ...state,
                    allProducts:action.payload
                }
            )
        default: 
        return state
    }
}

export default rootReducer;