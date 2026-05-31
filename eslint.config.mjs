import coreWebVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier";

const eslintConfig = [
  ...coreWebVitals,
  {
    settings: {
      react: { version: "detect" },
    },
  },
  prettier,
];

export default eslintConfig;
