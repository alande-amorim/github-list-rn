import styled from 'styled-components';

export const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 0px;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  margin-right: 20px;
  background: #eee;
`;

export const HeaderTextContainer = styled.View`
  flex: 1;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  text-align: left;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
  line-height: 18px;
  color: #999;
  text-align: left;
`;
