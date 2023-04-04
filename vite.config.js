import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		port: 3000,
		proxy: {
			'/api': {
				target: 'http://localhost:8000',
				rewrite: (path) => path.replace(/^\/api/, ''),
				changeOrigin: true,
				secure: false,
				ws: true,
			},
		},
	},
}

export default config
