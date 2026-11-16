// =============================================================================
// Blendzwitdom — site content
// -----------------------------------------------------------------------------
// This is the ONE file to edit when real info is ready. Everything the site
// shows (name, services, prices, hours, location, links, gallery) lives here.
// Anything marked TODO is placeholder text and needs the real value.
// A link left as '#' is treated as "not set yet" and is shown as disabled.
// =============================================================================

const instagramUrl = 'https://www.instagram.com/blendzwitdom'

export const siteConfig = {
  brand: {
    name: 'Blendzwitdom',
    tagline: 'Fresh fades. Clean blends.',
    // TODO: optional one-line intro under the tagline (keep it short).
    intro: 'Precision cuts, sharp line-ups and blends done right.',
  },

  // Where every "Book Now" button goes.
  // Until a real booking link exists, booking happens through an Instagram DM.
  booking: {
    // TODO: replace with a booking page (Booksy, Square, Calendly, etc.) when ready.
    url: instagramUrl,
    label: 'Book Now',
    note: 'Booking is by DM on Instagram for now. Send @blendzwitdom a message with the cut you want and a day that works.',
  },

  barber: {
    name: 'Dominic Mena',
    // Shown under the name in About.
    title: 'Barber behind Blendzwitdom',
    // TODO: real bio paragraphs.
    bio: [
      'Short bio goes here: how he got started cutting hair and what he loves about the craft.',
      'Second paragraph: his specialties, the vibe of the chair, and what clients can expect.',
    ],
    // TODO: real quick facts (years cutting, specialties, etc.). Delete any you don't want.
    facts: [
      { label: 'Experience', value: 'X years' },
      { label: 'Specialty', value: 'Specialty here' },
      { label: 'Based in', value: 'Your city' },
    ],
  },

  // TODO: real services, prices and durations. Add or remove items freely.
  services: [
    { name: 'Service name', price: '$XX', duration: 'XX min', description: 'Short description of the service.' },
    { name: 'Service name', price: '$XX', duration: 'XX min', description: 'Short description of the service.' },
    { name: 'Service name', price: '$XX', duration: 'XX min', description: 'Short description of the service.' },
    { name: 'Service name', price: '$XX', duration: 'XX min', description: 'Short description of the service.' },
    { name: 'Service name', price: '$XX', duration: 'XX min', description: 'Short description of the service.' },
    { name: 'Service name', price: '$XX', duration: 'XX min', description: 'Short description of the service.' },
  ],

  // Gallery of cuts.
  // TODO: add real haircut photos. To add one:
  //   1. Put the photo in src/assets/gallery/ (e.g. cut-1.jpg; ~1200px wide JPG/WebP is plenty).
  //   2. Import it at the top of this file:  import cut1 from './assets/gallery/cut-1.jpg'
  //   3. Set  image: cut1  and a short  alt  description on one of the items below.
  // Items with image: null show a styled placeholder tile.
  gallery: [
    { image: null, alt: 'Haircut photo', caption: 'Fade' },
    { image: null, alt: 'Haircut photo', caption: 'Taper' },
    { image: null, alt: 'Haircut photo', caption: 'Line-up' },
    { image: null, alt: 'Haircut photo', caption: 'Blend' },
    { image: null, alt: 'Haircut photo', caption: 'Beard' },
    { image: null, alt: 'Haircut photo', caption: 'Design' },
  ],

  // TODO: real hours. Use 'Closed' or 'By appointment' as needed.
  hours: [
    { day: 'Monday', time: 'X:XX – X:XX' },
    { day: 'Tuesday', time: 'X:XX – X:XX' },
    { day: 'Wednesday', time: 'X:XX – X:XX' },
    { day: 'Thursday', time: 'X:XX – X:XX' },
    { day: 'Friday', time: 'X:XX – X:XX' },
    { day: 'Saturday', time: 'X:XX – X:XX' },
    { day: 'Sunday', time: 'X:XX – X:XX' },
  ],

  location: {
    // TODO: shop name (or remove), street address, and city.
    shopName: 'Shop name',
    address: 'Street address',
    city: 'Your city, ST',
    // TODO: Google Maps link to the shop, e.g. https://maps.google.com/?q=...
    mapUrl: '#',
  },

  contact: {
    instagram: { handle: '@blendzwitdom', url: instagramUrl },
    // TODO: real phone number, both display text and tel: link (digits only).
    phone: { display: '(XXX) XXX-XXXX', url: '#' }, // e.g. 'tel:+15555555555'
    // TODO: optional email; leave url as '#' to show it as "coming soon".
    email: { display: 'email@example.com', url: '#' }, // e.g. 'mailto:you@example.com'
  },
}

/** True when a link has a real value (not empty and not the '#' placeholder). */
export const isSet = (url) => Boolean(url) && url !== '#'
