import { defineStore } from 'pinia';

interface RequestObject {
    accessToken: boolean;
	endpoint: string,
	method: string,
	type?: string,
	body?: string | FormData,
}

export const useMainStore = defineStore({
	id: 'main-store',
	state: () => {
		return {
			accessToken: "",
			themes: {
				light: {
					primary: 'white',
					secondary: '#f0f2f5',
					tertiary: '#0f6a08',
					text: 'black',
				},
				dark: {
					primary: 'black',
					secondary: '#28282B',
					tertiary: '#0f6a08',
					text: 'white',
				},
				selected: 'light'
			}
		}
	},
	actions: {
		async sendSafeRequestToServer(obj: RequestObject) {
			let headers = {
				"x-access-token": (obj.accessToken) ? `${this.accessToken}` : '',
			};
			if (!obj.type || obj.type != "multipart/form-data") {
				headers['Accept'] = 'application/json';
				headers['Content-Type'] = 'application/json';
			}
			const url = useRuntimeConfig().public.baseUrl;
			return fetch(`${url}/${obj.endpoint}`, {
				method: obj.method,
				headers: headers,
				body: obj.body,
			}).then(response => response.json());
		},
		setAccessToken(token: string) {
			this.accessToken = token;
		},
	},
	getters: {},
	persist: {
		storage: persistedState.localStorage,
	},
})