import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Text, View } from 'react-native'

import Loader from '@/components/ui/Lodaer'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { IAuthFormData } from '@/types/user.interface'

const Auth: FC = () => {
	const navigation = useTypedNavigation()

	const [isReg, setIsReg] = useState(false)

	const { handleSubmit, reset, control } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const omSubmit: SubmitHandler<IAuthFormData> = data => {
		console.log(data)
	}

	const isLoading = false

	return (
		<View className='mx-2 items-center justify-center h-full'>
			<View className='w-9/12'>
				<Text className='text-center text-red text-3xl font-medium mb-8'>
					{isReg ? 'Sign up' : 'sign in'}
				</Text>
				{isLoading ? <Loader /> : <>
				
				</>}
			</View>
		</View>
	)
}

export default Auth
