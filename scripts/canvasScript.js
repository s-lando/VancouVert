window.onload = function() {

    var chart = new CanvasJS.Chart("userChart", {
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        animationEnabled: true,
        backgroundColor: "transparent",
        title: {
            text: "Your Footprint",
            padding: 5,
        },
        data: [{
            type: "pie",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: 55.08, label: "Transport" },
                { y: 30.02, label: "Home" },
                { y: 14.00, label: "Food" },
            ]
        }]
    });
    chart.render();
}    