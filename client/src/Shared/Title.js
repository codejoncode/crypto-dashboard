import React from 'react';
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
