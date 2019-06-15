import React from 'react'
import {AppContext} from "../App/AppProvider";
import { StyledCoinGrid, CenterDiv } from './SettingsStyles';


const CoinGrid = () => {
    return (
        <AppContext.Consumer>
            {({coinList}) => <StyledCoinGrid>
                {Object.keys(coinList).map((coinKey, index) => <div key ={index} >{coinKey}</div>)}
            </StyledCoinGrid>}
            
        </AppContext.Consumer>
    )
}

export default CoinGrid
