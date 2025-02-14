import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const Auth: FC = () => {
	const navigation = useTypedNavigation()
	return (
		<View>
			<Text>Auth</Text>
			<Pressable onPress={() => navigation.navigate('Home')}>
				<Text>Go to Home</Text>
			</Pressable>
		</View>
	)
}

export default Auth
