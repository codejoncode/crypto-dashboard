import styled from 'styled-components';
import { fontSize1, greenBoxShadow, color3, backgroundColor2, fontSize2} from '../Shared/SharedStyles';

export const ButtonConfirm = styled.div`
  margin: 20px;
  color: ${color3};
  ${fontSize1}
  padding: 5px;
  cursor: pointer;
  &:hover {
      ${greenBoxShadow}
  }
`;

export const CenterDiv = styled.div`
  display: grid;
  justify-content: center; 
`;

export const StyledCoinGrid = styled.div`
  display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(135px, 1fr));
  grid-gap : 15px; 
  margin-top : 40px;
`;

export const SearchingGrid = styled.div`
  display: grid; 
  grid-template-columns: 110px 1fr;
`;

export const SearchInput = styled.input`
  ${backgroundColor2}
  ${fontSize2}
  color: #1163c9;
  border : 1px solid; 
  height: 25px; 
  place-self: center left;

`;

export const SearchHeader = styled.h1`
  font-size : 14px;

`;