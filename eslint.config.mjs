import tseslint from "typescript-eslint"

export default tseslint.config(
  { files: ["src/**/*.ts"] },
  ...tseslint.configs.recommended,
  {
    rules: {
      curly: "warn",
      eqeqeq: "warn",
      "no-throw-literal": "warn",
    },
  }
)
