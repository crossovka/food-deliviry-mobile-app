import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.setGlobalPrefix('api')
	app.enableCors()

	const port = process.env.PORT ?? 4200
	const host = 'http://192.168.122.35' // Замените на актуальный IP
	const baseUrl = `${host}:${port}/api`

	console.log(`Server is running at ${baseUrl}`) // Логирование URL

	await app.listen(port)
}
bootstrap()
