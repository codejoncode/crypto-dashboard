import styled from 'styled-components';
import { fontSize1, greenBoxShadow, color3} from '../Shared/SharedStyles';

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

