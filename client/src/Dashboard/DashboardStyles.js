import styled , {css} from 'styled-components';
import {TitleSelected} from "../Shared/Title";

export const Grid = styled.div`
  display: grid; 
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`;

export const JustifyRight = styled.div`
  justify-self: right;
`;

export const JustifyLeft = styled.div`
  justify-self: left;
`;