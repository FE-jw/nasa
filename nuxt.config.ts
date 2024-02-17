// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  	devtools: { enabled: true },
  	app: {
		head: {
			title: 'NASA',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover' },
				{ name: 'format-detection', content: 'telephone=no' }
			]
		}
	},
	css: ['@/assets/reset.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					// additionalData: '@import "@/assets/_var";'
				},
			},
		},
	},
	modules: ['@pinia/nuxt'],
	srcDir: 'src/'
})
