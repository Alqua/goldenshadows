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
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          {
            hid: 'description',
            name: 'description',
            content: 'A Digital Exhbition of burmese artists Kolatt and Yadanar Win'
          },
          { hid: 'og-image', property: 'og:image',
            content: 'https://goldenshadows.ch/public/img/golden-shadows.JPG'
          },
        //   { hid: 'og-image', property: 'og:image',
        //   content: 'http://localhost:3003/assets/images/golden-shadows.JPG'
        // },

        ],
        link: [
          { rel: 'icon', type: 'image/png', href: 'favicon.ico' },

        ],
      },

})

// <script src="https://kit.fontawesome.com/d0b3037d0c.js" crossorigin="anonymous"></script>

