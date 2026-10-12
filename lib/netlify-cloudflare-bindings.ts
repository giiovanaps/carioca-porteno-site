// The presentation can run on Netlify; its Cloudflare D1 database cannot.
// An absent binding makes the existing reservation API return its honest
// unavailable response, instead of acknowledging a reservation it did not save.
export const env: {DB?: D1Database} = {};
