import styled from 'styled-components/native';

import logo from '../../assets/logo.png';

export const Wrapper = styled.SafeAreaView`
  background: #141419;
  flex: 0;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 184px;
  height: 24px;
`;

export const CartButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Badge = styled.Text`
  position: absolute;
  background: #7159c1;
  color: #fff;
  padding: 2px;
  min-width: 16px;
  min-height: 16px;
  border-radius: 8px;
  text-align: center;
  font-size: 10px;
  top: -3px;
  right: -3px;
`;
