/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.svelte'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': '#e11d48',
      'grey': '#64748B',
      'light-grey': '#cbd5e1',
      'white': '#ffffff',
      'black': '#000000',
      'legendary': '#fcd34d',
      'human': '#d6d3d1'
    },
    boxShadow: {
      'base': 'rgba(0 0 0) 5px 5px',
    },
    fontFamily: {
      sans: ['Space Mono', 'sans-serif'],
      heading: ['Poppins', 'sans-serif']
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}
