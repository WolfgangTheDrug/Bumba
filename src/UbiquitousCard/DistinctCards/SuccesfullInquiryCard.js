import UbiquitousCard from "../UbiquitousCard.js";
//
// const Chart = require('chart.js');
//
// let papuChart = "";// Here you make your chart const global
// function CreatePapuChart(protein, carbs, fats) {
//     const pieData = [{
//         value: protein,
//         color: "rgb(255, 99, 132)",
//         highlight: "#FF5A5E",
//         label: "Białko"
//     }, {
//         value: carbs,
//         color: "rgb(54, 162, 235)",
//         highlight: "#5AD3D1",
//         label: "Węglowodany"
//     },{
//         value: fats,
//         color: "rgb(255, 205, 86)",
//         highlight: "#CC982F",
//         label: "Tłuszcze"
//     }];
//     const pieOptions = {
//         segmentShowStroke: false,
//         animateScale: true
//     }
//     //Here´s the change inside the function where you run destroy().
//     if(typeof papuChart.destroy != "undefined") papuChart.destroy();
//     papuChart = document.getElementById('papuChart').getContext('2d');
//     //new Chart(papuChart).Pie(pieData, pieOptions);
// }
//
//
// function SuccesfullInquiryCard() {
//
//
//   return (
//       <UbiquitousCard
//         fruit = {
//           </>
//         }
//       />
//   );
// }
import CanvasJSReact from "../../canvasjs.react";
var React = require('react');
var Component = React.Component;
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class SuccesfullInquiryCard extends Component {
	render() {
		const options = {
            // width: {},
			exportEnabled: false,
			animationEnabled: true,
            theme: "dark1",
            backgroundColor: "#282c34",
			title: {
                fontFamily: "Comfortaa",
				text: "Wartości odżywcze"
			},
			data: [{
				type: "pie",
				startAngle: 20,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
                legend: {
                    fontFamily: "Comfortaa"
                },
				legendText: "{label}",
				indexLabelFontSize: 10,
				indexLabel: " ",
                visible: true,
				dataPoints: [
					{ y: 10, label: "Białko" },
					{ y: 80, label: "Tłuszcze" },
					{ y: 10, label: "Węglowodany" }
				]
			}]
		}
		return (
		<div className="d-flex align-items-center">
			<CanvasJSChart
                options = {options}
				/* onRef={ref => this.chart = ref} */

            />
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default SuccesfullInquiryCard;
