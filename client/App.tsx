import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Navigation from '@/navigation/Navigation'

export default function App() {
	return (
		<>
			<SafeAreaProvider>
				<Navigation />
			</SafeAreaProvider>
			<StatusBar style='light' />
		</>
	)
}

// export default function App() {
// 	return (
// 		<View style={styles.container}>
// 			<Text style={styles.text}>Я люблю Катеньку Марченко</Text>
// 			<Home />
// 			<StatusBar style='auto' />
// 		</View>
// 	)
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#fff',
// 		alignItems: 'center',
// 		justifyContent: 'center'
// 	},
// 	text: {
// 		color: 'red',
// 		fontSize: 40
// 	}
// })
