import { View, Dimensions } from "react-native";
import React from "react";
import {
	LineChart,
	BarChart,
	PieChart,
	ProgressChart,
	ContributionGraph,
	StackedBarChart,
} from "react-native-chart-kit";

import { Text } from "native-base";
const screenWidth = Dimensions.get("window").width;

export default function Chart() {
	const data = {
		labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],

		datasets: [
			{
				data: [100, 80, 150, 200, 50, 99, 250],
			},
		],
		legend: ["My Glucose"], // optional
	};

	const chartConfig = {
		backgroundGradientFrom: "#1E2923",
		backgroundGradientFromOpacity: 0,
		backgroundGradientTo: "#08130D",
		backgroundGradientToOpacity: 0.5,
		color: (opacity = 1) => `rgba(255, 214, 10, ${opacity})`,
		labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
		strokeWidth: 4, // optional, default 3
		propsForDots: {
			r: "4",
			strokeWidth: "2",
			stroke: "#ffa726",
		},
		useShadowColorFromDataset: false, // optional
	};
	return (
		<View>
			<LineChart
				data={data}
				width={screenWidth} // from react-native
				height={200}
				yAxisInterval={1} // optional, defaults to 1
				chartConfig={chartConfig}
				bezier
				style={{
					marginVertical: 1,
					borderRadius: 16,
				}}
				fromZero
			/>
		</View>
	);
}
