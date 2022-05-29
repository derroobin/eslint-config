module.exports = {
  env: {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier"
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
  }
}