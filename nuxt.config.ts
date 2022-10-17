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
      },
      css: [
        "~/assets/css/tailwind.css",
        '@fortawesome/fontawesome-svg-core/styles.css'
      ],
      head : {
        link: [
          { rel: 'icon', type: 'image/png', href: 'favicon.png' }
        ],
      },

})
