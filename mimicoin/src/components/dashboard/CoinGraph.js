import React, {useState, useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';
import {formatDollars2} from '../utils/helper';
import {Line} from 'react-chartjs-2';

// Use CANDLES FOR DATA
export const CoinGraph = (props) => {
	let [candleData, setCandleData] = useState([]);
	let [period, setPeriod] = useState('week');
	const options = {
		layout: {
			padding: 25
		},
		elements: {
			point: {
				backgroundColor: 'black',
				borderColor: 'black',
				radius: 0,
				hitRadius: 7,
				hoverRadius: 2,
				hoverBorderWidth: 2
			},
			line: {
				tension: 0.05,
				borderWidth: 2,
				borderColor: '#A8FFD0'
			}
		},
		scales: {
			xAxes:[{
				gridLines: {
					display: false
				},
				ticks: {
					fontColor: '#AAA'
				}
			}],
			yAxes:[{
				gridLines: {
					display: true,
					color: '#1D1D1D',
					drawBorder: false
				},
				ticks: {
					fontColor: '#AAA',
					padding: 10,
					callback: function(val, index, values){
						return '$' + parseFloat(val).toLocaleString();
					}
				}
			}]
		}
	};
	useEffect(() => {
		let interval = '1d';
		if(period === 'day')
			interval = '1h';
		let start = moment().subtract(1, period+'s').format('Y-MM-DD[T]HH:mm:ss.99[Z]');
		const fetchCandles = async () => {
			const results = await axios.get(`https://api.nomics.com/v1/candles?interval=${interval}&currency=${props.id}&key=${process.env.REACT_APP_NOMICS_KEY}&start=${start}`);
			const formattedData = results.data.map((el) => {
				return {
					timestamp: el.timestamp,
					closePrice: el.close,
					volume: el.volume
				};
			});
			setCandleData(formattedData.slice(-7));
		};
		fetchCandles();

	}, []);
	let axisFormat = 'l';
	switch(period){
		case 'day': axisFormat = 'LT'; break;
		case 'year': axisFormat = 'MMM YY'; break;
		default: break;
	}

	const graphData = {
		labels: candleData.map((el) => {return moment(el.timestamp).format(axisFormat)}),
		datasets: [{
			data: candleData.map((el) => {return el.closePrice}),
			fill: false
		}]
	};

	const legendConfig = {display: false};


	return (
		<div>
			<div>Chart Button</div>
			<Line data={graphData} options={options} legend={legendConfig} redraw/>
		</div>
		);
}
