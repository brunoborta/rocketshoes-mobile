import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { Wrapper, Container, Logo, Badge, CartButton } from './styles';

function Header({ navigate, cartSize }) {
  return (
    <Wrapper>
      <Container>
        <TouchableOpacity onPress={() => navigate('Home')}>
          <Logo />
        </TouchableOpacity>
        <CartButton onPress={() => navigate('Cart')}>
          <Icon name="shopping-basket" size={20} color="#FFF" />
          {cartSize ? <Badge>{cartSize}</Badge> : null}
        </CartButton>
      </Container>
    </Wrapper>
  );
}

Header.propTypes = {
  navigate: PropTypes.func.isRequired,
  cartSize: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});
export default connect(mapStateToProps)(Header);
