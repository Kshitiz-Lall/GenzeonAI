export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        fadeSilver: "#f5f7fa",
        fadeGrey: "#4d4d4d",
        primaryBlue: "#3c49c2",
        primaryBlueDark: "#2e3894",
        neutralGrey: "#717171",
        grey900: "#18191f",
        lightBlue: "#e8f1ff", // Light Blue
        ClinicalnlpColor: "#4A3AFF",
        BiomedicalnlpColor: "#28235C",
        HealthcarenlpColor: "#5E00FF",
        GenexpressionnlpColor: "#008AED",
        darkBlue: "#00008b",   // Dark Blue
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
