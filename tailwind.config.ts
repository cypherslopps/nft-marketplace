import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xsl: "375px",
      xl: "450px",
      xls: "470px",
      "sm-md": "600px",
      sm: "640px",
      xlss: "550px",
      md: "768px",
      lx: "850px",
      ls: "900px",
      lss: "970px",
      lg: "1024px"
    },
    extend: {
      fontSize: {
        md: [".94rem", "1.3"],
        ms: [".92rem", "1.1"],
        xs: [".75rem", "1.2"]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
