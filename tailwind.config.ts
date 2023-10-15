import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'fi-white': '#F5FFEB',
        'fi-primary': '#D2FFAA',
        'fi-secondary': '#638942',
        'fi-button': '#D17A22',
        'fi-darker': "#032",
        'fi-midnight': "#023C40",
        'fi-rose': "#C3979F",
        'fi-van': "#473335",
        'fi-zomp': "#439A86",
        'fi-indred': "#E65F5C"
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }

        '3xl': '1920px',
        // => @media (min-width: 1920px) { ... }
      },

      backgroundImage: {
        
      },
    },
  },
  plugins: [require("daisyui")],
}
export default config
