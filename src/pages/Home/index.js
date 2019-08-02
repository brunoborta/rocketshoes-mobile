import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import {
  Container,
  ProductItem,
  Title,
  Price,
  AddButton,
  BasketContainer,
  Counter,
  ProductImage,
  CartAddText,
  ProductCarrousel,
} from './styles';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      const data = response.data.map(product => {
        return {
          ...product,
          formattedPrice: formatPrice(product.price),
        };
      });
      setProducts(data);
    }
    loadProducts();
  }, []);

  const dispatch = useDispatch();
  const quantity = useSelector(state =>
    state.cart.reduce((acc, product) => {
      acc[product.id] = product.quantity;
      return acc;
    }, [])
  );

  function handleButton(product) {
    dispatch(CartActions.addToCartRequest(product));
  }

  return (
    <Container>
      <ProductCarrousel>
        {products ? (
          products.map(product => (
            <ProductItem key={product.id}>
              <ProductImage
                source={{
                  uri: product.image,
                }}
              />
              <Title>{product.title}</Title>
              <Price>{product.formattedPrice}</Price>
              <AddButton onPress={() => handleButton(product)}>
                <BasketContainer>
                  <Icon name="shopping-basket" size={20} color="#FFF" />
                  <Counter>{quantity[product.id] || 0}</Counter>
                </BasketContainer>
                <CartAddText>Adicionar</CartAddText>
              </AddButton>
            </ProductItem>
          ))
        ) : (
          <ActivityIndicator size="large" color="#fff" />
        )}
      </ProductCarrousel>
    </Container>
  );
}

export default Home;
