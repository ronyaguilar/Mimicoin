import React, {useState, useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';
import {formatDollars2} from '../utils/helper';
import {Line} from 'react-chartjs-2';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

// Use CANDLES FOR DATA
export const CoinGraph = (props) => {
	let [candleData, setCandleData] = useState([]);
	let [period, setPeriod] = useState('week');
	let [axisFormat, setAxisFormat] = useState('l');
	let [labels, setLabels] = useState([]);

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
			//const results = await axios.get(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.REACT_APP_NOMICS_KEY}&ids=${props.id}&interval=${interval}`);
			const results = await axios.get(`https://api.nomics.com/v1/candles?interval=${interval}&currency=${props.id}&key=${process.env.REACT_APP_NOMICS_KEY}&start=${start}`);

			const formattedData = results.data.map((el) => {
				return {
					timestamp: el.timestamp,
					closePrice: el.close,
					volume: el.volume
				};
			});
			switch(period){
				case 'week':
					setCandleData(formattedData);
					break;
				case 'month':
					setCandleData(formattedData.filter((el, index) => index % 2 === 0));
					break;
				case 'year':
					setCandleData(formattedData.filter((el, index) => index % 30 === 0));
					break;
				default:
					setCandleData(formattedData.filter((el, index) => index % 2 === 0));
					break;
			}
		};

		switch(period){
			case 'day': setAxisFormat('LT'); break;
			case 'year': setAxisFormat('MMM YY'); break;
			default: setAxisFormat('l');
		}

		fetchCandles();

	}, [period]);



	let graphData = {
		labels: candleData.map(el => moment(el.timestamp).format(axisFormat)),
		datasets: [{
			data: candleData.map(
				(el) => {return el.closePrice}),
			fill: true,
			backgroundColor: 'rgba(99, 152, 150, 0.2)'
		}]
	};
  //'rgba(0, 142, 137, 0.2)'
	const legendConfig = {display: false};

	const handleClick = p => () => {
		setPeriod(p)
	}


	return (
		<div>
		<ButtonGroup >
			<Button variant='secondary' onClick = {handleClick('day')}>Today</Button>
			<Button variant='secondary' onClick = {handleClick('week')}>Week</Button>
			<Button variant='secondary' onClick = {handleClick('month')}>Month</Button>
			<Button variant='secondary' onClick = {handleClick('year')}>Year</Button>
		</ButtonGroup>
			<Line data={graphData} options={options} legend={legendConfig}/>
		</div> );
}
