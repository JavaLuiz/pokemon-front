module.exports={
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "globals":{
    "JSX":true,
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "airbnb",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:@next/next/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json",
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "prettier",
    "import"
  ],
  "rules": {
    "jsx-a11y/label-has-associated-control": [ 2, {
      "labelComponents": ["label"],
      "labelAttributes": ["htmlFor"],
      "controlComponents": ["input"]
    }],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".ts",
          ".tsx"
        ]
      }
    ],
    "no-underscore-dangle": "off",
    "react/jsx-props-no-spreading": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ],
    "@typescript-eslint/consistent-type-definitions": [
      "error",
      "type"
    ],
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "import/prefer-default-export": "off",
    "react/function-component-definition": "off",
    "react/prop-types": "off",
    "import/no-duplicates":"off",
    "no-use-before-define":"off",
    "camelcase":"off",
    "@typescript-eslint/ban-ts-ignore": "off"
  },
  "settings": {
    "import/resolver": {
      "node":{
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      },
      "typescript": {
        "alwaysTryTypes": true,
      }
    },
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".ts",
        ".tsx"
      ]
    }
  },
  ignorePatterns:[
    "**/*.js",
    "**/*.json",
    "node_modules",
    ".turbo",
    ".next",
    "public",
    "dist"
  ]
}
