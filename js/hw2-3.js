// map 1
var chart_1554f81998d44cf6838f43e6e55ef8b6 = echarts.init(
    document.getElementById('1554f81998d44cf6838f43e6e55ef8b6'), 'white', {
    renderer: 'canvas'
});
var option_1554f81998d44cf6838f43e6e55ef8b6 = {
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
        "type": "map",
        "name": "GDP/$1T",
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "mapType": "world",
        "data": [{
            "name": "United States",
            "value": 21.34
        }, {
            "name": "China",
            "value": 14.22
        }, {
            "name": "Japan",
            "value": 5.18
        }, {
            "name": "Germany",
            "value": 3.96
        }, {
            "name": "India",
            "value": 2.97
        }, {
            "name": "United Kingdom",
            "value": 2.83
        }, {
            "name": "France",
            "value": 2.76
        }, {
            "name": "Italy",
            "value": 2.03
        }, {
            "name": "Brazil",
            "value": 1.96
        }, {
            "name": "Canada",
            "value": 1.74
        }],
        "roam": true,
        "aspectScale": 0.75,
        "nameProperty": "name",
        "selectedMode": false,
        "zoom": 1,
        "mapValueCalculation": "sum",
        "showLegendSymbol": false,
        "emphasis": {},
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    }],
    "legend": [{
        "data": [
            "GDP/$1T"
        ],
        "selected": {
            "GDP/$1T": true
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
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "title": [{
        "text": "GDP Top10",
        "padding": 5,
        "itemGap": 10
    }],
    "visualMap": {
        "show": true,
        "type": "piecewise",
        "min": 0,
        "max": 22,
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
        "itemHeight": 14,
        "borderWidth": 0
    }
};
chart_1554f81998d44cf6838f43e6e55ef8b6.setOption(option_1554f81998d44cf6838f43e6e55ef8b6);

// map 2
var chart_dbf3513604a64579b61b98f0f7a38af8 = echarts.init(
    document.getElementById('dbf3513604a64579b61b98f0f7a38af8'), 'white', {
    renderer: 'canvas'
});
var option_dbf3513604a64579b61b98f0f7a38af8 = {
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
        "type": "map",
        "name": "GDPPC/$10,000",
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "mapType": "world",
        "data": [{
            "name": "Luxembourg",
            "value": 11.58
        }, {
            "name": "Switzerland",
            "value": 8.25
        }, {
            "name": "Ireland",
            "value": 8.05
        }, {
            "name": "Norway",
            "value": 7.53
        }, {
            "name": "Iceland",
            "value": 6.79
        }, {
            "name": "United States",
            "value": 6.53
        }, {
            "name": "Singapore",
            "value": 6.52
        }, {
            "name": "Qatar",
            "value": 6.3
        }, {
            "name": "Denmark",
            "value": 5.98
        }],
        "roam": true,
        "aspectScale": 0.75,
        "nameProperty": "name",
        "selectedMode": false,
        "zoom": 1,
        "mapValueCalculation": "sum",
        "showLegendSymbol": false,
        "emphasis": {},
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    }],
    "legend": [{
        "data": [
            "GDPPC/$10,000"
        ],
        "selected": {
            "GDPPC/$10,000": true
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
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "title": [{
        "text": "GDPPC Top10",
        "padding": 5,
        "itemGap": 10
    }],
    "visualMap": {
        "show": true,
        "type": "continuous",
        "min": 5,
        "max": 12,
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
    }
};
chart_dbf3513604a64579b61b98f0f7a38af8.setOption(option_dbf3513604a64579b61b98f0f7a38af8);
