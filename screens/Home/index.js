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
										onPress={() => {
											navigation.navigate("");
										}}
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
										DiabEducation
									</Text>

									<IconButton
										pl="0"
										variant="unstyled"
										onPress={() => {
											navigation.navigate("Settings");
										}}
										icon={
											<Icon size="6" as={Entypo} name="cog" color="black" />
										}
									/>
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
							<HStack justifyContent="space-between">
								<Text
									color="black"
									fontSize="21"
									px="4"
									mt="4"
									fontWeight={400}
									italic
								>
									My Glucose
								</Text>
								<Pressable px="4" mt="4">
									<Text color="#69A4DF" fontSize="17" fontWeight={300} italic>
										Add
									</Text>
								</Pressable>
							</HStack>

							<Animatable.View animation="fadeInDown" duration={2500}>
								<Chart />
							</Animatable.View>
							<HStack justifyContent="space-between">
								<Text
									color="black"
									fontSize="21"
									px="4"
									fontWeight={400}
									italic
								>
									Education Center
								</Text>
								<Pressable px="4" mt="4">
									<Text color="#69A4DF" fontSize="17" fontWeight={300} italic>
										See All
									</Text>
								</Pressable>
							</HStack>
							<HStack
								alignItems="center"
								space="2"
								flexWrap="wrap"
								px="9"
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
													w="40"
													h="40"
													borderWidth="1"
													borderColor="#9bf6ff"
													shadow="7"
													alignContent="center"
													justifyContent="space-between"
													bg={
														isPressed
															? "#403d39"
															: isHovered
															? "coolGray.200"
															: "#9bf6ff"
													}
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

													<Text
														color="black"
														ml="3"
														fontWeight={500}
														italic
														fontSize="lg"
													>
														Treatment Options
													</Text>
													<Text
														color="black"
														ml="3"
														fontSize="11"
														opacity="0.5"
													>
														Learn about all the different treatment options
													</Text>
													<Icon
														as={Entypo}
														name="chevron-small-right"
														color="black"
														ml="3"
														size="8"
														_dark={{
															color: "warmGray.50",
														}}
													/>
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
													w="40"
													h="40"
													borderWidth="1"
													borderColor="#bdb2ff"
													shadow="7"
													alignContent="center"
													justifyContent="space-between"
													bg={
														isPressed
															? "white"
															: isHovered
															? "coolGray.200"
															: "#bdb2ff"
													}
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
													<Text
														color="black"
														ml="3"
														fontWeight={500}
														italic
														fontSize="lg"
													>
														Healthy Coping
													</Text>
													<Text
														color="black"
														ml="3"
														fontSize="11"
														opacity="0.5"
													>
														Living with Diabetes
													</Text>
													<Icon
														as={Entypo}
														name="chevron-small-right"
														color="black"
														ml="3"
														size="8"
														_dark={{
															color: "warmGray.50",
														}}
													/>
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
													w="40"
													h="40"
													borderWidth="1"
													borderColor="#caffbf"
													shadow="7"
													alignContent="center"
													justifyContent="space-between"
													bg={
														isPressed
															? "#403d39"
															: isHovered
															? "coolGray.200"
															: "#caffbf"
													}
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
													<Text
														color="black"
														ml="3"
														fontWeight={500}
														italic
														fontSize="lg"
													>
														Behavioral Changes
													</Text>
													<Text
														color="black"
														ml="3"
														fontSize="11"
														opacity="0.5"
													>
														Living with Diabetes
													</Text>
													<Icon
														as={Entypo}
														name="chevron-small-right"
														color="black"
														ml="3"
														size="8"
														_dark={{
															color: "warmGray.50",
														}}
													/>
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
													w="40"
													h="40"
													borderWidth="1"
													borderColor="#ffadad"
													shadow="7"
													alignContent="center"
													justifyContent="space-between"
													bg={
														isPressed
															? "#403d39"
															: isHovered
															? "coolGray.200"
															: "#ffadad"
													}
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
													<Text
														color="black"
														ml="3"
														fontWeight={500}
														italic
														fontSize="lg"
													>
														Nutrition
													</Text>
													<Text
														color="black"
														ml="3"
														fontSize="11"
														opacity="0.5"
													>
														Living with Diabetes
													</Text>
													<Icon
														as={Entypo}
														name="chevron-small-right"
														color="black"
														ml="3"
														size="8"
														_dark={{
															color: "warmGray.50",
														}}
													/>
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
													w="40"
													h="40"
													borderWidth="1"
													borderColor="#fffffc"
													shadow="7"
													alignContent="center"
													justifyContent="space-between"
													bg={
														isPressed
															? "#403d39"
															: isHovered
															? "coolGray.200"
															: "#fffffc"
													}
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
													<Text
														color="black"
														ml="3"
														fontWeight={500}
														italic
														fontSize="lg"
													>
														Physical Activity
													</Text>
													<Text
														color="black"
														ml="3"
														fontSize="11"
														opacity="0.5"
													>
														Get up and start owning diabetes
													</Text>
													<Icon
														as={Entypo}
														name="chevron-small-right"
														color="black"
														ml="3"
														size="8"
														_dark={{
															color: "warmGray.50",
														}}
													/>
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
													w="40"
													h="40"
													borderWidth="1"
													borderColor="#cdb4db"
													shadow="7"
													alignContent="center"
													justifyContent="space-between"
													bg={
														isPressed
															? "#403d39"
															: isHovered
															? "coolGray.200"
															: "#cdb4db"
													}
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
													<Text
														color="black"
														ml="3"
														fontWeight={500}
														italic
														fontSize="lg"
													>
														Medication
													</Text>
													<Text
														color="black"
														ml="3"
														fontSize="11"
														opacity="0.5"
													>
														Living with Diabetes
													</Text>
													<Icon
														as={Entypo}
														name="chevron-small-right"
														color="black"
														ml="3"
														size="8"
														_dark={{
															color: "warmGray.50",
														}}
													/>
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
													w="40"
													h="40"
													borderWidth="1"
													borderColor="#ffd6a5"
													shadow="7"
													alignContent="center"
													justifyContent="space-between"
													bg={
														isPressed
															? "#403d39"
															: isHovered
															? "coolGray.200"
															: "#ffd6a5"
													}
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
													<Text
														color="black"
														ml="3"
														fontWeight={500}
														italic
														fontSize="lg"
													>
														Glucose Monitoring
													</Text>
													<Text
														color="black"
														ml="3"
														fontSize="11"
														opacity="0.5"
													>
														Living with Diabetes
													</Text>
													<Icon
														as={Entypo}
														name="chevron-small-right"
														color="black"
														ml="3"
														size="8"
														_dark={{
															color: "warmGray.50",
														}}
													/>
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
													w="40"
													h="40"
													borderWidth="1"
													borderColor="#c0fdff"
													shadow="7"
													alignContent="center"
													justifyContent="space-between"
													bg={
														isPressed
															? "#403d39"
															: isHovered
															? "coolGray.200"
															: "#c0fdff"
													}
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
													<Text
														color="black"
														ml="3"
														fontWeight={500}
														italic
														fontSize="lg"
													>
														Acute/Chronic Complications
													</Text>
													<Text
														color="black"
														ml="3"
														fontSize="11"
														opacity="0.5"
													>
														Living with Diabetes
													</Text>
													<Icon
														as={Entypo}
														name="chevron-small-right"
														color="black"
														ml="3"
														size="8"
														_dark={{
															color: "warmGray.50",
														}}
													/>
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
													w="40"
													h="40"
													borderWidth="1"
													borderColor="#f08080"
													shadow="7"
													alignContent="center"
													justifyContent="space-between"
													bg={
														isPressed
															? "#403d39"
															: isHovered
															? "coolGray.200"
															: "#f08080"
													}
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
													<Text
														color="black"
														ml="3"
														fontWeight={500}
														italic
														fontSize="lg"
													>
														Dashboard
													</Text>
													<Text
														color="black"
														ml="3"
														fontSize="11"
														opacity="0.5"
													>
														Living with Diabetes
													</Text>
													<Icon
														as={Entypo}
														name="chevron-small-right"
														color="black"
														ml="3"
														size="8"
														_dark={{
															color: "warmGray.50",
														}}
													/>
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
