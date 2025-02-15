import { FC, PropsWithChildren } from 'react'
import { Pressable, Text } from 'react-native'

import { IButton } from './Button.iterface'

const Auth: FC<PropsWithChildren<IButton>> = ({ children , className, ...rest}) => {
	return (
		<Pressable>
			<Text>{children}</Text>
		</Pressable>
	)
}

export default Auth
