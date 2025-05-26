import js from "@eslint/js";
import globals from "globals";
// import pluginReact from "eslint-plugin-react"; // <-- Keep this only if you are actually using React

export default [
  // 1. Base ESLint Recommended Rules (applies to all JS files by default)
  {
    files: ["**/*.{js,mjs,cjs,jsx}"], // This covers all your JS files
    plugins: { js },
    extends: [js.configs.recommended], // Correct way to extend recommended in Flat Config
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      // Include common globals for all browser-side JS
      globals: {
        ...globals.browser,
        ...globals.es2021 // For modern JS features
      }
    },
    rules: {
      // Your project-wide rules (from previous steps)
      "no-var": "error",
      "no-unused-vars": "warn", // Changed to warn for development flexibility
      "semi": ["error", "always"],
      "eqeqeq": "error",
      "quotes": ["error", "single"],
      "space-before-function-paren": ["error", "always"]
    }
  },

  // 2. Specific Configuration for Mocha Unit Test Files
  {
    files: ["test/**/*.js"], // Targets files in the 'test' directory
    languageOptions: {
      globals: {
        ...globals.browser, // Browser globals might still be useful
        ...globals.mocha    // ONLY add Mocha globals here
      }
    },
    // No additional rules needed usually, unless specific test linting
  },

  // 3. Specific Configuration for Cypress E2E Test Files (CRUCIAL FOR 'cy undefined')
  {
    files: ["cypress/e2e/**/*.js"], // Targets files in 'cypress/e2e' directory
    languageOptions: {
      globals: {
        ...globals.browser,  // Browser globals are often needed for Cypress tests
        ...globals.cypress   // <--- THIS IS THE KEY FOR `cy`
      }
    },
    rules: {
      // You might add specific Cypress-related ESLint rules here in the future
      // For example, if you want to enforce best practices for Cypress commands
    }
  }

  // If you were using React, your pluginReact config would go here as another object in the array:
  // pluginReact.configs.flat.recommended,
];