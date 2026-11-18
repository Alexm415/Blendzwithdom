// =============================================================================
// Blendzwitdom: site content
// -----------------------------------------------------------------------------
// This is the ONE file to edit. Everything the site shows (name, services,
// prices, hours, location, links, reviews, gallery) lives here.
// Anything marked TODO is still placeholder content.
// A link left as '#' (or empty) is treated as "not set": contact boxes with
// no link are hidden, other links show as disabled "Coming soon".
// Sources: Instagram @blendzwitdom bio and Booksy page (checked Nov 16, 2026).
// =============================================================================

import taperFadeJpg from './assets/gallery/taper-fade-line-up.jpg'
import taperFadeWebp from './assets/gallery/taper-fade-line-up.webp'
import dropFadeJpg from './assets/gallery/drop-fade-mullet.jpg'
import dropFadeWebp from './assets/gallery/drop-fade-mullet.webp'
import highTaperJpg from './assets/gallery/high-taper.jpg'
import highTaperWebp from './assets/gallery/high-taper.webp'
import burstFadeJpg from './assets/gallery/burst-fade.jpg'
import burstFadeWebp from './assets/gallery/burst-fade.webp'

const instagramUrl = 'https://www.instagram.com/blendzwitdom'
const booksyUrl = 'https://booksy.com/en-us/971232_blendedbydom_barber-shop_119449_hayward'

export const siteConfig = {
  brand: {
    name: 'Blendzwitdom',
    tagline: 'Fresh fades. Clean blends.',
    eyebrow: 'Hayward · Bay Area Barber',
    intro: 'Fades, tapers & line-ups by Dominic Mena. Open Tuesday through Saturday.',
  },

  // Where every "Book Now" button goes.
  booking: {
    url: booksyUrl,
    label: 'Book Now',
    platform: 'Booksy',
    note: 'Book online through Booksy, Tuesday through Saturday. Questions? Send @blendzwitdom a DM on Instagram.',
  },

  // Rating shown in the hero and the Reviews section. Update occasionally from Booksy.
  rating: {
    score: '4.9',
    count: 66,
    source: 'Booksy',
    url: booksyUrl,
  },

  // Real client reviews from Booksy (first names as shown there).
  reviews: [
    { name: 'Xavier', text: 'Tap in with Dom, he got the best taper/line-up in the town 👌👌' },
    { name: 'Abdul', text: "Dom is very professional and well mannered on top of that he brought me back to life!! He's a magician fr appreciate you bro!!" },
    { name: 'Brandon', text: 'I liked the chill vibes and i really like my new haircut' },
    { name: 'Allan', text: '🔥🔥🔥 absolutely loved the cut. 15/10' },
  ],

  barber: {
    name: 'Dominic Mena',
    title: 'Barber behind Blendzwitdom',
    bio: [
      'Dominic Mena is a barber based in Hayward, serving the Bay Area. He focuses on fades, tapers and clean line-ups.',
      'He takes appointments Tuesday through Saturday, booked online through Booksy.',
    ],
    facts: [
      { label: 'Specialty', value: 'Fades, tapers & line-ups' },
      { label: 'Based in', value: 'Hayward / Bay Area' },
    ],
  },

  // From Booksy. `note` is optional and shows under the description.
  services: [
    {
      name: 'Mens haircut fade/tapers + line up',
      price: '$35',
      duration: '1h',
      description: 'Any type of fade or taper. Beard not included. Color enhancements included if wanted.',
    },
    {
      name: 'Haircut & beard',
      price: '$45',
      duration: '1h 15min',
      description: 'Haircut plus beard and mustache.',
    },
    {
      name: 'Kids haircut (ages 7–14)',
      price: '$30',
      duration: '1h',
      description: '',
    },
    {
      name: 'Housecall service',
      price: 'From $100',
      duration: '1h 30min',
      description: 'House call haircuts.',
      note: 'Price varies by location',
    },
  ],

  // Gallery of cuts (portrait photos, 3:4, ~750x1000).
  // To add or swap a photo:
  //   1. Put a JPG (and optionally a WebP copy) in src/assets/gallery/.
  //   2. Import it at the top of this file.
  //   3. Add an item below with image (JPG), webp (optional), alt and caption.
  gallery: [
    { image: taperFadeJpg, webp: taperFadeWebp, alt: 'Taper fade with a crisp line-up and longer hair in back, front view', caption: 'Taper fade + line-up' },
    { image: dropFadeJpg, webp: dropFadeWebp, alt: 'Drop fade with a sharp line-up and twists tied back, side view', caption: 'Drop fade mullet' },
    { image: highTaperJpg, webp: highTaperWebp, alt: 'High taper with a sharp line-up, side view', caption: 'High taper' },
    { image: burstFadeJpg, webp: burstFadeWebp, alt: 'Short textured cut with a burst fade and clean line-up, front view', caption: 'Burst fade' },
  ],

  // "See more" link under the gallery.
  galleryMoreUrl: 'https://www.instagram.com/blendzwitdom',

  // TODO: exact opening times are unknown; replace 'By appointment' with real times if wanted.
  hours: [
    { day: 'Tue – Sat', time: 'By appointment' },
    { day: 'Sun – Mon', time: 'Closed' },
  ],

  location: {
    shopName: 'Blendedbydom',
    address: '935 B St',
    city: 'Hayward, CA 94541',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=935+B+St+Hayward+CA+94541',
  },

  // Contact boxes. Any entry whose url is '#' is hidden.
  contact: {
    booksy: { display: 'Blendedbydom', url: booksyUrl },
    instagram: { handle: '@blendzwitdom', url: instagramUrl },
    // TODO: phone unknown. Set display and url (e.g. 'tel:+15105551234') to show it.
    phone: { display: '', url: '#' },
    // TODO: email unknown. Set display and url (e.g. 'mailto:you@example.com') to show it.
    email: { display: '', url: '#' },
  },
}

/** True when a link has a real value (not empty and not the '#' placeholder). */
export const isSet = (url) => Boolean(url) && url !== '#'
