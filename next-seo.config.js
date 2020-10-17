const title = 'Francisco Moretti';
const description = 'Making things happen.';

const SEO = {
  title,
  description,
  canonical: 'https://franciscomoretti.vercel.app/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://franciscomoretti.vercel.app/',
    title,
    description,
    images: [
      {
        url: 'https://franciscomoretti.vercel.app/static/images/og.jpg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  }
};

export default SEO;
