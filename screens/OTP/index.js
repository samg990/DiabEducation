import React, { useState } from "react";
import {
	VStack,
	Box,
	HStack,
	Icon,
	Text,
	Link,
	Button,
	Image,
	Hidden,
	IconButton,
	useColorModeValue,
	Center,
	FormControl,
	StatusBar,
	Stack,
	Input,
} from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import FloatingLabelInput from "./components/FloatingLabelInput";

import { Auth } from "aws-amplify";

export default function OtpVerification(props) {
	const [username, setUsername] = useState("");

	const [authCode, setAuthCode] = useState("");

	async function confirmSignUp() {
		try {
			await Auth.confirmSignUp(username, authCode);

			console.log(" Code confirmed");

			props.navigation.navigate("SignIn");
		} catch (error) {
			console.log(
				" Verification code does not match. Please enter a valid verification code.",
				error.code,
			);
		}
	}
	// add next router here
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
						<HStack space="2" px="4" mt="4" mb="5" alignItems="center">
							<IconButton
								variant="unstyled"
								onPress={() => {}}
								icon={
									<Icon
										alignItems="center"
										justifyContent="center"
										size="6"
										as={AntDesign}
										name="arrowleft"
										color="coolGray.50"
									/>
								}
							/>
							<Text color="coolGray.50" fontSize="lg">
								Create Password
							</Text>
						</HStack>
					</Hidden>
					<Hidden till="md">
						<Center
							flex="1"
							bg="primary.700"
							px={{
								base: "4",
								md: "8",
							}}
							borderTopLeftRadius={{
								md: "xl",
							}}
							borderBottomLeftRadius={{
								md: "xl",
							}}
						>
							<Image
								h="24"
								size="80"
								alt="NativeBase Startup+ "
								resizeMode={"contain"}
								source={require("./components/logo.png")}
							/>
						</Center>
					</Hidden>
					<Box
						py={{
							base: "6",
							md: "12",
						}}
						px={{
							base: "4",
							md: "10",
						}}
						_light={{
							bg: "white",
						}}
						_dark={{
							bg: "coolGray.800",
						}}
						flex="1"
						borderTopRightRadius={{
							md: "xl",
						}}
						borderBottomRightRadius={{
							md: "xl",
						}}
					>
						<VStack justifyContent="space-between" flex="1" space="24">
							<Box>
								<VStack
									space={{
										base: "4",
										md: "5",
									}}
								>
									<Text
										fontSize="xl"
										fontWeight="bold"
										_dark={{
											color: "coolGray.50",
										}}
										_light={{
											color: "coolGray.800",
										}}
									>
										Enter OTP
									</Text>
									<HStack space="2" alignItems="center">
										<Text
											_light={{
												color: "coolGray.800",
											}}
											_dark={{
												color: "coolGray.400",
											}}
										>
											Please check your email for the
										</Text>
										<Text
											fontWeight="bold"
											_light={{
												color: "coolGray.800",
											}}
											_dark={{
												color: "coolGray.300",
											}}
										>
											confirmation code
										</Text>
									</HStack>
								</VStack>
								<VStack space="12" mt="6">
									<FormControl>
										<VStack
											space={{
												base: "7",
												md: "4",
											}}
										>
											<FloatingLabelInput
												isRequired
												label="Email"
												labelColor="#9ca3af"
												labelBGColor={useColorModeValue("#fff", "#1f2937")}
												borderRadius="4"
												defaultValue={username}
												onChangeText={(text) => setUsername(text)}
												_text={{
													fontSize: "sm",
													fontWeight: "medium",
												}}
												_dark={{
													borderColor: "coolGray.700",
												}}
												_light={{
													borderColor: "coolGray.300",
												}}
											/>
											<FloatingLabelInput
												isRequired
												label="Confirmation Code"
												labelColor="#9ca3af"
												labelBGColor={useColorModeValue("#fff", "#1f2937")}
												borderRadius="4"
												defaultValue={authCode}
												onChangeText={(text) => setAuthCode(text)}
												keyboardType="numeric"
												_text={{
													fontSize: "sm",
													fontWeight: "medium",
												}}
												_dark={{
													borderColor: "coolGray.700",
												}}
												_light={{
													borderColor: "coolGray.300",
												}}
											/>
										</VStack>

										<FormControl.HelperText mt="7">
											<HStack>
												<Text
													_light={{
														color: "coolGray.800",
													}}
													_dark={{
														color: "coolGray.400",
													}}
												>
													Didn’t receive the OTP?
												</Text>
												<Link
													_text={{
														_light: {
															color: "primary.900",
														},
														_dark: {
															color: "violet.500",
														},
														fontWeight: "bold",
														color: "violet.700",
														textDecoration: "none",
													}}
												>
													{" "}
													RESEND OTP
												</Link>
											</HStack>
										</FormControl.HelperText>
									</FormControl>
									{/* Opening Link Tag navigateTo:"SignUp" (react/Router) */}
									<Button
										size="md"
										_light={{
											bg: "primary.900",
										}}
										_dark={{
											bg: "primary.700",
										}}
										onPress={confirmSignUp}
									>
										CONFIRM SIGN UP
									</Button>
									{/* Closing Link Tag */}
								</VStack>
							</Box>
							<HStack
								mt="28"
								mb="4"
								space="1"
								safeAreaBottom
								alignItems="center"
								justifyContent="center"
							>
								<Text
									_light={{
										color: "coolGray.800",
									}}
									_dark={{
										color: "coolGray.400",
									}}
								>
									Already have an account?
								</Text>
								{/* Opening Link Tag navigateTo:"SignUp" */}
								<Link
									_text={{
										fontWeight: "bold",
										textDecoration: "none",
									}}
									_light={{
										_text: {
											color: "primary.900",
										},
									}}
									_dark={{
										_text: {
											color: "violet.500",
										},
									}}
									onPress={() => {
										props.navigation.navigate("SignUp");
									}}
								>
									Sign up
								</Link>
								{/* Closing Link Tag */}
							</HStack>
						</VStack>
					</Box>
				</Stack>
			</Center>
		</>
	);
}
