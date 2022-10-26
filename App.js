import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GetRegisterScreen from './GetRegisterScreen.js';
import ChangePasswordScreen from './ChangePasswordScreen.js';
import LoginScreen from './LoginScreen.js';
import MainMenuScreen from './MainMenuScreen.js';
import RegistrationScreen from './RegistrationScreen.js';
import SettingScreen from './SettingScreen.js';
import LanguagesScreen from './LanguagesScreen.js';
import ChatsScreen from './ChatsScreen.js';
import CallsScreen from './CallsScreen.js';
import StartNewCallScreen from './StartNewCallScreen.js';
import StartNewChatScreen from './StartNewChatScreen.js';

import MessagesScreen from './MessagesScreen.jsx';

const Stack = createNativeStackNavigator();

export default function App(props) {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: true, headerTintColor: "white", headerStyle: {backgroundColor: 'blue'} }}>
				<Stack.Screen name='GetRegisterScreen' component={GetRegisterScreen} />
				<Stack.Screen
					name='ChangePasswordScreen'
					component={ChangePasswordScreen}
				/>
				<Stack.Screen name='LoginScreen' component={LoginScreen} />
				<Stack.Screen name='MainMenuScreen' component={MainMenuScreen} />
				<Stack.Screen
					name='RegistrationScreen'
					component={RegistrationScreen}
				/>
				<Stack.Screen name='SettingScreen' component={SettingScreen} />
				<Stack.Screen name='LanguagesScreen' component={LanguagesScreen} />
				<Stack.Screen name='ChatsScreen' component={ChatsScreen} />
				<Stack.Screen name='CallsScreen' component={CallsScreen} />
				<Stack.Screen
					name='StartNewCallScreen'
					component={StartNewCallScreen}
				/>
				<Stack.Screen
					name='StartNewChatScreen'
					component={StartNewChatScreen}
				/>
				<Stack.Screen
					name='MessagesScreen'
					component={MessagesScreen}
					options={({ route }) => ({ title: route.params.userName })}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
