import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

  render() {
    return (
      <Container>
        <ProductCarrousel>
          <ProductItem>
            <ProductImage
              source={{
                uri:
                  'https://static.netshoes.com.br/produtos/tenis-nike-dart-12-msl-masculino/26/D12-2683-026/D12-2683-026_detalhe1.jpg?resize=280:280',
              }}
            />
            <Title>
              Sapato Louco Sapato LoucoSapato Louco Sapato Louco Sapato Louco
            </Title>
            <Price>R$129,00</Price>
            <AddButton>
              <BasketContainer>
                <Icon name="shopping-basket" size={20} color="#FFF" />
                <Counter>3</Counter>
              </BasketContainer>
              <CartAddText>Adicionar</CartAddText>
            </AddButton>
          </ProductItem>
          <ProductItem>
            <ProductImage
              source={{
                uri:
                  'https://static.netshoes.com.br/produtos/tenis-nike-dart-12-msl-masculino/26/D12-2683-026/D12-2683-026_detalhe1.jpg?resize=280:280',
              }}
            />
            <Title>Sapato Louco</Title>
            <Price>R$129,00</Price>
            <AddButton>
              <BasketContainer>
                <Icon name="shopping-basket" size={20} color="#FFF" />
                <Counter>3</Counter>
              </BasketContainer>
              <CartAddText>Adicionar</CartAddText>
            </AddButton>
          </ProductItem>
        </ProductCarrousel>
      </Container>
    );
  }
}

export default Home;
