import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [
    // Add presets here...
    presetUno(),
  ],
  shortcuts: {
    // btn: "py-2 px-4 font-semibold rounded-lg shadow-md",
    // "btn-primary": "btn bg-blue-500 hover:bg-blue-700 text-white",
    // "bg-custom-black":
    //   "bg-[linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(24,24,24,1) 20%, rgba(7,7,7,1) 34%, rgba(13,13,13,1) 66%, rgba(33,33,33,1) 80%, rgba(86,86,86,1) 100%)]",
  },
  rules: [["bg-fixed", { "background-attachment": "fixed" }]],
  theme: {
    colors: {
      primary: "rgb(246, 230, 213)", // #f6e6d5
      secondary: "rgb(84, 44, 0)", // #542c00
      tertiary: "rgb(255, 207, 153)", // #ffcf99
      success: "rgb(156, 255, 153)", // #9cff99
      danger: "rgb(255, 153, 153)", // #ff9999
      warning: "rgb(153, 124, 92)", // #997c5c
      info: "rgb(218, 241, 255)", // #daf1ff
      light: "rgb(244, 234, 223)", // #f4eadf
      lighter: "rgb(249, 244, 239)", // #f9f4ef
      grey: "rgb(74, 74, 74)",
      dark: "rgb(43, 23, 0)", // #2b1700
      darker: "rgb(32, 17, 0)", // #201100
      darkest: "rgb(13, 13, 13)", // #0D0D0D
      "bg-custom-black": "#0D0D0D",
    },
    fontFamily: {
      caveat: "Caveat, cursive",
      ibm: "IBM Plex Mono",
      sans: ' Roboto, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      mono: '"Roboto Mono", "Liberation Mono", "Courier New", monospace',
    },
    fontSize: {
      h1: "2rem",
      h2: "1.75rem",
      h3: "1.5rem",
      h4: "1.25rem",
      h5: "1.125rem",
      h6: "1rem",
      base: "1.25rem",
      lg: "1.125rem",
      xl: "1.26rem",
      "2xl": "1.5rem",
      "3xl": "1.75rem",
      "4xl": "2rem",
      "5xl": "2.5rem",
      "6xl": "3rem",
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
    },
    boxShadow: {
      custom: "4.5px 5px 8px 0.5px rgba(13, 13, 13, 0.5)",
    },
  },
});
