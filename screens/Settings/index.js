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

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Auth } from "aws-amplify";

export default function Settings({ navigation, updateAuthState }) {
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
										Settings
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
											onPress={() => {}}
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
									Categories
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
							<Pressable mb="1" onPress={() => console.log("pressed")}>
								{({ isHovered, isFocused, isPressed }) => {
									return (
										<Box
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
											<Text
												color="coolGray.800"
												mt="3"
												fontWeight="medium"
												fontSize="xl"
											>
												Exercise
											</Text>
										</Box>
									);
								}}
							</Pressable>
							<Button maxW="40" bg="red.400" onPress={signOut}>
								Sign Out
							</Button>
						</VStack>
					</KeyboardAwareScrollView>
				</Stack>
			</Center>
		</>
	);
}
