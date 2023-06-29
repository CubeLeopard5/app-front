// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    plugins:['@/plugins/antd'],
	modules: [
		'@pinia/nuxt',
		'@pinia-plugin-persistedstate/nuxt',
	],
	runtimeConfig: {
        public: {
            baseUrl: process.env.BACKEND_ADDR || 'http://localhost:8000',
        }
	},
})
