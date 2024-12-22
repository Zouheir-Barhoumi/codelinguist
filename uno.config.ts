import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [
    // Add presets here...
    presetUno(),
  ],
  shortcuts: {
    btn: "py-2 px-4 font-semibold rounded-lg shadow-md",
    "btn-primary": "btn bg-blue-500 hover:bg-blue-700 text-white",
  },
  theme: {
    colors: { primary: "#007bff", secondary: "#6c757d" },
    fontFamily: {
      sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
  },
});
