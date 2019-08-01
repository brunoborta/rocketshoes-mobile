import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

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

class Home extends Component {
  state = {
    products: [],
  };

  static propTypes = {
    addToCartRequest: PropTypes.func.isRequired,
    quantity: PropTypes.arrayOf(PropTypes.number).isRequired,
  };

  async componentDidMount() {
    const products = await api.get('products');
    const data = products.data.map(product => {
      return {
        ...product,
        formattedPrice: formatPrice(product.price),
      };
    });

    this.setState({ products: data });
  }

  handleButton = product => {
    const { addToCartRequest } = this.props;

    addToCartRequest(product);
  };

  render() {
    const { products } = this.state;
    const { quantity } = this.props;
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
                <AddButton onPress={() => this.handleButton(product)}>
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
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

const mapStateToProps = state => ({
  quantity: state.cart.reduce((acc, product) => {
    acc[product.id] = product.quantity;
    return acc;
  }, []),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
