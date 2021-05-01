// tab choose
(function () {
    containers = document.getElementsByClassName("tab-chart-container");
    if (containers.length > 0) {
        containers[0].style.display = "block";
    }
})()

function showChart(evt, chartID) {
    let containers = document.getElementsByClassName("tab-chart-container");
    for (let i = 0; i < containers.length; i++) {
        containers[i].style.display = "none";
    }

    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = "tablinks";
    }

    document.getElementById(chartID).style.display = "block";
    evt.currentTarget.className += " active";
}
