module.exports = {
  env: {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true,
  },
  extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "prettier"
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
  }
}