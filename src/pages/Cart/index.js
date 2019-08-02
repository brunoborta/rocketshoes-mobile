import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native';

import {
  updateCartRequest,
  removeToCart,
} from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import {
  Container,
  CartContainer,
  ProductItem,
  Info,
  ProductImage,
  Description,
  Title,
  Price,
  TotalContainer,
  TotalLabel,
  TotalAmount,
  AddButton,
  ButtonText,
  SilverBar,
  Controls,
  ProductTotal,
  AddIcon,
  RemoveIcon,
  DeleteIcon,
  RemoveButton,
  Input,
} from './styles';

function Cart() {
  const cart = useSelector(state =>
    state.cart.map(prod => {
      return {
        ...prod,
        formattedPrice: formatPrice(prod.price),
        subtotal: formatPrice(prod.price * prod.quantity),
      };
    })
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((acc, prod) => {
        acc += prod.price * prod.quantity;
        return acc;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function handleIncrement({ id, quantity }) {
    return dispatch(updateCartRequest(id, quantity + 1));
  }

  function handleDecrement({ id, quantity }) {
    return dispatch(updateCartRequest(id, quantity - 1));
  }

  function handleRemove(id) {
    return dispatch(removeToCart(id));
  }

  return (
    <Container>
      <CartContainer>
        {cart.map(product => (
          <ProductItem key={product.id}>
            <Info>
              <ProductImage
                source={{
                  uri: product.image,
                }}
              />
              <Description>
                <Title>{product.title}</Title>
                <Price>{product.formattedPrice}</Price>
              </Description>
              <RemoveButton onPress={() => handleRemove(product.id)}>
                <DeleteIcon />
              </RemoveButton>
            </Info>
            <SilverBar>
              <Controls>
                <TouchableOpacity onPress={() => handleIncrement(product)}>
                  <AddIcon />
                </TouchableOpacity>
                <Input value={String(product.quantity)} />
                <TouchableOpacity onPress={() => handleDecrement(product)}>
                  <RemoveIcon />
                </TouchableOpacity>
              </Controls>
              <ProductTotal>{product.subtotal}</ProductTotal>
            </SilverBar>
          </ProductItem>
        ))}
        <TotalContainer>
          <TotalLabel>Total</TotalLabel>
          <TotalAmount>{total}</TotalAmount>
        </TotalContainer>
        <AddButton>
          <ButtonText>Finalizar Pedido</ButtonText>
        </AddButton>
      </CartContainer>
    </Container>
  );
}

export default Cart;
