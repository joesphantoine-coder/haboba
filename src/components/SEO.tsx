import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
}

const SITE_NAME = 'Haboba';
const DEFAULT_IMAGE = '/logo/icon-512.png';

export default function SEO({ title, description, image }: SEOProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph — controls how links look when shared on
          WhatsApp, Facebook, LinkedIn, etc. */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || DEFAULT_IMAGE} />
      <meta property="og:type" content="article" />

      {/* Twitter/X card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}