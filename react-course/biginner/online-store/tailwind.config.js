/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  important: true,
  corePlugins: {
    preflight: true,
  },
  purge: {
    enabled: false,
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '475px',
      '2xs': '375px',
      '3xs': '360px',
      '4xs': '280px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
