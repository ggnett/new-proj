"build": "webpack",
"start": "webpack serve",
"lint:ts": "npx eslint \"src/**/\*.{ts,tsx,jsx,js}\"",
"lint:ts:fix": "npx eslint \"src/**/_.{ts,tsx,jsx,js}\" --fix"
"lint:css": "npx stylelint \"\*\*/_.css\"",
"lint:css:fix": "npx stylelint \"\*_/_.css\" --fix"
"storybook": "storybook dev -p 6006",
"loki:test": "npx loki test",
"loki:done": "npx loki approve"
"unit": "jest --config ./jest.config.js"

    npx jest
