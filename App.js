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
import LottieView from "lottie-react-native";

Amplify.configure(config);

const theme = extendTheme({
	colors: {
		primary: nbTheme.colors.warmGray,
	},
	fontConfig: {
		Lobster: {
			100: {
				normal: "Lobster-Regular",
				italic: "Lobster-Regular",
			},
			200: {
				normal: "NewsCycle-Regular",
				italic: "NewsCycle-Bold",
			},
			300: {
				normal: "Comfortaa-Light",
				italic: "Comfortaa-SemiBold",
			},
			400: {
				normal: "Comfortaa-Medium",
				italic: "Comfortaa-Bold",
			},
			500: {
				normal: "Courgette-Regular",
				italic: "Courgette-Regular",
			},
		},
	},

	// Make sure values below matches any of the keys in `fontConfig`
	fonts: {
		heading: "Lobster",
		body: "Lobster",
		mono: "Lobster",
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
export const LoadLottie = () => {
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
					width: 200,
					height: 200,
				}}
				source={require("./assets/lottie/loadLottie.json")}
			/>
		</View>
	);
};

const Initializing = () => {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<LoadLottie />
		</View>
	);
};

const transitionConfig = {
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

const forFade = ({ current }) => ({
	cardStyle: {
		opacity: current.progress,
	},
});

const AppNavigator = (props) => {
	return (
		<AppStack.Navigator
			screenOptions={({ route, navigation }) => ({
				headerShown: false,
				gestureEnabled: true,
				cardStyleInterpolator: forFade,
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
		"Comfortaa-Bold": require("./assets/fonts/Comfortaa-Bold.ttf"),
		"Comfortaa-Medium": require("./assets/fonts/Comfortaa-Medium.ttf"),
		"Comfortaa-Light": require("./assets/fonts/Comfortaa-Light.ttf"),
		"Comfortaa-SemiBold": require("./assets/fonts/Comfortaa-SemiBold.ttf"),
		"Courgette-Regular": require("./assets/fonts/Courgette-Regular.ttf"),
		"Lobster-Regular": require("./assets/fonts/Lobster-Regular.ttf"),
		"NewsCycle-Bold": require("./assets/fonts/NewsCycle-Bold.ttf"),
		"NewsCycle-Regular": require("./assets/fonts/NewsCycle-Regular.ttf"),
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
