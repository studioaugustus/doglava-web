import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      links: [
        {
          text: 'Home',
          href: getPermalink('/'),
        },
        {
          text: 'Intro',
          href: getPermalink('/intro'),
        },
      ],
    },
    {
      text: 'Music',
      links: [
        {
          text: 'Listen',
          href: getPermalink('/listen'),
        },
        {
          text: 'Tickets',
          href: getPermalink('/tickets'),
        },
      ],
    },

    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  socialLinks: [
    {
      ariaLabel: 'Spotify',
      icon: 'tabler:brand-spotify',
      href: 'https://open.spotify.com/artist/2DxML1TqtSfKbvmaXb3o4g',
    },
    {
      ariaLabel: 'Apple Music',
      icon: 'tabler:brand-apple',
      href: 'https://music.apple.com/us/artist/doglava/1465208865',
    },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/doglava/?hl=en' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/doglava/' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[]"></span>
    Brought to you by <a class="text-red-600 hover:underline dark:text-gray-200" href="https://studioaugustus.com/"> Studio Augustus</a>
  `,
};
