import { FC } from 'react'
import { Image, View } from 'react-native'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading'
import Button from '@/components/ui/button/Button'

import { useAuth } from '@/hooks/useAuth'

import { AuthService } from '@/services/auth/auth.service'

import { useProfile } from './useProfile'

const Profile: FC = () => {
	const { setUser } = useAuth()

	const { profile } = useProfile()

	return (
		<Layout>
			<Heading isCenter>Profile</Heading>
			<View className='my-6 items-center justify-center'>
				<Image
					source={{ uri: profile?.avatarPath }}
					className='w-40 h-40 rounded-full'
				/>
				<Button
					onPress={() => {
						// Вызываем logout как функцию
						AuthService.logout()
							.then(() => setUser(null)) // После успешного выхода очищаем пользователя
							.catch(error => {
								// Обрабатываем возможные ошибки
								console.error('Ошибка при выходе:', error)
							})
					}}
				>
					Logout
				</Button>
			</View>
		</Layout>
	)
}

export default Profile
