import React from "react";
import highChartsConfig from "./highChartsConfig";
import { Title } from "../Shared/Title";
import { AppContext } from "../App/AppProvider";
import ReactHighcharts from "react-highcharts";

export default () => {
  return (
    <AppContext.Consumer>
      {({}) => 
      <Title>
        <ReactHighcharts config={highChartsConfig()} />
      </Title>
    }
    </AppContext.Consumer>
  );
};