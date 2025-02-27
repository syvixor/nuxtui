// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxt/ui"],
    devtools: { enabled: true },
    future: { compatibilityVersion: 4 },
    css: ["~/assets/css/main.css"]
});