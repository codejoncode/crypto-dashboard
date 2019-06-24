import React, { Component } from 'react';
import Page from '../Shared/Page';
import PriceGrid from './PriceGrid';
import CoinSpotlight from './CoinSpotlight';
import { ChartGrid } from './DashboardStyles';
import PriceChart from './PriceChart';

class Dashboard extends Component {
    componentDidMount() {

    }

    componentDidUpdate() {
        
    }
    
    render() {
        return (
            <Page name = "dashboard">
                <PriceGrid/>
                <ChartGrid>
                  <CoinSpotlight />
                  <PriceChart />
                </ChartGrid>
            </Page >
        )
    }
}

export default Dashboard;
