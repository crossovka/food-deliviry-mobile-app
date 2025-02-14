import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	Auth: undefined
	Home: undefined
	// Category: {
	// 	slug: string
	// }
}

export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType
}
