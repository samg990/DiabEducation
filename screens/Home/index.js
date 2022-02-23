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
} from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import FloatingLabelInput from "./components/FloatingLabelInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Auth } from "aws-amplify";
import Chart from "./Chart";

import * as Animatable from "react-native-animatable";

export default function Home({ navigation, updateAuthState }) {
	async function signOut() {
		try {
			await Auth.signOut();

			updateAuthState("loggedOut");
		} catch (error) {
			console.log("Error signing out: ", error);
		}
	}

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
								<HStack>
									<Text fontSize="3xl" color="coolGray.50">
										DiabEducation
									</Text>
									<Spacer />
									<Spacer />
									<Spacer />
									<Spacer />
									<Spacer />
									<Spacer />
									<HStack alignItems="center" flex="1">
										<IconButton
											pl="0"
											variant="unstyled"
											onPress={() => {
												navigation.navigate("Settings");
											}}
											icon={
												<Icon
													size="6"
													as={Entypo}
													name="cog"
													color="coolGray.50"
												/>
											}
										/>
									</HStack>
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
									Home
								</Text>
							</VStack>
						</VStack>
					</Hidden>

					<KeyboardAwareScrollView
						contentContainerStyle={{
							flexGrow: 1,
						}}
						style={{
							flex: 1,
						}}
					>
						{/* <HStack px="2">
							<Chart />
						</HStack> */}

						<VStack
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
							<HStack alignItems="center" space="2" flexWrap="wrap">
								<Animatable.View animation="bounceInLeft" duration={2000}>
									<Pressable
										mb="1"
										onPress={() => navigation.navigate("TreatmentOptions")}
									>
										{({ isHovered, isFocused, isPressed }) => {
											return (
												<Box
													w="40"
													h="40"
													borderWidth="1"
													borderColor="coolGray.300"
													shadow="3"
													alignContent="center"
													alignItems="center"
													bg={
														isPressed
															? "coolGray.200"
															: isHovered
															? "coolGray.200"
															: "coolGray.100"
													}
													p="5"
													rounded="8"
													style={{
														transform: [
															{
																scale: isPressed ? 0.96 : 1,
															},
														],
													}}
												>
													<HStack alignItems="center">
														{/* <Badge
														colorScheme="darkBlue"
														_text={{
															color: "white",
														}}
														variant="solid"
														rounded="4"
													>
														Business
													</Badge> */}
														{/* <Spacer />
												<Text fontSize={10} color="coolGray.800">
													1 month ago
												</Text> */}
													</HStack>
													<Image
														alt="doctor"
														size={70}
														source={require("../../assets/doctor.png")}
													/>
													<Text
														color="coolGray.800"
														mt="3"
														fontWeight="medium"
														fontSize="14"
													>
														Treatment Options
													</Text>
													{/* <Icon
														as={Entypo}
														name="shopping-cart"
														color="coolGray.800"
														mt="2"
														size="16"
														_dark={{
															color: "warmGray.50",
														}}
													/> */}
												</Box>
											);
										}}
									</Pressable>
								</Animatable.View>
								<Animatable.View animation="bounceInRight" duration={2000}>
									<Pressable mb="1" onPress={() => console.log("exercise")}>
										{({ isHovered, isFocused, isPressed }) => {
											return (
												<Box
													w="40"
													h="40"
													borderWidth="1"
													borderColor="coolGray.300"
													shadow="3"
													alignContent="center"
													alignItems="center"
													bg={
														isPressed
															? "coolGray.200"
															: isHovered
															? "coolGray.200"
															: "coolGray.100"
													}
													p="5"
													rounded="8"
													style={{
														transform: [
															{
																scale: isPressed ? 0.96 : 1,
															},
														],
													}}
												>
													<HStack alignItems="center">
														{/* <Badge
														colorScheme="darkBlue"
														_text={{
															color: "white",
														}}
														variant="solid"
														rounded="4"
													>
														Business
													</Badge> */}
														{/* <Spacer />
												<Text fontSize={10} color="coolGray.800">
													1 month ago
												</Text> */}
													</HStack>
													<Image
														alt="heart"
														size={70}
														source={require("../../assets/heart.png")}
													/>
													<Text
														color="coolGray.800"
														mt="3"
														fontWeight="medium"
														fontSize="md"
													>
														Healthy Coping
													</Text>
												</Box>
											);
										}}
									</Pressable>
								</Animatable.View>
								<Animatable.View animation="bounceInLeft" duration={2500}>
									<Pressable mb="1" onPress={() => console.log("behavioral")}>
										{({ isHovered, isFocused, isPressed }) => {
											return (
												<Box
													w="40"
													h="40"
													borderWidth="1"
													borderColor="coolGray.300"
													shadow="3"
													alignContent="center"
													alignItems="center"
													bg={
														isPressed
															? "coolGray.200"
															: isHovered
															? "coolGray.200"
															: "coolGray.100"
													}
													p="5"
													rounded="8"
													style={{
														transform: [
															{
																scale: isPressed ? 0.96 : 1,
															},
														],
													}}
												>
													<HStack alignItems="center">
														{/* <Badge
														colorScheme="darkBlue"
														_text={{
															color: "white",
														}}
														variant="solid"
														rounded="4"
													>
														Business
													</Badge> */}
														{/* <Spacer />
												<Text fontSize={10} color="coolGray.800">
													1 month ago
												</Text> */}
													</HStack>
													<Image
														alt="behavior"
														size={70}
														source={require("../../assets/customer-behavior.png")}
													/>
													<Text
														px="5"
														color="coolGray.800"
														mt="3"
														fontWeight="medium"
														fontSize="md"
													>
														Behavioral Changes
													</Text>
												</Box>
											);
										}}
									</Pressable>
								</Animatable.View>
								<Animatable.View animation="bounceInRight" duration={2500}>
									<Pressable mb="1" onPress={() => console.log("nutrition")}>
										{({ isHovered, isFocused, isPressed }) => {
											return (
												<Box
													w="40"
													h="40"
													borderWidth="1"
													borderColor="coolGray.300"
													shadow="3"
													alignContent="center"
													alignItems="center"
													bg={
														isPressed
															? "coolGray.200"
															: isHovered
															? "coolGray.200"
															: "coolGray.100"
													}
													p="5"
													rounded="8"
													style={{
														transform: [
															{
																scale: isPressed ? 0.96 : 1,
															},
														],
													}}
												>
													<HStack alignItems="center">
														{/* <Badge
														colorScheme="darkBlue"
														_text={{
															color: "white",
														}}
														variant="solid"
														rounded="4"
													>
														Business
													</Badge> */}
														{/* <Spacer />
												<Text fontSize={10} color="coolGray.800">
													1 month ago
												</Text> */}
													</HStack>
													<Image
														alt="plan"
														size={70}
														source={require("../../assets/plan.png")}
													/>
													<Text
														px="5"
														color="coolGray.800"
														mt="3"
														fontWeight="medium"
														fontSize="md"
													>
														Nutrition
													</Text>
												</Box>
											);
										}}
									</Pressable>
								</Animatable.View>
								<Animatable.View animation="bounceInLeft" duration={3000}>
									<Pressable mb="1" onPress={() => console.log("Physical")}>
										{({ isHovered, isFocused, isPressed }) => {
											return (
												<Box
													w="40"
													h="40"
													borderWidth="1"
													borderColor="coolGray.300"
													shadow="3"
													alignContent="center"
													alignItems="center"
													bg={
														isPressed
															? "coolGray.200"
															: isHovered
															? "coolGray.200"
															: "coolGray.100"
													}
													p="5"
													rounded="8"
													style={{
														transform: [
															{
																scale: isPressed ? 0.96 : 1,
															},
														],
													}}
												>
													<HStack alignItems="center">
														{/* <Badge
														colorScheme="darkBlue"
														_text={{
															color: "white",
														}}
														variant="solid"
														rounded="4"
													>
														Business
													</Badge> */}
														{/* <Spacer />
												<Text fontSize={10} color="coolGray.800">
													1 month ago
												</Text> */}
													</HStack>
													<Image
														alt="physical"
														size={70}
														source={require("../../assets/runner.png")}
													/>
													<Text
														px="7"
														color="coolGray.800"
														mt="3"
														fontWeight="medium"
														fontSize="md"
													>
														Physical Activity
													</Text>
												</Box>
											);
										}}
									</Pressable>
								</Animatable.View>
								<Animatable.View animation="bounceInRight" duration={3000}>
									<Pressable mb="1" onPress={() => console.log("medication")}>
										{({ isHovered, isFocused, isPressed }) => {
											return (
												<Box
													w="40"
													h="40"
													borderWidth="1"
													borderColor="coolGray.300"
													shadow="3"
													alignContent="center"
													alignItems="center"
													bg={
														isPressed
															? "coolGray.200"
															: isHovered
															? "coolGray.200"
															: "coolGray.100"
													}
													p="5"
													rounded="8"
													style={{
														transform: [
															{
																scale: isPressed ? 0.96 : 1,
															},
														],
													}}
												>
													<HStack alignItems="center">
														{/* <Badge
														colorScheme="darkBlue"
														_text={{
															color: "white",
														}}
														variant="solid"
														rounded="4"
													>
														Business
													</Badge> */}
														{/* <Spacer />
												<Text fontSize={10} color="coolGray.800">
													1 month ago
												</Text> */}
													</HStack>
													<Image
														alt="medicine"
														size={70}
														source={require("../../assets/medicine.png")}
													/>
													<Text
														px="4"
														color="coolGray.800"
														mt="3"
														fontWeight="medium"
														fontSize="md"
													>
														Medication
													</Text>
												</Box>
											);
										}}
									</Pressable>
								</Animatable.View>
								<Animatable.View animation="bounceInLeft" duration={3500}>
									<Pressable mb="1" onPress={() => console.log("glucose")}>
										{({ isHovered, isFocused, isPressed }) => {
											return (
												<Box
													w="40"
													h="40"
													borderWidth="1"
													borderColor="coolGray.300"
													shadow="3"
													alignContent="center"
													alignItems="center"
													bg={
														isPressed
															? "coolGray.200"
															: isHovered
															? "coolGray.200"
															: "coolGray.100"
													}
													p="5"
													rounded="8"
													style={{
														transform: [
															{
																scale: isPressed ? 0.96 : 1,
															},
														],
													}}
												>
													<HStack alignItems="center">
														{/* <Badge
														colorScheme="darkBlue"
														_text={{
															color: "white",
														}}
														variant="solid"
														rounded="4"
													>
														Business
													</Badge> */}
														{/* <Spacer />
												<Text fontSize={10} color="coolGray.800">
													1 month ago
												</Text> */}
													</HStack>
													<Image
														alt="glucose"
														size={70}
														source={require("../../assets/glucose-meter.png")}
													/>
													<Text
														px="4"
														color="coolGray.800"
														mt="3"
														fontWeight="medium"
														fontSize="md"
													>
														Glucose Monitoring
													</Text>
												</Box>
											);
										}}
									</Pressable>
								</Animatable.View>
								<Animatable.View animation="bounceInRight" duration={3500}>
									<Pressable mb="1" onPress={() => console.log("acute")}>
										{({ isHovered, isFocused, isPressed }) => {
											return (
												<Box
													w="40"
													h="40"
													borderWidth="1"
													borderColor="coolGray.300"
													shadow="3"
													alignContent="center"
													alignItems="center"
													bg={
														isPressed
															? "coolGray.200"
															: isHovered
															? "coolGray.200"
															: "coolGray.100"
													}
													p="5"
													rounded="8"
													style={{
														transform: [
															{
																scale: isPressed ? 0.96 : 1,
															},
														],
													}}
												>
													<HStack alignItems="center">
														{/* <Badge
														colorScheme="darkBlue"
														_text={{
															color: "white",
														}}
														variant="solid"
														rounded="4"
													>
														Business
													</Badge> */}
														{/* <Spacer />
												<Text fontSize={10} color="coolGray.800">
													1 month ago
												</Text> */}
													</HStack>
													<Image
														alt="chronic"
														size={70}
														source={require("../../assets/headache.png")}
													/>
													<Text
														color="coolGray.800"
														mt="3"
														fontWeight="medium"
														fontSize="md"
													>
														Acute/ Chronic Complications
													</Text>
												</Box>
											);
										}}
									</Pressable>
								</Animatable.View>
							</HStack>
						</VStack>
					</KeyboardAwareScrollView>
				</Stack>
			</Center>
		</>
	);
}
