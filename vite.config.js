import eslint from "vite-plugin-eslint";

export default {
  plugins: [
    eslint({
      cache: false,
      include: ["sources/**/*.jsx", "sources/**/*.js"],
    }),
  ],
  server: {
    port: 8000,
    host: "0.0.0.0",
  },
};
