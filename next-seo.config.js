const title = 'Anton Fenske – Developer, writer, creator.';
const description =
  'Front-end developer, JavaScript enthusiast, and creator of Mastering Next.js.';

const SEO = {
  title,
  description,
  canonical: 'https://leerob.io',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://leerob.io',
    title,
    description,
    images: [
      {
        url: 'https://leerob.io/static/images/og.jpg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@leeerob',
    site: '@leeerob',
    cardType: 'summary_large_image'
  }
};

export default SEO;
