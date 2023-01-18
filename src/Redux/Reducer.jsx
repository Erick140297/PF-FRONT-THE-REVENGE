// rootreducer

const initialState = {
    allProducts:[]
}

export const rootReducer = (state=initialState,action) => {
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