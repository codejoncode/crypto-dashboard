import styled from 'styled-components';


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

export const ChartGrid = styled.div`
  display:grid;
  margin-top: 20px;
  grid-gap: 15px; 
  grid-template-columns: 1fr 3fr; 

`;

export const SpotLightName = styled.h2`
  text-align: center; 
`;