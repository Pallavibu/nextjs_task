import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container : {
        center: true,
        padding: "15px" 
      },
      colors:{
        yellow : "#E1C300",
        brown : "#212122"
        
      }
    },
  },
  plugins: [],
}
export default config
