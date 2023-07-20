// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    plugins:['@/plugins/antd', '@/plugins/i18n'],
	modules: [
		'@vueuse/nuxt',
		'@nuxtjs/color-mode',
	]
})
