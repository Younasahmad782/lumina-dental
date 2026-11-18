import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { deep:"#123D40", teal:"#2A7775", cream:"#F8F7F2", sage:"#DCE9E3", ink:"#202A2A", champagne:"#C7AD83" },
    fontFamily: { serif:["var(--font-serif)","Georgia","Cambria","serif"], sans:["var(--font-sans)","system-ui","Segoe UI","Roboto","sans-serif"] },
  } },
  plugins: [],
};
export default config;
