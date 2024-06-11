/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "flowbite-react/tailwind",
  ],
  theme: {
    extend: {
      height: {
        "full-minus-4.25rem": "calc(100vh - 4.25rem)",
      },
      spacing: {
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["flowbite-react/tailwind"],
};
