import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import * as CartActions from '../../store/modules/cart/actions';
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
  Input,
} from './styles';

function Cart({ cart, total }) {
  console.tron.log(cart);
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
            </Info>
            <SilverBar>
              <Controls>
                <TouchableOpacity>
                  <AddIcon />
                </TouchableOpacity>
                <Input value={String(product.quantity)} />
                <TouchableOpacity>
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

const mapStateToProps = state => ({
  cart: state.cart.map(prod => {
    return {
      ...prod,
      formattedPrice: formatPrice(prod.price),
      subtotal: formatPrice(prod.price * prod.quantity),
    };
  }),
  total: formatPrice(
    state.cart.reduce((acc, prod) => {
      acc += prod.price * prod.quantity;
      return acc;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      price: PropTypes.number,
      title: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
  total: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
