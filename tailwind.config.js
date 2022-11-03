/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    container: {
      padding: '15px',
      center: true,
    },
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '992px',
        bigLg: '1078px'
      },
      colors: {
        lightColor: '#F7F9F9',
        accentColor: '#A5CBE0',
        blueColor: '#323F8D',
        blueBgColor: '#08192B',
        greyColor: 'rgb(247, 249, 249, 0.6)',
        troutColor: '#525760',
        troutLightColor: 'rgba(82, 87, 96, 0.6)',
        redColor: 'rgba(255, 0, 0, 0.8)',
        borderColor: '#1F3141',
        modalBgColor: 'rgba(29, 40, 52, 0.88)',
        lightBgColor: 'rgba(255, 255, 255, 0.3)'
      },
      backgroundImage: {
        heroBg: 'url("../img/hero-bg.jpg")',
        dog1: 'url("../img/dog-1.jpg")',
        cat1: 'url("../img/cat-1.jpg")',
        dog2: 'url("../img/dog-2.jpg")',
        cardBg1: 'url("../img/card-img-1.jpg")',
        cardBg2: 'url("../img/card-img-2.jpg")'
      },
      boxShadow: {
        cardShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
        formShadow: '0px 2px 6px rgba(0, 0, 0, 0.25)',
        cardTwoShadow: '0px 7px 12px rgba(0, 0, 0, 0.5)'
      }
    },
  },
  plugins: [],
}
