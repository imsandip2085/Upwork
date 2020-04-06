import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import data from '../../../data.json';
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

var categories = [
    {
        category: []
    }
];

var dataset = [
    {
        seriesname: "Male",
        data: []
    },
    {
        seriesname: "Female",
        data: []
    }
]

data.map((val) => {
    let year = val.year;
    let male = val.male;
    let female = val.female;
    categories[0].category.push({ "label": year.toString() });
    dataset[0].data.push({ "value": male.toString() });
    dataset[1].data.push({ "value": female.toString() });
});

const chartConfigs = {
    type: "msline",
    renderAt: "chart-container",
    width: "80%",
    height: "500",
    dataFormat: "json",
    dataSource: {
        chart: {
            caption: "Birth in Taiwan",
            subCaption: "Source: Ministry of the Interiror",
            xAxisName: "Year",
            yAxisName: "People",
            base: "100",
            numberSuffix: "",
            theme: "fusion",
        },
        "categories": categories,
        "dataset": dataset,
    }
};

class Graph extends React.Component {

    render() {
        return (
            <div>
                <ReactFC {...chartConfigs} />
            </div>
        );
    }
}

export default Graph;