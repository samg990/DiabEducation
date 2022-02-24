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
} from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Auth } from "aws-amplify";

export default function TreatmentOptions({ navigation }) {
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
									<Text fontSize="3xl" fontWeight={500} color="coolGray.50">
										Understanding Diabetes
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
						<KeyboardAwareScrollView
							contentContainerStyle={{
								flexGrow: 1,
							}}
							style={{
								flex: 1,
							}}
						>
							<Heading fontWeight={600} color="#fad161">
								Introduction
							</Heading>
							<Text fontWeight={500} color="white">
								Whether you’ve been newly diagnosed, have been fighting against
								type 1 or type 2 diabetes for a while, or are helping a loved
								one, you’ve come to the right place. This is the start of
								gaining a deeper understanding of how you can live a healthier
								life—with all the tools, health tips, and food ideas you need.
								Wherever you’re at with your diabetes, know that you have
								options and that you don’t have to be held back. You can still
								live your best life. All you have to do is take action and stick
								with it.{" "}
							</Text>
							<Heading fontWeight={600} color="#fad161">
								Understanding type 1
							</Heading>
							<Text fontWeight={500} color="white">
								Here’s what you need to know about type 1 diabetes. Type 1
								diabetes occurs at every age and in people of every race, shape,
								and size. There is no shame in having it, and you have a
								community of people ready to support you. Learning as much as
								you can about it and working closely with your diabetes care
								team can give you everything you need to thrive. In type 1
								diabetes, the body does not produce insulin. The body breaks
								down the carbohydrates you eat into blood sugar (blood glucose)
								that it uses for energy—and insulin is a hormone that the body
								needs to get glucose from the bloodstream into the cells of the
								body. With the help of insulin therapy and other treatments,
								everyone can learn to manage their condition and live long,
								healthy lives. Remember: this is a condition that can be
								managed. By living a healthy lifestyle filled with exercise and
								proper diet, you can live a normal life and do everything you
								set out to do.
							</Text>
							<Heading fontWeight={600}>Understanding type 2</Heading>
							<Text fontWeight={500}>
								Type 2 diabetes is the most common form of diabetes—and it means
								that your body doesn’t use insulin properly. And while some
								people can control their blood sugar levels with healthy eating
								and exercise, others may need medication or insulin to help
								manage it. Regardless, you have options—and we're here with the
								tools, resources, and support you need. A key part of managing
								type 2 diabetes is maintaining a healthy diet. You need to eat
								something sustainable that helps you feel better and still makes
								you feel happy and fed. Remember, it’s a process. Work to find
								helpful tips and diet plans that best suit your lifestyle—and
								how you can make your nutritional intake work the hardest for
								you. Fitness is another key to managing type 2. And the good
								news, all you have to do is get moving. The key is to find
								activities you love and do them as often as you can. No matter
								how fit you are, a little activity every day can help you put
								yourself in charge of your life.
							</Text>
						</KeyboardAwareScrollView>
					</Box>
				</Stack>
			</Center>
		</>
	);
}
