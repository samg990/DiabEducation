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
import Entypo from "react-native-vector-icons/Entypo";
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
					height: 250,
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
				option: "A diabetes diagnosis, now what?",
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
								borderBottomRadius: "30",
								borderTopRadius: "30",
							}}
						>
							<Animatable.View animation="bounceIn" duration={2000}>
								<Box
									borderBottomWidth="2"
									_dark={{
										borderColor: "gray.600",
									}}
									borderColor="coolGray.200"
									pl="1"
									pr="1"
									py="5"
								>
									<HStack space={2} justifyContent="space-between">
										<VStack>
											<Text
												_dark={{
													color: "warmGray.50",
												}}
												color="#fad161"
												fontSize="xl"
												fontWeight={500}
												pb="4"
											>
												{item.option}
											</Text>

											{/* <Text
										color="coolGray.600"
										_dark={{
											color: "warmGray.200",
										}}
									>
										{item.recentText}
									</Text> */}
										</VStack>
										<Spacer />
										{/* <Text
									fontSize="xs"
									_dark={{
										color: "warmGray.50",
									}}
									color="coolGray.800"
									alignSelf="flex-start"
								>
									{item.timeStamp}
								</Text> */}
									</HStack>
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
				barStyle="light-content"
			/>
			<Box
				safeAreaTop
				_light={{
					bg: "primary.900",
				}}
				_dark={{
					bg: "coolGray.900",
				}}
			/>
			<Center
				my="auto"
				_dark={{
					bg: "coolGray.900",
				}}
				_light={{
					bg: "primary.900",
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
								<HStack
									space="2"
									alignItems="center"
									justifyContent="space-between"
								>
									<IconButton
										pl="0"
										variant="unstyled"
										onPress={() => navigation.goBack()}
										icon={
											<Icon
												size="6"
												as={AntDesign}
												name="arrowleft"
												color="coolGray.50"
											/>
										}
									/>
									<IconButton
										pl="0"
										variant="unstyled"
										onPress={() => navigation.navigate("Home")}
										icon={
											<Icon
												size="6"
												as={AntDesign}
												name="home"
												color="coolGray.50"
											/>
										}
									/>
								</HStack>
								<HStack>
									<Text fontSize="3xl" color="coolGray.50" fontWeight={500}>
										Treatment Options
									</Text>
									<Spacer />
									<Spacer />
									<Spacer />
									<Spacer />
									<Spacer />
									<Spacer />
								</HStack>

								<Text
									fontSize="md"
									_dark={{
										color: "coolGray.400",
									}}
									_light={{
										color: "primary.300",
									}}
								>
									Categories
								</Text>
							</VStack>
						</VStack>
					</Hidden>

					<Box
						flex="1"
						px="9"
						py="9"
						_light={{
							bg: "black",
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
