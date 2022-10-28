import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    build: {
        postcss: {
          postcssOptions: {
            plugins: {
              tailwindcss: {},
              autoprefixer: {},
            },
          },
        },
        transpile:[
          '@fortawesome/vue-fontawesome',
          '@fortawesome/fontawesome-svg-core',
          '@fortawesome/free-regular-svg-icons',
          '@fortawesome/free-solid-svg-icons',
        ]
      },
      css: [
        "~/assets/css/tailwind.css",
          '@fortawesome/fontawesome-svg-core/styles.css'
      ],
      head : {
        link: [
          { rel: 'icon', type: 'image/png', href: 'favicon.ico' },

        ],
      },

})

// <script src="https://kit.fontawesome.com/d0b3037d0c.js" crossorigin="anonymous"></script>

