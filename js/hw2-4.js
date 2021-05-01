// box 1
var chart_610f42e847f5459c87b3609af40192f1 = echarts.init(
    document.getElementById('610f42e847f5459c87b3609af40192f1'), 'white', {
    renderer: 'canvas'
});
var option_610f42e847f5459c87b3609af40192f1 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [{
        "type": "bar",
        "name": "GDP Top10 in 2019",
        "yAxisIndex": 0,
        "legendHoverLink": true,
        "data": [
            21.34,
            14.22,
            5.18,
            3.96,
            2.97,
            2.83,
            2.76,
            2.03,
            1.96,
            1.74
        ],
        "showBackground": false,
        "barMinHeight": 0,
        "barCategoryGap": "20%",
        "barGap": "30%",
        "large": false,
        "largeThreshold": 400,
        "seriesLayoutBy": "column",
        "datasetIndex": 0,
        "clip": true,
        "zlevel": 0,
        "z": 2,
        "label": {
            "show": true,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "color": "#5793ff"
        }
    }, {
        "type": "bar",
        "name": "GDP Top10 in 2020",
        "yAxisIndex": 0,
        "legendHoverLink": true,
        "data": [
            19.39,
            12.24,
            4.87,
            3.68,
            2.6,
            2.62,
            2.58,
            1.93,
            2.06,
            1.65
        ],
        "showBackground": false,
        "barMinHeight": 0,
        "barCategoryGap": "20%",
        "barGap": "30%",
        "large": false,
        "largeThreshold": 400,
        "seriesLayoutBy": "column",
        "datasetIndex": 0,
        "clip": true,
        "zlevel": 0,
        "z": 2,
        "label": {
            "show": true,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "color": "#d14a61"
        }
    }, {
        "type": "effectScatter",
        "name": "COVID-19 rate",
        "yAxisIndex": 1,
        "showEffectOn": "render",
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        },
        "symbol": "diamond",
        "symbolSize": 10,
        "data": [
            [
                "United States",
                "9.6"
            ],
            [
                "China",
                "0.0"
            ],
            [
                "Japan",
                "0.4"
            ],
            [
                "Germany",
                "3.4"
            ],
            [
                "India",
                "1.0"
            ],
            [
                "United Kingdom",
                "6.5"
            ],
            [
                "France",
                "7.1"
            ],
            [
                "Italy",
                "5.9"
            ],
            [
                "Brazil",
                "6.3"
            ],
            [
                "Canada",
                "5.2"
            ]
        ],
        "label": {
            "show": true,
            "position": "top",
            "margin": 8
        },
        "itemStyle": {
            "color": "#3ba25f"
        }
    }],
    "legend": [{
        "data": [
            "GDP Top10 in 2019",
            "GDP Top10 in 2020",
            "COVID-19 rate"
        ],
        "selected": {
            "GDP Top10 in 2019": true,
            "GDP Top10 in 2020": true,
            "COVID-19 rate": true
        },
        "show": true,
        "padding": 5,
        "itemGap": 10,
        "itemWidth": 25,
        "itemHeight": 14
    }],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "xAxis": [{
        "show": true,
        "scale": false,
        "nameLocation": "end",
        "nameGap": 15,
        "gridIndex": 0,
        "axisLabel": {
            "rotate": 30
        },
        "inverse": false,
        "offset": 0,
        "splitNumber": 5,
        "minInterval": 0,
        "splitLine": {
            "show": false,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            }
        },
        "data": [
            "United States",
            "China",
            "Japan",
            "Germany",
            "India",
            "United Kingdom",
            "France",
            "Italy",
            "Brazil",
            "Canada"
        ]
    }],
    "yAxis": [{
        "name": "GDP",
        "show": true,
        "scale": false,
        "nameLocation": "end",
        "nameGap": 15,
        "gridIndex": 0,
        "axisLine": {
            "show": true,
            "onZero": true,
            "onZeroAxisIndex": 0,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid",
                "color": "#675bba"
            }
        },
        "axisLabel": {
            "formatter": "${value} trillion",
            "rotate": -10
        },
        "inverse": false,
        "position": "right",
        "offset": 0,
        "splitNumber": 5,
        "min": 0,
        "max": 22,
        "minInterval": 0,
        "splitLine": {
            "show": false,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            }
        }
    }, {
        "type": "value",
        "name": "COVID-19 rate",
        "show": true,
        "scale": false,
        "nameLocation": "end",
        "nameGap": 15,
        "gridIndex": 0,
        "axisLine": {
            "show": true,
            "onZero": true,
            "onZeroAxisIndex": 0,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid",
                "color": "#3ba25f"
            }
        },
        "axisLabel": {
            "show": true,
            "position": "top",
            "margin": 8,
            "formatter": "{value}%"
        },
        "inverse": false,
        "position": "left",
        "offset": 0,
        "splitNumber": 5,
        "min": 0,
        "max": 10,
        "minInterval": 0,
        "splitLine": {
            "show": true,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            }
        }
    }],
    "title": [{
        "text": "GDP Top10",
        "padding": 5,
        "itemGap": 10
    }]
};
chart_610f42e847f5459c87b3609af40192f1.setOption(option_610f42e847f5459c87b3609af40192f1);

// box 2
var chart_31a73e910c654eb3a6cebea23ff4348d = echarts.init(
    document.getElementById('31a73e910c654eb3a6cebea23ff4348d'), 'white', {
    renderer: 'canvas'
});
var option_31a73e910c654eb3a6cebea23ff4348d = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [{
        "type": "effectScatter",
        "name": "GDP decrement",
        "coordinateSystem": "geo",
        "showEffectOn": "render",
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        },
        "symbol": "roundRect",
        "symbolSize": 12,
        "data": [{
            "name": "United States",
            "value": [-95.71,
                37.09,
                "93"
            ]
        }, {
            "name": "China",
            "value": [
                104.2,
                35.86,
                "94"
            ]
        }, {
            "name": "Japan",
            "value": [
                138.25,
                36.2,
                "19"
            ]
        }, {
            "name": "Germany",
            "value": [
                10.45,
                51.17,
                "18"
            ]
        }, {
            "name": "India",
            "value": [
                78.96,
                20.59,
                "22"
            ]
        }, {
            "name": "United Kingdom",
            "value": [-3.44,
                55.38,
                "14"
            ]
        }, {
            "name": "France",
            "value": [
                2.21,
                46.23,
                "13"
            ]
        }, {
            "name": "Italy",
            "value": [
                12.57,
                41.87,
                "9"
            ]
        }, {
            "name": "Brazil",
            "value": [-51.93, -14.24,
                "0"
            ]
        }, {
            "name": "Canada",
            "value": [-106.35,
                56.13,
                "9"
            ]
        }],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        }
    }, {
        "type": "effectScatter",
        "name": "Pandemic",
        "coordinateSystem": "geo",
        "showEffectOn": "render",
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        },
        "symbol": "diamond",
        "symbolSize": 12,
        "data": [{
            "name": "United States",
            "value": [-95.71,
                37.09,
                "96.0"
            ]
        }, {
            "name": "China",
            "value": [
                104.2,
                35.86,
                "0.1"
            ]
        }, {
            "name": "Japan",
            "value": [
                138.25,
                36.2,
                "3.7"
            ]
        }, {
            "name": "Germany",
            "value": [
                10.45,
                51.17,
                "34.1"
            ]
        }, {
            "name": "India",
            "value": [
                78.96,
                20.59,
                "9.8"
            ]
        }, {
            "name": "United Kingdom",
            "value": [-3.44,
                55.38,
                "65.3"
            ]
        }, {
            "name": "France",
            "value": [
                2.21,
                46.23,
                "71.2"
            ]
        }, {
            "name": "Italy",
            "value": [
                12.57,
                41.87,
                "59.3"
            ]
        }, {
            "name": "Brazil",
            "value": [-51.93, -14.24,
                "62.9"
            ]
        }, {
            "name": "Canada",
            "value": [-106.35,
                56.13,
                "52.0"
            ]
        }],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        }
    }],
    "legend": [{
        "data": [
            "GDP decrement",
            "Pandemic"
        ],
        "selected": {
            "GDP decrement": false,
            "Pandemic": true
        },
        "show": true,
        "padding": 5,
        "itemGap": 10,
        "itemWidth": 25,
        "itemHeight": 14
    }],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "formatter": function (params) {
            return params.name + ' : ' + params.value[2];
        },
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "title": [{
        "text": "GDP decrement in these countries",
        "padding": 5,
        "itemGap": 10
    }],
    "visualMap": {
        "show": true,
        "type": "continuous",
        "min": 0,
        "max": 100,
        "inRange": {
            "color": [
                "#50a3ba",
                "#eac763",
                "#d94e5d"
            ]
        },
        "calculable": true,
        "inverse": false,
        "splitNumber": 5,
        "orient": "vertical",
        "showLabel": true,
        "itemWidth": 20,
        "itemHeight": 140,
        "borderWidth": 0
    },
    "geo": {
        "map": "world",
        "roam": true,
        "aspectScale": 0.75,
        "nameProperty": "name",
        "selectedMode": false,
        "emphasis": {}
    }
};
chart_31a73e910c654eb3a6cebea23ff4348d.setOption(option_31a73e910c654eb3a6cebea23ff4348d);