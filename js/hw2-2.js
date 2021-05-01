var chart_b41e56fa76514641b401ad58b3917c1d = echarts.init(
    document.getElementById('b41e56fa76514641b401ad58b3917c1d'), 'infographic', {
    renderer: 'canvas'
});
var option_b41e56fa76514641b401ad58b3917c1d = {
    "backgroundColor": "white",
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "series": [{
        "type": "effectScatter",
        "coordinateSystem": "geo",
        "showEffectOn": "render",
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        },
        "symbolSize": 12,
        "data": [{
            "name": "\u897f\u5b89",
            "value": [
                108.95,
                34.27,
                100
            ]
        }, {
            "name": "\u6c49\u4e2d",
            "value": [
                107.01,
                33.04,
                40
            ]
        }, {
            "name": "\u6986\u6797",
            "value": [
                109.47,
                38.18,
                30
            ]
        }, {
            "name": "\u5ef6\u5b89",
            "value": [
                109.47,
                36.6,
                50
            ]
        }, {
            "name": "\u5b89\u5eb7",
            "value": [
                109.01,
                32.41,
                20
            ]
        }, {
            "name": "\u5b9d\u9e21",
            "value": [
                107.15,
                34.38,
                80
            ]
        }, {
            "name": "\u94dc\u5ddd",
            "value": [
                109.11,
                35.09,
                90
            ]
        }, {
            "name": "\u54b8\u9633",
            "value": [
                108.72,
                34.36,
                70
            ]
        }, {
            "name": "\u6e2d\u5357",
            "value": [
                109.5,
                34.52,
                60
            ]
        }, {
            "name": "\u5546\u6d1b",
            "value": [
                109.93,
                33.87,
                10
            ]
        }],
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        }
    }, {
        "type": "lines",
        "name": "\u6691\u5047",
        "coordinateSystem": "geo",
        "zlevel": 3,
        "progressive": 400,
        "progressiveThreshold": 3000,
        "effect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4,
            "color": "white",
            "symbol": "arrow",
            "symbolSize": 6
        },
        "symbol": [
            "none",
            "arrow"
        ],
        "polyline": false,
        "large": false,
        "largeThreshold": 2000,
        "symbolSize": 12,
        "data": [{
            "name": "\u6c49\u4e2d->\u5b89\u5eb7",
            "coords": [
                [
                    107.01,
                    33.04
                ],
                [
                    109.01,
                    32.41
                ]
            ]
        }, {
            "name": "\u5b89\u5eb7->\u5546\u6d1b",
            "coords": [
                [
                    109.01,
                    32.41
                ],
                [
                    109.93,
                    33.87
                ]
            ]
        }, {
            "name": "\u5546\u6d1b->\u897f\u5b89",
            "coords": [
                [
                    109.93,
                    33.87
                ],
                [
                    108.95,
                    34.27
                ]
            ]
        }, {
            "name": "\u897f\u5b89->\u5b9d\u9e21",
            "coords": [
                [
                    108.95,
                    34.27
                ],
                [
                    107.15,
                    34.38
                ]
            ]
        }, {
            "name": "\u5b9d\u9e21->\u6c49\u4e2d",
            "coords": [
                [
                    107.15,
                    34.38
                ],
                [
                    107.01,
                    33.04
                ]
            ]
        }],
        "lineStyle": {
            "show": true,
            "width": 1,
            "opacity": 1,
            "curveness": 0.2,
            "type": "solid"
        },
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    }, {
        "type": "lines",
        "name": "\u5bd2\u5047\uff08\u9a91\u884c\uff09",
        "coordinateSystem": "geo",
        "zlevel": 4,
        "progressive": 400,
        "progressiveThreshold": 3000,
        "effect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4,
            "color": "white",
            "symbol": "arrow",
            "symbolSize": 6
        },
        "symbol": [
            "none",
            "arrow"
        ],
        "polyline": false,
        "large": false,
        "largeThreshold": 2000,
        "symbolSize": 12,
        "data": [{
            "name": "\u897f\u5b89->\u6e2d\u5357",
            "coords": [
                [
                    108.95,
                    34.27
                ],
                [
                    109.5,
                    34.52
                ]
            ]
        }, {
            "name": "\u6e2d\u5357->\u94dc\u5ddd",
            "coords": [
                [
                    109.5,
                    34.52
                ],
                [
                    109.11,
                    35.09
                ]
            ]
        }, {
            "name": "\u94dc\u5ddd->\u5ef6\u5b89",
            "coords": [
                [
                    109.11,
                    35.09
                ],
                [
                    109.47,
                    36.6
                ]
            ]
        }, {
            "name": "\u5ef6\u5b89->\u6986\u6797",
            "coords": [
                [
                    109.47,
                    36.6
                ],
                [
                    109.47,
                    38.18
                ]
            ]
        }],
        "lineStyle": {
            "show": true,
            "width": 1,
            "opacity": 1,
            "curveness": -0.2,
            "type": "solid"
        },
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    }, {
        "type": "lines",
        "name": "\u4e58\u706b\u8f66",
        "coordinateSystem": "geo",
        "zlevel": 5,
        "progressive": 400,
        "progressiveThreshold": 3000,
        "effect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4,
            "color": "white",
            "symbol": "triangle",
            "symbolSize": 6
        },
        "symbol": [
            "none",
            "arrow"
        ],
        "polyline": false,
        "large": false,
        "largeThreshold": 2000,
        "symbolSize": 12,
        "data": [{
            "name": "\u6986\u6797->\u897f\u5b89",
            "coords": [
                [
                    109.47,
                    38.18
                ],
                [
                    108.95,
                    34.27
                ]
            ]
        }],
        "lineStyle": {
            "show": true,
            "width": 1,
            "opacity": 1,
            "curveness": -0.1,
            "type": "solid"
        },
        "label": {
            "show": false,
            "position": "top",
            "margin": 8
        },
        "rippleEffect": {
            "show": true,
            "brushType": "stroke",
            "scale": 2.5,
            "period": 4
        }
    }],
    "legend": [{
        "data": [
            "",
            "\u6691\u5047",
            "\u5bd2\u5047\uff08\u9a91\u884c\uff09",
            "\u4e58\u706b\u8f66"
        ],
        "selected": {
            "": true,
            "\u6691\u5047": true,
            "\u5bd2\u5047\uff08\u9a91\u884c\uff09": true,
            "\u4e58\u706b\u8f66": true
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
        "text": "\u7701\u5185\u65c5\u884c\u8ba1\u5212",
        "subtext": "\u9a91\u884c\u6216\u8f6e\u6ed1",
        "padding": 5,
        "itemGap": 10
    }],
    "toolbox": {
        "show": true,
        "orient": "horizontal",
        "itemSize": 15,
        "itemGap": 10,
        "left": "80%",
        "feature": {
            "saveAsImage": {
                "type": "png",
                "backgroundColor": "auto",
                "connectedBackgroundColor": "#fff",
                "show": true,
                "title": "\u4fdd\u5b58\u4e3a\u56fe\u7247",
                "pixelRatio": 1
            },
            "restore": {
                "show": true,
                "title": "\u8fd8\u539f"
            },
            "dataView": {
                "show": true,
                "title": "\u6570\u636e\u89c6\u56fe",
                "readOnly": false,
                "lang": [
                    "\u6570\u636e\u89c6\u56fe",
                    "\u5173\u95ed",
                    "\u5237\u65b0"
                ],
                "backgroundColor": "#fff",
                "textareaColor": "#fff",
                "textareaBorderColor": "#333",
                "textColor": "#000",
                "buttonColor": "#c23531",
                "buttonTextColor": "#fff"
            },
            "dataZoom": {
                "show": true,
                "title": {
                    "zoom": "\u533a\u57df\u7f29\u653e",
                    "back": "\u533a\u57df\u7f29\u653e\u8fd8\u539f"
                },
                "icon": {},
                "xAxisIndex": false,
                "yAxisIndex": false,
                "filterMode": "filter"
            },
            "magicType": {
                "show": true,
                "type": [
                    "line",
                    "bar",
                    "stack",
                    "tiled"
                ],
                "title": {
                    "line": "\u5207\u6362\u4e3a\u6298\u7ebf\u56fe",
                    "bar": "\u5207\u6362\u4e3a\u67f1\u72b6\u56fe",
                    "stack": "\u5207\u6362\u4e3a\u5806\u53e0",
                    "tiled": "\u5207\u6362\u4e3a\u5e73\u94fa"
                },
                "icon": {}
            },
            "brush": {
                "icon": {},
                "title": {
                    "rect": "\u77e9\u5f62\u9009\u62e9",
                    "polygon": "\u5708\u9009",
                    "lineX": "\u6a2a\u5411\u9009\u62e9",
                    "lineY": "\u7eb5\u5411\u9009\u62e9",
                    "keep": "\u4fdd\u6301\u9009\u62e9",
                    "clear": "\u6e05\u9664\u9009\u62e9"
                }
            }
        }
    },
    "visualMap": {
        "show": true,
        "type": "continuous",
        "min": 0,
        "max": 100,
        "inRange": {
            "color": [
                "#313695",
                "#4575b4",
                "#74add1",
                "#abd9e9",
                "#e0f3f8",
                "#ffffbf",
                "#fee090",
                "#fdae61",
                "#f46d43",
                "#d73027",
                "#a50026"
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
        "map": "\u9655\u897f",
        "roam": true,
        "aspectScale": 0.75,
        "nameProperty": "name",
        "selectedMode": false,
        "itemStyle": {
            "color": "lightblue",
            "borderColor": "black"
        },
        "emphasis": {}
    }
};
chart_b41e56fa76514641b401ad58b3917c1d.setOption(option_b41e56fa76514641b401ad58b3917c1d);
