import React from "react";
import highChartsConfig from "./highChartsConfig";
import { Title } from "../Shared/Title";
import { AppContext } from "../App/AppProvider";
import ReactHighcharts from "react-highcharts";
import ChartsTheme from "./ChartsTheme";

ReactHighcharts.Highcharts.setOptions(ChartsTheme);
export default () => {
  return (
    <AppContext.Consumer>
      {({ historical, firstVisit }) => {
        if (historical) {
          return (
            <Title>
              <ReactHighcharts config={highChartsConfig(historical)} />
            </Title>
          );
        }
        if (!firstVisit){
          return <div>Please go to settings and confirm your favorites</div>
        }

        return <div>Loading Historical Data</div>;
      }}
    </AppContext.Consumer>
  );
};
