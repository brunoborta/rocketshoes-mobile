import { Alert } from 'react-native';
import { put, select, all, takeLatest, call } from 'redux-saga/effects';

import api from '../../../services/api';
import {
  updateCartSuccess,
  updateCartRequest,
  addToCartSuccess,
} from './actions';

function* addToCart({ product }) {
  const productExist = yield select(state =>
    state.cart.find(prod => prod.id === product.id)
  );

  if (productExist) {
    yield put(updateCartRequest(productExist.id, productExist.quantity + 1));
    return;
  }
  product.quantity = 1;
  yield put(addToCartSuccess(product));
}

function* updateProduct({ id, quantity }) {
  if (quantity <= 0) {
    return;
  }

  const stockAvailable = yield call(api.get, `/stock/${id}`);

  if (stockAvailable.data.amount < quantity) {
    Alert.alert('Estoque excedido!');
    return;
  }

  yield put(updateCartSuccess(id, quantity));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_REQUEST', updateProduct),
]);
