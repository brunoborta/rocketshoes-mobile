export function addToCartRequest(product) {
  return {
    type: '@cart/ADD_REQUEST',
    product,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function removeToCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function updateCartRequest(id, quantity) {
  return {
    type: '@cart/UPDATE_REQUEST',
    id,
    quantity,
  };
}

export function updateCartSuccess(id, quantity) {
  return {
    type: '@cart/UPDATE_SUCCESS',
    id,
    quantity,
  };
}
