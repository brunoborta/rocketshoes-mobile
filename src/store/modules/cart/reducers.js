import produce from 'immer';

const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { product } = action;
        const indexProduct = state.findIndex(prod => prod.id === product.id);
        if (indexProduct >= 0) {
          draft[indexProduct].quantity += 1;
        } else {
          product.quantity = 1;
          draft.push(product);
        }
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const { id } = action;
        const indexProduct = state.findIndex(prod => prod.id === id);
        if (indexProduct >= 0) {
          draft.splice(indexProduct, 1);
        }
      });
    case '@cart/UPDATE_SUCCESS':
      return produce(state, draft => {
        const { id, quantity } = action;
        const indexProduct = state.findIndex(prod => prod.id === id);
        if (indexProduct >= 0) {
          draft[indexProduct].quantity = quantity;
        }
      });
    default:
      return state;
  }
}
