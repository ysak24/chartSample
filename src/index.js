// polyfill for IE 11
import 'whatwg-fetch'
import 'core-js'
import 'regenerator-runtime/runtime'

import Chart from 'chart.js'
import config from '../config/chart.js'
import organizeData from './organizeData.js'

const ctx = document.getElementById('myChart').getContext('2d')
new Chart(ctx, {
    type: config['chartType'],
    data: organizeData(),
    options: config['options']
})
