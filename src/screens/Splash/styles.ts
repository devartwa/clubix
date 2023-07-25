import styled from 'styled-components/native';

export const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.colors.BACKGROUND};
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.colors.PRIMARY_TEXT};
  font-family: 'Inter-Medium';
`;
