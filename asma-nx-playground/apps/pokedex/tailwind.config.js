const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {

    extend: {
      fontFamily: {
        flexo: ['Flexo', 'sans-serif'],
      },
      colors: {
        Brown: {
          500: '#313131',
        },
        Orange: {
          500: '#EE6B2F',
        },
      },
    },
  },
  plugins: [],

};
