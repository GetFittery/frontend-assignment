import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bittersweet: {
          100: "#FEEADD",
          200: "#FDAEAE",
          400: "#FD8478",
          500: "#FC6363",
        },
        jasmine: {
          100: "#FDF9EA",
          200: "#FAE9AC",
          500: "#F7DD80",
        },
        verdigris: {
          100: "#B4E9EA",
          200: "#82D9DC",
          500: "#05B4B9",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
