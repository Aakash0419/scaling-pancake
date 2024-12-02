import type { Config } from "tailwindcss";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        zentry:['zentry','sans-serif'],
        general:['general','sans-serif'],
        'robert-medium':['robert-medium','sans-serif'],
        'robert-regular':['robert-regular','san-serif'],
        'circular-web':['circular-web','san-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: {
          50:'#DFDFF0',
          75:'#DFDFF2',
          100:'#F0F2FA',
          200:'#010101',
          300:'#4FB7DD',
        },
        violet:{
          300:'#5f5dc7',
        },
        yellow:{
          100:'#8E983F',
          300: '#EDFF66'
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
