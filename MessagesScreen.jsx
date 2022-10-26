import React, {
	useEffect,
	useCallback,
	useState,
	useLayoutEffect,
} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Avatar } from 'react-native-elements';
import { GiftedChat } from 'react-native-gifted-chat';
import SingleMessage from './SingleMessage';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MessagesScreen = ({ route, navigation }) => {
	const userName = route.params;
	const [messages, setMessages] = useState([]);
	const signOutNow = () => {
		console.log('OUT');
	};
	useLayoutEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<TouchableHighlight
					style={{ marginRight: 20, backgroundColor: 'blue' }}
					onPress={() => navigation.pop()}
				>
					<MaterialCommunityIcons
						name='chevron-left'
						color={'white'}
						size={30}
					/>
				</TouchableHighlight>
			),
			headerRight: () => (
				<View
					style={{
						marginRight: 10,
						backgroundColor: 'blue',
					}}
				>
					{/* <TouchableOpacity> */}
					<MaterialCommunityIcons
						name='android-messages'
						color={'white'}
						size={40}
					/>
					<Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
						Chats
					</Text>
					{/* </TouchableOpacity> */}
				</View>
			),
		});
	}, [navigation]);

	useEffect(() => {
		console.log(userName.userName);
		setMessages([
			{
				_id: 1,
				text: 'Hello developer',
				createdAt: new Date(),
				user: {
					_id: 2,
					name: 'React Native',
					avatar: 'https://placeimg.com/140/140/any',
				},
			},
		]);
	}, []);
	const onSend = useCallback((messages = []) => {
		setMessages((previousMessages) =>
			GiftedChat.append(previousMessages, messages),
		);
	}, []);
	return (
		<GiftedChat
			messages={messages}
			// renderMessage={SingleMessage}
			showAvatarForEveryMessage={true}
			onSend={(messages) => onSend(messages)}
			user={{
				_id: 'uihjk',
				name: 'uihjk',
				avatar: 'uihjk',
			}}
		/>
	);
};

export default MessagesScreen;
