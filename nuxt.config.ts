// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    plugins:['@/plugins/antd', '@/plugins/i18n'],
	modules: [
		'@vueuse/nuxt',
		'@nuxtjs/color-mode',
	],
	app: {
		head: {
			htmlAttrs: {
				lang: 'fr'
			},
			title: "Michaud Developpement Informatique",
			meta: [
				{ name: 'description', content: "Ayant suivi la formation de l'école Epitech (actuellement en 5ième année), je suis animé des technologies web et possède de larges compétences en C, CPP, Javascript et VueJS." },
			]
		}
	},
	runtimeConfig: {
        public: {
            emailServiceId: process.env.EMAIL_SERVICE_ID,
            emailTemplateId: process.env.EMAIL_TEMPLATE_ID,
            emailPublicKey: process.env.EMAIL_PUBLIC_KEY,
        }
	},
})
