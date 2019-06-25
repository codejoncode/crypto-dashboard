import React from "react";
import highChartsConfig from "./highChartsConfig";
import { Title } from "../Shared/Title";
import { AppContext } from "../App/AppProvider";
import ReactHighcharts from "react-highcharts";
import ChartsTheme from "./ChartsTheme";
import ChartSelect from "./ChartSelect";

ReactHighcharts.Highcharts.setOptions(ChartsTheme);
export default () => {
  return (
    <AppContext.Consumer>
      {({ historical, firstVisit, changeChartSelect, timeInterval }) => {
        if (historical) {
          return (
            <Title>
              <ChartSelect 
              // defaultValue = "months"
              onChange = { e => changeChartSelect(e.target.value)}
              >
                <option  value="days">Days</option>
                <option  value="weeks">Weeks</option>
                <option  value="months">Months</option>
              </ChartSelect>
              <ReactHighcharts config={highChartsConfig(historical)} />
            </Title>
          );
        }
        if (!firstVisit) {
          return <div>Please go to settings and confirm your favorites</div>;
        }

        return <div>Loading Historical Data</div>;
      }}
    </AppContext.Consumer>
  );
};
