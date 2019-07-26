import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { Wrapper, Container, Logo, Badge, CartButton } from './styles';

export default function Header({ navigate }) {
  return (
    <Wrapper>
      <Container>
        <TouchableOpacity onPress={() => navigate('Home')}>
          <Logo />
        </TouchableOpacity>
        <CartButton onPress={() => navigate('Cart')}>
          <Icon name="shopping-basket" size={20} color="#FFF" />
          <Badge>3</Badge>
        </CartButton>
      </Container>
    </Wrapper>
  );
}

Header.propTypes = {
  navigate: PropTypes.func.isRequired,
};
