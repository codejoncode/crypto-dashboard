import styled from 'styled-components';
import { subtleBoxShadow, lightBlueBackground, greenBoxShadow, redBoxShadow } from '../Shared/SharedStyles';



export const Title = styled.div`
  ${subtleBoxShadow}
  ${lightBlueBackground}
  padding: 10px; 
`;

export const TitleSelected = styled(Title)`
   &:hover {
       cursor: pointer;
       ${greenBoxShadow}
   }
`;
//TitleSelected
export const Deleted = styled(Title)`
  &:hover {
      cursor: pointer;
      ${redBoxShadow}
  }
`;

export const Disabled = styled(Title)`
  pointer-events: none;
  opacity: 0.4;
`;