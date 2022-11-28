/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "orange-light": "#f3eee9",
        "red-orange-dark": "#201c1b",
        blue: "#1a64fb",
        "blue-dark": "#002b78",
        red: "#e32e2b",
        yellow: "#ffd33f",
        "gray-light": "#e6e6e6",
        "gray-medium": "#9e9d9c",
        "gray-dark": "#454545",
      },
      fontFamily: {
        chikara: ["chikara", "sans-serif"],
        huninn: ["huninn", "sans-serif"],
        KFhimaji: ["KFhimaji", "sans-serif"],
      },
      backgroundImage: {
        /* path is relative to entry js file */
        "intro-pad": "url('./assets/intro-pad.png')",
        "task-pad": "url('./assets/task-pad.png')",
        po: "url('./assets/role-po.png')",
        user: "url('./assets/role-user.png')",
      },
      borderWidth: {
        3: "3px",
      },
      borderRadius: {
        l: "10px",
        "2.5xl": "20px",
      },
      gridTemplateRows: {
        "start-layout": "auto 1fr auto",
        "task-layout": "auto 1fr",
      },
    },
  },
  plugins: [],
};
