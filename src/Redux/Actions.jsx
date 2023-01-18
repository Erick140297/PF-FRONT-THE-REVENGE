// funciones
// AXIOS
import axios from 'axios'

export function GetAllProducts(){
    try {
        return async function(dispatch){
            const response = await axios.get("http://localhost:3001/products")      
            console.log(response);
            dispatch({
                type: 'GET_ALL_PRODUCTS',
                payload: response.data
            })
        };
    } catch (error) {
        console.log('este es el error -->',error);
        
    }

}