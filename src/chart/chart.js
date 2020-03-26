import Chart from 'chart.js'
import config from './config'
import organizeData from './organizeData.js'

function drawChart(data, type) {
    const ctx = document.getElementById('myChart').getContext('2d')
    window.myChart = new Chart(ctx, {
        type: type ? type : 'bar',
        data: data ? data : organizeData(),
    })

    for (const props of Object.keys(config)) {
        window.myChart[props] = config[props]
    }
}
drawChart(organizeData())

function redraw(type) {
    if (myChart && myChart.destroy) {
        myChart.destroy()
    }
    drawChart(organizeData(), type)
}

document.getElementById('default').onclick = function () { redraw() }
document.getElementById('line').onclick = function () { redraw('line') }
document.getElementById('bar').onclick = function () { redraw('bar') }
document.getElementById('radar').onclick = function () { redraw('radar') }
document.getElementById('pie').onclick = function () { redraw('pie') }
document.getElementById('polarArea').onclick = function () { redraw('polarArea') }
document.getElementById('bubble').onclick = function () { redraw('bubble') }
document.getElementById('scatter').onclick = function () { redraw('scatter') }
