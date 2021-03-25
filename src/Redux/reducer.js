
const initialState = {
    products: [],
    cart: []
}

export default function reducer(state = initialState, action ={}){
  switch (action.type) {
      case 'SET_DATA_PRODUCTS' : {
          return {
              ...state,
              products: action.data
          }
      }
      case 'UPDATE_COUNT_PRODUCTS': {
          return {
              ...state,
              products: state.products.map(item => item.id === action.id ? { ...item, quantity: action.count} : item),
              cart: state.cart.map(item => item.id === action.id
                  ? { ...item, quantity: action.count}
                  : item),
          }
      }
      case 'ADDED_TO_CART': {
          let result = [];
          let updateSelectedProduct = state.products;
          if(action.idParent){
              const choiceParentItem = state.cart.find(el => el.id === action.idParent)
              const updatedItem = choiceParentItem.additional.map(i => i.id === action.item.id
                  ? {...i, selected: action.status ? 1 : 0}
                  : i
              );
              result = state.cart.map(parents => parents.id === action.idParent
                  ? {
                    ...choiceParentItem,
                      additional: updatedItem
                  }
                  : parents
              )
          }else {
              result = action.status
                  ? [...state.cart, action.item]
                  : state.cart.filter(product => product.id !== action.item.id);

              updateSelectedProduct = state.products.map(p => p.id === action.item.id
                  ? {...p, selected: action.status ? 1 : 0 }
                  : p
              )
          }

          return {
              ...state,
              products: updateSelectedProduct,
              cart: result
          }
      }
      default: return state;
  }
}