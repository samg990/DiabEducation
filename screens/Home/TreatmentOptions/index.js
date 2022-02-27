import React, { useEffect } from "react";
import {
	Button,
	HStack,
	VStack,
	Text,
	Link,
	Checkbox,
	Divider,
	Image,
	useColorModeValue,
	IconButton,
	Icon,
	Pressable,
	Center,
	Hidden,
	StatusBar,
	Stack,
	Box,
	Badge,
	Spacer,
	Flex,
	FlatList,
	Heading,
	View,
} from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Entypo } from "@expo/vector-icons";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Auth } from "aws-amplify";

import LottieView from "lottie-react-native";

export const HeartLottie = () => {
	let animation = React.createRef();

	useEffect(() => {
		animation.current.play();
	}, []);

	return (
		<View>
			<LottieView
				ref={animation}
				loop={true}
				style={{
					width: 300,
					height: 300,
				}}
				source={require("../../../assets/lottie/sheildLottie.json")}
			/>
		</View>
	);
};

export default function TreatmentOptions({ navigation, updateAuthState }) {
	const TreatmentList = () => {
		const data = [
			{
				id: "1",
				option: "Understanding Diabetes",
				routeName: "UnderstandingDia",
				timeStamp: "12:47 PM",
				recentText: "Good Day!",
			},
			{
				id: "2",
				option: "Types of Diabetes",
				routeName: "TypesDia",
				timeStamp: "11:11 PM",
				recentText: "Cheer up, there!",
			},
			{
				id: "3",
				option: "Risk Factors and Diagnoses",
				routeName: "RiskDia",
				timeStamp: "6:22 PM",
				recentText: "Good Day!",
			},
			{
				id: "4",
				option: "Diagnosed, now what?",
				routeName: "DiagnosisDia",
				timeStamp: "8:56 PM",
				recentText: "All the best",
			},
			{
				id: "5",
				option: "SMART Goals",
				routeName: "SmartDia",
				timeStamp: "12:47 PM",
				recentText: "I will call today.",
			},
		];
		return (
			<Box>
				{/* <Text fontSize="3xl" p="1" pb="3">
					Treatment Options
				</Text> */}
				<Spacer />

				<FlatList
					data={data}
					renderItem={({ item }) => (
						<Pressable
							onPress={() => navigation.navigate(item.routeName)}
							_pressed={{
								bg: "#343a40",
								borderRadius: "10",
							}}
						>
							<Animatable.View animation="bounceIn" duration={2000}>
								<Box
									borderBottomWidth="3"
									borderColor="#9bf6ff"
									pl="1"
									pr="1"
									py="5"
								>
									<VStack>
										<HStack space="2" justifyContent="space-between">
											<Text
												color="black"
												fontSize="20"
												fontWeight={400}
												pb="2"
												italic
											>
												{item.option}
											</Text>
											<Entypo
												name="chevron-small-right"
												size={20}
												color="black"
											/>
										</HStack>
									</VStack>
								</Box>
							</Animatable.View>
						</Pressable>
					)}
					keyExtractor={(item) => item.id}
				/>
			</Box>
		);
	};

	return (
		<>
			<StatusBar
				translucent
				backgroundColor="transparent"
				barStyle="dark-content"
			/>
			<Box
				safeAreaTop
				_light={{
					bg: "white",
				}}
				_dark={{
					bg: "#f8f9fa",
				}}
			/>
			<Center
				my="auto"
				_dark={{
					bg: "coolGray.900",
				}}
				_light={{
					bg: "white",
				}}
				flex="1"
			>
				<Stack
					flexDirection={{
						base: "column",
						md: "row",
					}}
					w="100%"
					maxW={{
						md: "1016px",
					}}
					flex={{
						base: "1",
						md: "none",
					}}
				>
					<Hidden from="md">
						<VStack px="4" mt="2" mb="2" space="9">
							<VStack space="2">
								<HStack justifyContent="space-between">
									<IconButton
										pl="0"
										variant="unstyled"
										onPress={() => navigation.goBack()}
										icon={
											<Icon
												size="6"
												as={AntDesign}
												name="arrowleft"
												color="black"
											/>
										}
									/>
									<Text fontSize="22" fontWeight={500} color="black">
										Treatment Options
									</Text>

									<IconButton
										pl="0"
										variant="unstyled"
										onPress={() => {
											navigation.navigate("Home");
										}}
										icon={
											<Icon size="6" as={AntDesign} name="home" color="black" />
										}
									/>
								</HStack>
							</VStack>
						</VStack>
					</Hidden>

					<Box
						flex="1"
						px="9"
						py="9"
						_light={{
							bg: "white",
						}}
						_dark={{
							bg: "coolGray.800",
						}}
						space="3"
						justifyContent="space-between"
						borderTopRightRadius={{
							base: "2xl",
							md: "xl",
						}}
						borderBottomRightRadius={{
							base: "0",
							md: "xl",
						}}
						borderTopLeftRadius={{
							base: "2xl",
							md: "0",
						}}
					>
						<HStack alignSelf="center">
							<HeartLottie />
						</HStack>
						<TreatmentList />
					</Box>
				</Stack>
			</Center>
		</>
	);
}
