import styled from 'styled-components/native';

export const Container = styled.View`
  background: #191920;
  padding: 20px 0;
`;

export const ProductCarrousel = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 10, paddingRight: 10 },
})``;

export const ProductItem = styled.View`
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  margin: 0 8px;
  width: 220px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Title = styled.Text`
  font-size: 16px;
  line-height: 21px;
  color: #333;
  margin-bottom: 5px;
`;

export const Price = styled.Text`
  font-size: 21px;
  margin-bottom: 15px;
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  background: #7159c1;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  height: 42px;
  margin-top: auto;
`;

export const BasketContainer = styled.View`
  background: rgba(0, 0, 0, 0.3);
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

export const Counter = styled.Text`
  color: #fff;
  margin-left: 5px;
`;

export const CartAddText = styled.Text`
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  flex: 1;
`;
