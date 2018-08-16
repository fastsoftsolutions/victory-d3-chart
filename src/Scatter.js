import React from "react";

import { VictoryChart, VictoryStack,VictoryGroup, VictoryArea, VictoryPortal, VictoryScatter, VictoryTooltip, VictoryZoomContainer } from "victory";

import * as d3 from "d3";
import $ from "jquery";

export default class AreaScatter extends React.Component {
  render() {
    return (
      <VictoryChart
        scale={{ x: "time" }}
        containerComponent={<VictoryZoomContainer />}
      >
        <VictoryStack colorScale="warm">
          <VictoryGroup
            data={[
              { x: new Date(1986, 1, 1), y: 2 },
              { x: new Date(1996, 1, 1), y: 3 },
              { x: new Date(2006, 1, 1), y: 5 },
              { x: new Date(2016, 1, 1), y: 4 }
            ]}
          >
            <VictoryArea />
            <VictoryPortal>
              <VictoryScatter
                style={{ data: { fill: "black" } }}
                labels={d => d.y}
                labelComponent={<VictoryTooltip />}
              />
            </VictoryPortal>
          </VictoryGroup>
          <VictoryGroup
            data={[
              { x: new Date(1986, 1, 1), y: 4 },
              { x: new Date(1996, 1, 1), y: 3 },
              { x: new Date(2006, 1, 1), y: 2 },
              { x: new Date(2016, 1, 1), y: 5 }
            ]}
          >
            <VictoryArea />
            <VictoryPortal>
              <VictoryScatter
                style={{ data: { fill: "black" } }}
                labels={d => d.y}
                labelComponent={<VictoryTooltip />}
              />
            </VictoryPortal>
          </VictoryGroup>
          <VictoryGroup
            data={[
              { x: new Date(1986, 1, 1), y: 3 },
              { x: new Date(1996, 1, 1), y: 1 },
              { x: new Date(2006, 1, 1), y: 4 },
              { x: new Date(2016, 1, 1), y: 2 }
            ]}
          >
            <VictoryArea />
            <VictoryPortal>
              <VictoryScatter
                style={{ data: { fill: "black" } }}
                labels={d => d.y}
                labelComponent={<VictoryTooltip />}
              />
            </VictoryPortal>
          </VictoryGroup>
        </VictoryStack>
      </VictoryChart>
    );
  }
  componentDidUpdate() {
    d3.select("svg").attr("width", $(window).width());
    d3.select("svg").attr("height", $(window).height());
  }
  componentDidMount() {
    d3.select("svg").attr("width", $(window).width());
    d3.select("svg").attr("height", $(window).height());
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    d3.select("svg").attr("width", $(window).width());
    d3.select("svg").attr("height", $(window).height());
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.forceUpdate();
  };
}
