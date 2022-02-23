import React, { useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { NativeBaseProvider, extendTheme, theme as nbTheme } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
	createStackNavigator,
	TransitionPresets,
} from "@react-navigation/stack";
import StarterIntro from "./screens/StarterIntro";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import OTP from "./screens/OTP";

import Amplify, { Auth } from "aws-amplify";
import Home from "./screens/Home";

import config from "./src/aws-exports";
import ProductScreen from "./screens/ProductScreen";
import Settings from "./screens/Settings";
import TreatmentOptions from "./screens/Home/TreatmentOptions";
import UnderstandingDia from "./screens/Home/TreatmentOptions/UnderstandingDia";
import { useFonts } from "@use-expo/font";
import AppLoading from "expo-app-loading";

Amplify.configure(config);

const theme = extendTheme({
	colors: {
		primary: nbTheme.colors.warmGray,
	},
	fontConfig: {
		BalsamiqSans: {
			100: {
				normal: "BalsamiqSans-Regular",
				italic: "BalsamiqSans-Italic",
			},
			200: {
				normal: "BalsamiqSans-Regular",
				italic: "BalsamiqSans-Italic",
			},
			300: {
				normal: "BalsamiqSans-Regular",
				italic: "BalsamiqSans-Italic",
			},
			400: {
				normal: "BalsamiqSans-Regular",
				italic: "BalsamiqSans-Italic",
			},
			500: {
				normal: "BalsamiqSans-Regular",
			},
			600: {
				normal: "BalsamiqSans-Italic",
				italic: "BalsamiqSans-Italic",
			},
			// Add more variants
			//   700: {
			//     normal: 'Roboto-Bold',
			//   },
			//   800: {
			//     normal: 'Roboto-Bold',
			//     italic: 'Roboto-BoldItalic',
			//   },
			//   900: {
			//     normal: 'Roboto-Bold',
			//     italic: 'Roboto-BoldItalic',
			//   },
		},
	},

	// Make sure values below matches any of the keys in `fontConfig`
	fonts: {
		heading: "BalsamiqSans-Bold",
		body: "BalsamiqSans-Regular",
		mono: "BalsamiqSans-Regular",
	},
});

const AuthenticationStack = createStackNavigator();

const AppStack = createStackNavigator();

const AuthenticationNavigator = (props) => {
	return (
		<AuthenticationStack.Navigator
			screenOptions={({ route, navigation }) => ({
				headerShown: false,
				gestureEnabled: true,
				...TransitionPresets.SlideFromRightIOS,
			})}
		>
			<AuthenticationStack.Screen name="SignIn">
				{(screenProps) => (
					<SignIn {...screenProps} updateAuthState={props.updateAuthState} />
				)}
			</AuthenticationStack.Screen>

			<AuthenticationStack.Screen name="SignUp" component={SignUp} />
			<AuthenticationStack.Screen name="OTP" component={OTP} />
		</AuthenticationStack.Navigator>
	);
};

const Initializing = () => {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<ActivityIndicator size="large" color="black" />
		</View>
	);
};

const configScreen = {
	animation: "spring",
	config: {
		stiffness: 1000,
		damping: 500,
		mass: 3,
		overshootClamping: true,
		restDisplacementThreshold: 0.01,
		restSpeedThreshold: 0.01,
	},
};

const AppNavigator = (props) => {
	return (
		<AppStack.Navigator
			screenOptions={({ route, navigation }) => ({
				headerShown: false,
				gestureEnabled: true,
				...TransitionPresets.SlideFromRightIOS,
			})}
		>
			<AppStack.Screen name="Home">
				{(screenProps) => (
					<Home {...screenProps} updateAuthState={props.updateAuthState} />
				)}
			</AppStack.Screen>
			<AppStack.Screen name="Settings">
				{(screenProps) => (
					<Settings {...screenProps} updateAuthState={props.updateAuthState} />
				)}
			</AppStack.Screen>
			<AppStack.Screen name="ProductsScreen" component={ProductScreen} />
			<AppStack.Screen name="TreatmentOptions" component={TreatmentOptions} />
			<AppStack.Screen name="UnderstandingDia" component={UnderstandingDia} />
		</AppStack.Navigator>
	);
};

export default function App() {
	const [isUserLoggedIn, setUserLoggedIn] = useState("initializing");

	const [isLoaded] = useFonts({
		"BalsamiqSans-Bold": require("./assets/fonts/BalsamiqSans-Bold.ttf"),
		"BalsamiqSans-Regular": require("./assets/fonts/BalsamiqSans-Regular.ttf"),
		"BalsamiqSans-Bold-Italic": require("./assets/fonts/BalsamiqSans-Italic.ttf"),
		"BalsamiqSans-BoldItalic": require("./assets/fonts/BalsamiqSans-BoldItalic.ttf"),
	});

	useEffect(() => {
		checkAuthState();
	}, []);

	async function checkAuthState() {
		try {
			await Auth.currentAuthenticatedUser();

			console.log(" User is signed in");

			setUserLoggedIn("loggedIn");
		} catch (err) {
			console.log(" User is not signed in");

			setUserLoggedIn("loggedOut");
		}
	}

	function updateAuthState(isUserLoggedIn) {
		setUserLoggedIn(isUserLoggedIn);
	}

	if (!isLoaded) {
		return <AppLoading />;
	} else {
		return (
			<NativeBaseProvider theme={theme}>
				<NavigationContainer>
					{isUserLoggedIn === "initializing" && <Initializing />}

					{isUserLoggedIn === "loggedIn" && (
						<AppNavigator updateAuthState={updateAuthState} />
					)}

					{isUserLoggedIn === "loggedOut" && (
						<AuthenticationNavigator updateAuthState={updateAuthState} />
					)}
				</NavigationContainer>
			</NativeBaseProvider>
		);
	}
}

{
	/* <NavigationContainer>
<Drawer.Navigator screenOptions={{ headerShown: false }}>
<Drawer.Screen name={"SignIn"} component={SignIn} />
<Drawer.Screen name={"SignUp"} component={SignUp} />
<Drawer.Screen name={"Home"} component={Home} />
<Drawer.Screen name={"ProductScreen"} component={ProductScreen} />
</Drawer.Navigator>
</NavigationContainer> */
}
