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
	Heading,
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
									<Text fontSize="3xl" fontWeight={500} color="coolGray.50">
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

								{/* <Text
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
								</Text> */}
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
							_light={{
								bg: "black",
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
							<Text color="white" fontSize="20" px="4" mt="4" fontWeight={100}>
								My Glucose
							</Text>

							<Animatable.View animation="fadeInDown" duration={2500}>
								<Chart />
							</Animatable.View>
							<Text color="white" fontSize="20" px="4" fontWeight={100}>
								Education
							</Text>
							<HStack
								alignItems="center"
								space="2"
								flexWrap="wrap"
								px="12"
								py="4"
							>
								<Animatable.View animation="bounceInLeft" duration={3000}>
									<Pressable
										mb="1"
										onPress={() => navigation.navigate("TreatmentOptions")}
									>
										{({ isHovered, isFocused, isPressed }) => {
											return (
												<Box
													w="24"
													h="24"
													borderWidth="1"
													borderColor="#fad161"
													shadow="3"
													alignContent="center"
													alignItems="center"
													bg={
														isPressed
															? "#403d39"
															: isHovered
															? "coolGray.200"
															: "#252422"
													}
													p="1"
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
														size={12}
														source={require("../../assets/doctor.png")}
													/>
													<Text
														color="#fad161"
														ml="4"
														mt="1"
														fontWeight="bold"
														fontSize="12"
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
								<Animatable.View animation="bounceInDown" duration={3000}>
									<Pressable mb="1" onPress={() => console.log("exercise")}>
										{({ isHovered, isFocused, isPressed }) => {
											return (
												<Box
													w="24"
													h="24"
													borderWidth="1"
													borderColor="#fad161"
													shadow="3"
													alignContent="center"
													alignItems="center"
													bg={
														isPressed
															? "#403d39"
															: isHovered
															? "coolGray.200"
															: "#252422"
													}
													p="1"
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
														size={12}
														source={require("../../assets/heart.png")}
													/>
													<Text
														color="#fad161"
														mt="1"
														fontWeight="bold"
														fontSize="12"
													>
														Healthy Coping
													</Text>
												</Box>
											);
										}}
									</Pressable>
								</Animatable.View>
								<Animatable.View animation="bounceInRight" duration={3000}>
									<Pressable mb="1" onPress={() => console.log("behavioral")}>
										{({ isHovered, isFocused, isPressed }) => {
											return (
												<Box
													w="24"
													h="24"
													borderWidth="1"
													borderColor="#fad161"
													shadow="3"
													alignContent="center"
													alignItems="center"
													bg={
														isPressed
															? "#403d39"
															: isHovered
															? "coolGray.200"
															: "#252422"
													}
													p="0.5"
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
														size={12}
														source={require("../../assets/customer-behavior.png")}
													/>
													<Text
														color="#fad161"
														ml="4"
														mt="1"
														fontWeight="bold"
														fontSize="12"
													>
														Behavioral Changes
													</Text>
												</Box>
											);
										}}
									</Pressable>
								</Animatable.View>
								<Animatable.View animation="bounceInLeft" duration={3500}>
									<Pressable mb="1" onPress={() => console.log("nutrition")}>
										{({ isHovered, isFocused, isPressed }) => {
											return (
												<Box
													w="24"
													h="24"
													borderWidth="1"
													borderColor="#fad161"
													shadow="3"
													alignContent="center"
													alignItems="center"
													bg={
														isPressed
															? "#403d39"
															: isHovered
															? "coolGray.200"
															: "#252422"
													}
													p="1"
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
														size={12}
														source={require("../../assets/plan.png")}
													/>
													<Text
														color="#fad161"
														mt="3"
														fontWeight="bold"
														fontSize="13"
													>
														Nutrition
													</Text>
												</Box>
											);
										}}
									</Pressable>
								</Animatable.View>
								<Animatable.View animation="bounceIn" duration={3000}>
									<Pressable mb="1" onPress={() => console.log("Physical")}>
										{({ isHovered, isFocused, isPressed }) => {
											return (
												<Box
													w="24"
													h="24"
													borderWidth="1"
													borderColor="#fad161"
													shadow="3"
													alignContent="center"
													alignItems="center"
													bg={
														isPressed
															? "#403d39"
															: isHovered
															? "coolGray.200"
															: "#252422"
													}
													p="1"
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
														size={12}
														source={require("../../assets/runner.png")}
													/>
													<Text
														color="#fad161"
														ml="5"
														mt="1"
														fontWeight="bold"
														fontSize="12"
													>
														Physical Activity
													</Text>
												</Box>
											);
										}}
									</Pressable>
								</Animatable.View>
								<Animatable.View animation="bounceInRight" duration={3500}>
									<Pressable mb="1" onPress={() => console.log("medication")}>
										{({ isHovered, isFocused, isPressed }) => {
											return (
												<Box
													w="24"
													h="24"
													borderWidth="1"
													borderColor="#fad161"
													shadow="3"
													alignContent="center"
													alignItems="center"
													bg={
														isPressed
															? "#403d39"
															: isHovered
															? "coolGray.200"
															: "#252422"
													}
													p="1"
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
														size={12}
														source={require("../../assets/medicine.png")}
													/>
													<Text
														color="#fad161"
														mt="3"
														fontWeight="bold"
														fontSize="13"
													>
														Medication
													</Text>
												</Box>
											);
										}}
									</Pressable>
								</Animatable.View>
								<Animatable.View animation="bounceInLeft" duration={3000}>
									<Pressable mb="1" onPress={() => console.log("glucose")}>
										{({ isHovered, isFocused, isPressed }) => {
											return (
												<Box
													w="24"
													h="24"
													borderWidth="1"
													borderColor="#fad161"
													shadow="3"
													alignContent="center"
													alignItems="center"
													bg={
														isPressed
															? "#403d39"
															: isHovered
															? "coolGray.200"
															: "#252422"
													}
													p="0.5"
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
														size={12}
														source={require("../../assets/glucose-meter.png")}
													/>
													<Text
														color="#fad161"
														mt="2"
														ml="4"
														fontWeight="bold"
														fontSize="12"
													>
														Glucose Monitoring
													</Text>
												</Box>
											);
										}}
									</Pressable>
								</Animatable.View>
								<Animatable.View animation="bounceInUp" duration={3000}>
									<Pressable mb="1" onPress={() => console.log("acute")}>
										{({ isHovered, isFocused, isPressed }) => {
											return (
												<Box
													w="24"
													h="24"
													borderWidth="1"
													borderColor="#fad161"
													shadow="3"
													alignContent="center"
													alignItems="center"
													bg={
														isPressed
															? "#403d39"
															: isHovered
															? "coolGray.200"
															: "#252422"
													}
													p="1"
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
														size={12}
														source={require("../../assets/headache.png")}
													/>
													<Text
														color="#fad161"
														mt="1"
														ml="1"
														fontWeight="bold"
														fontSize="12"
													>
														Acute/ Chronic Complications
													</Text>
												</Box>
											);
										}}
									</Pressable>
								</Animatable.View>
								<Animatable.View animation="bounceInRight" duration={3000}>
									<Pressable mb="1" onPress={() => console.log("acute")}>
										{({ isHovered, isFocused, isPressed }) => {
											return (
												<Box
													w="24"
													h="24"
													borderWidth="1"
													borderColor="#fad161"
													shadow="3"
													alignContent="center"
													alignItems="center"
													bg={
														isPressed
															? "#403d39"
															: isHovered
															? "coolGray.200"
															: "#252422"
													}
													p="1"
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
														size={12}
														source={require("../../assets/monitor.png")}
													/>
													<Text
														color="#fad161"
														mt="3"
														fontWeight="bold"
														fontSize="13"
													>
														Dashboard
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

{
	/* <Pressable mb="1" onPress={() => console.log("Physical")}>
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
													</Badge> */
}
{
	/* <Spacer />
												<Text fontSize={10} color="coolGray.800">
													1 month ago
												</Text> */
}
// 				</HStack>
// 				<Image
// 					alt="physical"
// 					size={70}
// 					source={require("../../assets/runner.png")}
// 				/>
// 				<Text
// 					color="#ccff33"
// 					mt="3"
// 					fontWeight="bold"
// 					fontSize="10"
// 				>
// 					Physical Activity
// 				</Text>
// 			</Box>
// 		);
// 	}}
// </Pressable> */
