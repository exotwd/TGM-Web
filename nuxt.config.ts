// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@dargmuesli/nuxt-cookie-control', 'nuxt-gtag'
  ],

  gtag: {
    id: 'G-4Z7P0D37C4',
    initialConsent: false,
  },
  cookieControl: {
    // Position of cookie bar.
// 'top-left', 'top-right', 'top-full', 'bottom-left', 'bottom-right', 'bottom-full'
barPosition: 'bottom-full',

// Switch to toggle if clicking the overlay outside the configuration modal closes the modal.
closeModalOnClickOutside: true,

// Component colors.
// If you want to disable colors set colors property to false.
colors: {
  barBackground: '#000',
  barButtonBackground: '#fff',
  barButtonColor: '#000',
  barButtonHoverBackground: '#333',
  barButtonHoverColor: '#fff',
  barTextColor: '#fff',
  checkboxActiveBackground: '#000',
  checkboxActiveCircleBackground: '#fff',
  checkboxDisabledBackground: '#ddd',
  checkboxDisabledCircleBackground: '#fff',
  checkboxInactiveBackground: '#000',
  checkboxInactiveCircleBackground: '#fff',
  controlButtonBackground: '#fff',
  controlButtonHoverBackground: '#000',
  controlButtonIconColor: '#000',
  controlButtonIconHoverColor: '#fff',
  focusRingColor: '#808080',
  modalBackground: '#fff',
  modalButtonBackground: '#000',
  modalButtonColor: '#fff',
  modalButtonHoverBackground: '#333',
  modalButtonHoverColor: '#fff',
  modalOverlay: '#000',
  modalOverlayOpacity: 0.8,
  modalTextColor: '#000',
  modalUnsavedColor: '#fff',
},

// The cookies that are to be controlled.
// See detailed explanation further down below!
cookies: {
  necessary: [],
  optional: [],
},

// The milliseconds from now until expiry of the cookies that are being set by this module.
cookieExpiryOffsetMs: 1000 * 60 * 60 * 24 * 365, // one year

// Names for the cookies that are being set by this module.
cookieNameIsConsentGiven: 'ncc_c',
cookieNameCookiesEnabledIds: 'ncc_e',

// Options to pass to nuxt's useCookie
cookieOptions: {
  path: '/',
},

// Switch to toggle the "accept necessary" button.
isAcceptNecessaryButtonEnabled: true,

// Switch to toggle the button that opens the configuration modal.
isControlButtonEnabled: true,

// Switch to toggle the concatenation of target cookie ids to the cookie description.
isCookieIdVisible: false,

// Switch to toggle the inclusion of this module's css.
// If css is set to false, you will still be able to access your color variables.
isCssEnabled: true,

// Switch to toggle the css variables ponyfill.
isCssPonyfillEnabled: false,

// Switch to toggle the separation of cookie name and description in the configuration modal by a dash.
isDashInDescriptionEnabled: true,

// Switch to toggle the blocking of iframes.
// This can be used to prevent iframes from adding additional cookies.
isIframeBlocked: false,

// Switch to toggle the modal being shown right away, requiring a user's decision.
isModalForced: false,

// The locales to include.
locales: ['cs'],

// Translations to override.
localeTexts: {
},
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})