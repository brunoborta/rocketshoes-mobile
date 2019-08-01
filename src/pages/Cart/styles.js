import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  background: #191920;
  padding: 20px 0;
`;

export const CartContainer = styled.View`
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  margin: 0 8px;
`;

export const ProductItem = styled.View`
  padding-top: 20px;
`;

export const Info = styled.View`
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const Description = styled.View`
  margin-left: 10px;
  flex: 1;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-size: 14px;
  line-height: 18px;
`;

export const Price = styled.Text`
  margin-top: 5px;
  font-weight: bold;
  font-size: 16px;
`;

export const SilverBar = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  background: #eee;
  height: 42px;
  border-radius: 4px;
`;

export const Controls = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AddIcon = styled(Icon).attrs({
  name: 'add',
  size: 22,
  color: '#000',
})`
  margin: 0 10px;
`;

export const Input = styled.TextInput.attrs({
  editable: false,
  readonly: true,
})`
  padding: 3px;
  border-radius: 4px;
  background: #fff;
  width: 50px;
  border: 1px solid #ddd;
  color: #666;
`;

export const RemoveButton = styled.TouchableOpacity`
  padding: 0 5px;
  justify-content: center;
`;

export const DeleteIcon = styled(Icon).attrs({
  name: 'delete',
  size: 22,
  color: '#000',
})``;

export const RemoveIcon = styled(Icon).attrs({
  name: 'remove',
  size: 22,
  color: '#000',
})`
  margin: 0 10px;
`;

export const ProductTotal = styled.Text`
  font-size: 16px;
  margin: 10px;
  text-align: center;
`;

export const TotalContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  text-align: center;
`;

export const TotalLabel = styled.Text`
  font-size: 16px;
  color: #999;
  text-transform: uppercase;
`;

export const TotalAmount = styled.Text`
  font-size: 30px;
`;

export const AddButton = styled.TouchableOpacity`
  background: #7159c1;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  height: 42px;
  text-transform: uppercase;
`;

export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  text-transform: uppercase;
`;
