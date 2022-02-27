import React, { useState } from "react";
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
	PresenceTransition,
} from "native-base";
import { AntDesign, Entypo } from "@expo/vector-icons";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Auth } from "aws-amplify";

const Scale = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [isTypeOne, setIsTypeOne] = React.useState(false);
	const [isTypeTwo, setIsTypeTwo] = React.useState(false);
	return (
		<Center>
			<Box
				bgColor="coolGray.800"
				alignItems="center"
				borderWidth="5"
				borderColor="coolGray.800"
				borderRadius="16"
			>
				<Pressable onPress={() => setIsOpen(!isOpen)} m="5">
					{isOpen ? (
						<Box alignItems="center">
							<Heading fontWeight={500} color="coolGray.400" fontSize="30">
								Understanding Type 1
							</Heading>
							<Entypo name="chevron-up" size={24} color="white" />
						</Box>
					) : (
						<Box alignItems="center">
							<Heading fontWeight={500} color="white" fontSize="30">
								Understanding Type 1
							</Heading>
							<Entypo name="chevron-down" size={24} color="white" />
						</Box>
					)}
				</Pressable>
				<PresenceTransition
					visible={isOpen}
					initial={{
						opacity: 0,
						scale: 0,
					}}
					animate={{
						opacity: 1,
						scale: 1,
						transition: {
							duration: 300,
							type: "spring",
						},
					}}
				>
					<Text fontWeight={300} italic color="white" m="2">
						Whether you’ve been newly diagnosed, have been fighting against type
						1 or type 2 diabetes for a while, or are helping a loved one, you’ve
						come to the right place. This is the start of gaining a deeper
						understanding of how you can live a healthier life—with all the
						tools, health tips, and food ideas you need. Wherever you’re at with
						your diabetes, know that you have options and that you don’t have to
						be held back. You can still live your best life. All you have to do
						is take action and stick with it.{" "}
					</Text>
				</PresenceTransition>
			</Box>
			<Pressable onPress={() => setIsTypeOne(!isTypeOne)} m="5">
				<Heading fontWeight={600} color="black" fontSize="30">
					{isTypeOne ? "Understanding Type 1" : "Understanding Type 1"}
				</Heading>
			</Pressable>
			<PresenceTransition
				visible={isTypeOne}
				initial={{
					opacity: 0,
					scale: 0,
				}}
				animate={{
					opacity: 1,
					scale: 1,
					transition: {
						duration: 250,
						type: "spring",
					},
				}}
			>
				<Text fontWeight={300} italic color="black" fontSize="16">
					Here’s what you need to know about type 1 diabetes. Type 1 diabetes
					occurs at every age and in people of every race, shape, and size.
					There is no shame in having it, and you have a community of people
					ready to support you. Learning as much as you can about it and working
					closely with your diabetes care team can give you everything you need
					to thrive. In type 1 diabetes, the body does not produce insulin. The
					body breaks down the carbohydrates you eat into blood sugar (blood
					glucose) that it uses for energy—and insulin is a hormone that the
					body needs to get glucose from the bloodstream into the cells of the
					body. With the help of insulin therapy and other treatments, everyone
					can learn to manage their condition and live long, healthy lives.
					Remember: this is a condition that can be managed. By living a healthy
					lifestyle filled with exercise and proper diet, you can live a normal
					life and do everything you set out to do.
				</Text>
			</PresenceTransition>
			<Pressable onPress={() => setIsTypeOne(!isTypeOne)} m="5">
				<Heading fontWeight={600} color="#90e0ef" fontSize="30">
					{isTypeOne ? "Understanding Type 1" : "Understanding Type 1"}
				</Heading>
			</Pressable>
			<PresenceTransition
				visible={isTypeOne}
				initial={{
					opacity: 0,
					scale: 0,
				}}
				animate={{
					opacity: 1,
					scale: 1,
					transition: {
						duration: 250,
						type: "spring",
					},
				}}
			>
				<Text fontWeight={300} italic color="black" fontSize="16">
					Here’s what you need to know about type 1 diabetes. Type 1 diabetes
					occurs at every age and in people of every race, shape, and size.
					There is no shame in having it, and you have a community of people
					ready to support you. Learning as much as you can about it and working
					closely with your diabetes care team can give you everything you need
					to thrive. In type 1 diabetes, the body does not produce insulin. The
					body breaks down the carbohydrates you eat into blood sugar (blood
					glucose) that it uses for energy—and insulin is a hormone that the
					body needs to get glucose from the bloodstream into the cells of the
					body. With the help of insulin therapy and other treatments, everyone
					can learn to manage their condition and live long, healthy lives.
					Remember: this is a condition that can be managed. By living a healthy
					lifestyle filled with exercise and proper diet, you can live a normal
					life and do everything you set out to do.
				</Text>
			</PresenceTransition>
			<Pressable onPress={() => setIsTypeTwo(!isTypeTwo)} m="5">
				<Heading fontWeight={600} color="#90e0ef" fontSize="30">
					{isTypeTwo ? "Understanding A1c" : "Understanding A1c"}
				</Heading>
			</Pressable>
			<PresenceTransition
				visible={isTypeTwo}
				initial={{
					opacity: 0,
					scale: 0,
				}}
				animate={{
					opacity: 1,
					scale: 1,
					transition: {
						duration: 250,
						type: "spring",
					},
				}}
			>
				<Text fontWeight={400} italic color="black" fontSize="30" mb="3">
					So, what do the numbers mean?
				</Text>
				<Text fontWeight={300} italic color="black">
					When it comes to the numbers, there's no one-size-fits-all target. A1C
					target levels can vary by each person's age and other factors, and
					your target may be different from someone else's. The goal for most
					adults with diabetes is an A1C that is less than 7% . A1C test results
					are reported as a percentage. The higher the percentage, the higher
					your blood sugar levels over the past two to three months. The A1C
					test can also be used for diagnosis, based on the following
					guidelines:
				</Text>
				<Image
					source={require("../../../../assets/UnderstandingDiabetes/a1cChart.jpg")}
					alt="a1cChart"
					h="70"
					w="500"
				/>
				<Text fontWeight={300} italic color="black">
					- If your A1C level is between 5.7 and less than 6.5%, your levels
					have been in the prediabetes range.
				</Text>
				<Text fontWeight={300} italic color="black">
					- If your A1C level is between 5.7 and less than 6.5%, your levels
					have been in the prediabetes range.
				</Text>
			</PresenceTransition>
		</Center>
	);
};

export default function TreatmentOptions({ navigation }) {
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
										Understanding Diabetes
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

								<Text
									fontSize="md"
									fontWeight="normal"
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
							bg: "white",
						}}
						_dark={{
							bg: "coolGray.800",
						}}
						space="3"
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
						<KeyboardAwareScrollView
							contentContainerStyle={{
								flexGrow: 1,
							}}
							style={{
								flex: 1,
							}}
							showsVerticalScrollIndicator={false}
						>
							<Scale />
						</KeyboardAwareScrollView>
					</Box>
				</Stack>
			</Center>
		</>
	);
}
