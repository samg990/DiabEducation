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
	Spacer,
	useToast,
} from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";

import IconGoogle from "./components/IconGoogle";
import IconFacebook from "./components/IconFacebook";
import FloatingLabelInput from "./components/FloatingLabelInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Auth } from "aws-amplify";

export default function SignIn({ navigation, updateAuthState }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showPass, setShowPass] = React.useState(false);

	const toast = useToast();

	async function signIn() {
		try {
			await Auth.signIn(username, password);

			console.log(" Success");

			updateAuthState("loggedIn");
		} catch (error) {
			console.log(" Error signing in...", error);

			if (error == "UserNotFoundException: User does not exist.") {
				toast.show({
					title: "Email is not registered",
					status: "warning",
					description: "Please register by clicking SIGN UP",
				});
			} else if (error == "AuthError: Username cannot be empty") {
				toast.show({
					title: "Email cannot be empty",
					status: "warning",
					description: "Please enter a valid Email",
				});
			} else if (
				error == "NotAuthorizedException: Incorrect username or password."
			) {
				toast.show({
					title: "Incorrect username or password",
					status: "warning",
					description: "Please enter a valid Email or Password",
				});
			}
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
						<VStack px="2" mt="4" mb="2" space="2">
							<HStack space="2" alignItems="center">
								{/* <IconButton
									variant="unstyled"
									pl="0"
									onPress={() => {}}
									icon={
										<Icon
											size="6"
											as={AntDesign}
											name="arrowleft"
											color="coolGray.50"
										/>
									}
								/> */}
								{/* <Text color="coolGray.50" fontSize="lg">
									Sign In
								</Text> */}
							</HStack>
							<VStack alignContent="center" alignItems="center">
								<Image
									source={require("../../assets/Diab.png")}
									alt="DiabLogo"
									size={200}
									borderRadius={100}
									resizeMode={"cover"}
								/>
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
									Sign In
								</Text> */}
							</VStack>
						</VStack>
					</Hidden>
					<Hidden till="md">
						<Center
							flex="1"
							bg="primary.700"
							borderTopLeftRadius={{
								base: "0",
								md: "xl",
							}}
							borderBottomLeftRadius={{
								base: "0",
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
					<KeyboardAwareScrollView
						contentContainerStyle={{
							flexGrow: 1,
						}}
						style={{
							flex: 1,
						}}
					>
						<VStack
							flex="1"
							px="6"
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
							<VStack space="7">
								<Hidden till="md">
									<Text fontSize="lg" fontWeight="normal">
										Sign in to continue!
									</Text>
								</Hidden>
								<VStack>
									<VStack space="3">
										<Text
											fontSize="md"
											fontWeight="bold"
											_dark={{
												color: "coolGray.400",
											}}
											_light={{
												color: "primary.800",
											}}
										>
											Sign in to continue
										</Text>
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
												type={showPass ? "" : "password"}
												label="Password"
												borderRadius="4"
												labelColor="#9ca3af"
												labelBGColor={useColorModeValue("#fff", "#1f2937")}
												defaultValue={password}
												onChangeText={(text) => setPassword(text)}
												InputRightElement={
													<IconButton
														variant="unstyled"
														icon={
															<Icon
																size="4"
																color="coolGray.400"
																as={Entypo}
																name={showPass ? "eye-with-line" : "eye"}
															/>
														}
														onPress={() => {
															setShowPass(true);
														}}
													/>
												}
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
										<Link
											ml="auto"
											_text={{
												fontSize: "xs",
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
													color: "primary.500",
												},
											}}
										>
											Forgot password?
										</Link>
										<Checkbox
											alignItems="flex-start"
											mt="5"
											isChecked
											value="demo"
											colorScheme="primary"
											accessibilityLabel="Remember me"
										>
											<Text
												pl="3"
												fontWeight="normal"
												_light={{
													color: "coolGray.800",
												}}
												_dark={{
													color: "coolGray.400",
												}}
											>
												Remember me and keep me logged in
											</Text>
										</Checkbox>
										{/* Opening Link Tag navigateTo:"OTP" (react/Router) */}
										<Button
											mt="5"
											size="md"
											borderRadius="4"
											_text={{
												fontWeight: "medium",
											}}
											_light={{
												bg: "primary.900",
											}}
											_dark={{
												bg: "primary.700",
											}}
											onPress={signIn}
										>
											SIGN IN
										</Button>
										<Spacer />
										<Text
											_light={{
												color: "coolGray.800",
											}}
											_dark={{
												color: "coolGray.400",
											}}
										>
											Don't have an account?
										</Text>
										<Button
											mt="5"
											size="md"
											borderRadius="4"
											_text={{
												fontWeight: "medium",
											}}
											_light={{
												bg: "coolGray.300",
											}}
											_dark={{
												bg: "primary.400",
											}}
											onPress={() => {
												navigation.navigate("SignUp");
											}}
										>
											SIGN UP
										</Button>
										{/* Closing Link Tag */}
										<HStack
											mt="5"
											space="2"
											mb={{
												base: 6,
												md: 7,
											}}
											alignItems="center"
											justifyContent="center"
										>
											<Divider
												w="30%"
												_light={{
													bg: "coolGray.200",
												}}
												_dark={{
													bg: "coolGray.700",
												}}
											></Divider>
											<Text
												fontWeight="medium"
												_light={{
													color: "coolGray.300",
												}}
												_dark={{
													color: "coolGray.500",
												}}
											>
												or
											</Text>
											<Divider
												w="30%"
												_light={{
													bg: "coolGray.200",
												}}
												_dark={{
													bg: "coolGray.700",
												}}
											></Divider>
										</HStack>
									</VStack>
									<Center>
										<HStack space="4">
											<Pressable>
												<IconFacebook />
											</Pressable>
											<Pressable>
												<IconGoogle />
											</Pressable>
										</HStack>
									</Center>
								</VStack>
							</VStack>
							{/* <HStack
								mb="4"
								space="1"
								safeAreaBottom
								alignItems="center"
								justifyContent="center"
								mt={{
									base: "auto",
									md: "8",
								}}
							>
								<Text
									_light={{
										color: "coolGray.800",
									}}
									_dark={{
										color: "coolGray.400",
									}}
								>
									Don't have an account?
								</Text>
								{/* Opening Link Tag navigateTo:"SignUp" */}
							{/* <Link
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
											color: "primary.500",
										},
									}}
									onPress={() => {
										navigation.navigate("SignUp");
									}}
								>
									Sign up
								</Link> */}
							{/* Closing Link Tag */}
							{/* </HStack> */}
						</VStack>
					</KeyboardAwareScrollView>
				</Stack>
			</Center>
		</>
	);
}
