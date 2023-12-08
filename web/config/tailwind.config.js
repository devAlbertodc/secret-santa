/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  //The key to work with config file is understanding the how extend object works. 
  //Anything you place inside, EXTENDS the existing Tailwind styles.
  //But, anything listed outside the extend block(but inside the theme block will override the Tailwind classes.
  
  //For example, if you add the Secret Santa color palette within the theme block,
  //you WILL NOT have access to any of the colors Tailwind provides:

  //But, if we add the palette inside the extend block, then you can use the Secret Santa colors AND Tailwind?s colors.
  theme: {
    extend: {
      colors: {
        supernova: '#fac900' /* yellow / warning */,
        spicyMustard: '#6e5a0d' /* dark yellow */,
        bombay: '#aeaeae' /* light gray */,
        orangeRed: '#ff4600' /* red / error */,
        cognac: '#9a360e' /* dark red */,
        fireEngineRed: '#c52425' /* dark red */,
        silverTree: '#70bd91' /* light green */,
        turquoiseGreen: '#a0ccb7' /* very light green */,
        spanishGreen: '#008a52' /* medium green */,
        cruseo: '#0a5d2c' /* dark green */,
        countyGreen: '#003d19' /* darkest green */,
        acadia: '#392f2d' /* brown */,
        scotchMist: '#efe9cb' /* light brown */,
        nileBlue: '#243853' /* blue */,
        blackPearl: '#071126' /* navy blue */,
        pastelMagenta: '#ff9dbf' /* pink */,
        padua: '#b1e3cc' /* lightest green - placeholder color */,
        vistaBlue: '#94d1b4' /* light green - placeholder color */,
      },
    },
    
    //Take the first font, I?m using an array to pass it a list of fonts.
    //So, anytime I refer to the condensed font, first it?s going to look for Bebas Neue.
    //If that doesn?t exist, then it will sans-serif font.
    fontFamily: {
      condensed: ['Bebas Neue', 'sans-serif'],
      handwriting: ['Kalam', 'cursive'],
      sans: ['Inter', 'sans-serif'],
      script: ['Agbalumo', 'cursive'],
    },
  },
  plugins: [],
}

