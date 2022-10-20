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
          { rel: 'icon', type: 'image/png', href: 'favicon.png' },
        //   { rel:'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css',
        //     integrity: "sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==",
        //     crossorigin:"anonymous",
        //     referrerpolicy:"no-referrer"
        // },
        {src:"https://kit.fontawesome.com/d0b3037d0c.js",crossorigin:"anonymous" }
        ],
      },

})

// <script src="https://kit.fontawesome.com/d0b3037d0c.js" crossorigin="anonymous"></script>