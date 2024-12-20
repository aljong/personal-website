/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                primary: {
                    light: '#B2EBF2', // Light blue
                    DEFAULT: '#00BCD4', // Default blue
                    dark: '#0097A7', // Dark blue
                },
                accent: {
                  light: '#85bbc1', // Light bluegray
                  DEFAULT: '#607D8B', // bluegray
                  dark: '#406172', // Dark bleugray
                },
                primaryText: '#212121',         
                secondaryText: '#757575',
                dividerColor: '#BDBDBD',
                veryWhite: '#FFFFFF',
                customGray: {
                  100: '#F3F4F6',
                  200: '#E5E7EB',
                  300: '#D1D5DB',
                  400: '#9CA3AF',
                  500: '#6B7280',
                  600: '#4B5563',
                  700: '#374151',
                  800: '#1F2937',
                  900: '#111827',
                },
              },
            },
          },
	plugins: [],
}
