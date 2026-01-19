// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  mdc: {
    highlight: {
      noApiRoute: false
    }
  },

  compatibilityDate: '2024-09-23',
  nitro: {
    prerender: {
      routes: [
        '/'
      ]
    },
    preset: 'cloudflare-pages', // or "cloudflare-module" if using Workers
    // Optionally enable native Node compatibility
    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
