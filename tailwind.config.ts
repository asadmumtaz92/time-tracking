import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            keyframes: {
                scroll: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-100%)" },
                },
                "background-shine": {
                    from: {
                        backgroundPosition: "0 0",
                    },
                    to: {
                        backgroundPosition: "-200% 0",
                    },
                },
            },
            animation: {
                scrollingLogo: "scroll 500s linear infinite",
                "background-shine": "background-shine 2s linear infinite",
            },
            colors: {
                'bg': '#FDFDFD',
                'primary': "#11005E",
                'desc': '#5D5677',
                'box': '#F9F9FA',
                'box-strok': '#EDEDEE',
                'border': '#EDEDEE',
                'divider': '#E8E7EE',
            },
            fontFamily: {
                epilogue: ['var(--font-epilogue)'],
                impact: ['var(--font-impact)'],
            },
        },
    },
    plugins: [],
}

export default config
