import styled,  {css} from 'styled-components';
// const theme = 'dark';
const theme = 'light';
export const lightTheme = theme === 'light';

export const color = lightTheme ? 'white' : '#061a44';
export const color2 = lightTheme ? 'white' : '#010e2c';
export const color3 = lightTheme ? '#09f010' : '#42ff3a';

if (lightTheme) {
  document.body.style.background = '#e1eaee';
  document.body.style.color = '#061a44';
}

export const lightBlueBackground = `background-color: ${color}`;
export const backgroundColor2 = `background-color: ${color2};`;
export const greenBackgroundColor = `background-color: ${color3};`;

export const fontColorGreen = `color: #03A9F4`;
export const fontColorWhite = `color: white`;
export const subtleBoxShadow = `box-shadow: 0px 0px 5px 1px ${lightTheme ? '#a9b6ff' : '#121d5b'}`;
export const greenBoxShadow = `box-shadow: 0px 0px 4px 2px #5fff17`;
export const redBoxShadow = `box-shadow: 0px 0px 2px 2px #e41111`;

export const fontSizeBig = 'font-size: 2em';
export const fontSize1 = 'font-size: 1.5em;';
export const fontSize2 = 'font-size: 1.0em';
export const fontSize3 = 'font-size: .75em';

export const textAlignCenter = 'text-align: center;';

export const CoinImage = styled.img`
  height: 50px;
  ${props => props.spotlight && css `
    height: 200px;
    margin: auto; 
    display: block;
  `}

`;

export const themeSwitcher = (theme) => {

  const lightTheme = theme === 'light';

  const color = lightTheme ? 'white' : '#061a44';
  const color2 = lightTheme ? 'white' : '#010e2c';
  const color3 = lightTheme ? '#09f010' : '#42ff3a';
  const lightBlueBackground = `background-color: ${color}`;
  const backgroundColor2 = `background-color: ${color2};`;
  const greenBackgroundColor = `background-color: ${color3};`;

  const fontColorGreen = `color: #03A9F4`;
  const fontColorWhite = `color: white`;
  const subtleBoxShadow = `box-shadow: 0px 0px 5px 1px ${lightTheme ? '#a9b6ff' : '#121d5b'}`;
  const greenBoxShadow = `box-shadow: 0px 0px 4px 2px #5fff17`;
  const redBoxShadow = `box-shadow: 0px 0px 2px 2px #e41111`;

  const fontSizeBig = 'font-size: 2em';
  const fontSize1 = 'font-size: 1.5em;';
  const fontSize2 = 'font-size: 1.0em';
  const fontSize3 = 'font-size: .75em';

  const textAlignCenter = 'text-align: center;';
  return {
    color, 
    color2,
    color3,
    lightBlueBackground,
    backgroundColor2,
    greenBackgroundColor,
    fontColorGreen,
    fontColorWhite,
    subtleBoxShadow,
    greenBoxShadow,
    redBoxShadow,
    fontSizeBig,
    fontSize1,
    fontSize2,
    fontSize3,
    textAlignCenter, 
  }
}