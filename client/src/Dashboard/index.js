import React from 'react';
import Page from '../Shared/Page';
import PriceGrid from './PriceGrid';
import CoinSpotlight from './CoinSpotlight';
import { ChartGrid } from './DashboardStyles';
import PriceChart from './PriceChart';

const Dashboard = () => {
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

export default Dashboard;
