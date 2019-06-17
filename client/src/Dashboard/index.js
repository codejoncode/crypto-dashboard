import React from 'react';
import Page from '../Shared/Page';
import PriceGrid from './PriceGrid';
import CoinSpotlight from './CoinSpotlight';
import { ChartGrid } from './DashboardStyles';

const Dashboard = () => {
    return (
        <Page name = "dashboard">
            <PriceGrid/>
            <ChartGrid>
              <CoinSpotlight />
              <div>Chart goes here</div>
            </ChartGrid>
        </Page >
    )
}

export default Dashboard;
