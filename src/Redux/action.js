import data from "../data/dataJSON.json"

const setDataProducts = () => {
    return {
        type: 'SET_DATA_PRODUCTS',
        data
    }
}

const updateCountProducts = (id, count) =>{
    return{
        type:'UPDATE_COUNT_PRODUCTS',
        id,
        count
    }
}

const addedToCart = (item, status, idParent) =>{
    return{
        type:'ADDED_TO_CART',
        item,
        status,
        idParent
    }
}

export { setDataProducts, updateCountProducts, addedToCart };