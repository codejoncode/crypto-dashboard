import React from 'react';
import { AppContext } from "../App/AppProvider";
import { Grid } from './DashboardStyles';
import PriceTitle from './PriceTitle';


const PriceGrid = () => {
    return (
        <AppContext.Consumer>
            {({prices}) => /*console.log(prices)*/(
                <Grid>
                    {prices.map( (price, index) => <div key = {index}> <PriceTitle price = {price} index = {index}/></div>)}
                    
                </Grid>
            )}
            
        </AppContext.Consumer>
    )
}

export default PriceGrid;
