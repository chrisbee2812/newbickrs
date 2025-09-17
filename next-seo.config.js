// next-seo.config.js
export default {
  // ===== DEFAULT TEMPLATES & TITLES =====
  // This template will be applied to the `title` of every page
  titleTemplate: '%s | Chris Bicknell - Web Developer',
  // The default title if a page doesn't provide one
  defaultTitle: 'Chris Bicknell: Web Developer Creating Fast, SEO-Friendly Websites for Businesses',

  // ===== DEFAULT DESCRIPTION =====
  description: 'Portsmouth-based Web Developer specializing in modern, responsive websites and SEO for small businesses. I build sites that help you grow. View my portfolio and get a free quote today.',

  // ===== DEFAULT CANONICAL URL =====
  // This is the default canonical for the homepage. Each page should override this.
  canonical: 'https://bickrs.com',

  // ===== OPEN GRAPH (SOCIAL SHARING) DEFAULTS =====
  openGraph: {
    type: 'website',
    locale: 'en_GB', // Language and territory (en_IE = English Ireland, use en_US for US English)
    site_name: 'Chris Bicknell Portfolio', // The name of your site, displayed on the social card
    url: 'https://bickrs.com', // Default base URL
    // These images will be used as a fallback if a page doesn't define its own `og:image`
    images: [
      {
        url: 'https://bickrs.com/og-default.jpeg', // Absolute URL to your default OG image
        width: 768,
        height: 768,
        alt: 'Chris Bicknell - Web Developer Portfolio',
        type: 'image/jpeg',
      },
      // You can add multiple image formats (e.g., a PNG)
      // {
      //   url: 'https://johndoe.com/images/og-default.png',
      //   width: 1200,
      //   height: 630,
      //   alt: 'John Doe - Web Developer Portfolio',
      //   type: 'image/png',
      // },
    ],
  },

  // ===== TWITTER CARD DEFAULTS =====
  // This configures the appearance when shared on Twitter/X.
  // Using 'summary_large_image' shows a large preview with your image.
//   twitter: {
//     handle: '@yourtwitterhandle', // Your Twitter handle (e.g., @johndoe)
//     site: '@yourtwitterhandle', // Your website's Twitter handle (often the same)
//     cardType: 'summary_large_image', // Use 'summary' for a small card
//   },

  // ===== ADDITIONAL META TAGS =====
  // You can add any other meta tag that isn't covered by the above config.
  additionalMetaTags: [
    {
      name: 'keywords',
      // Be careful with keywords. Don't stuff. Use relevant terms.
      content: 'web developer, freelance web developer, frontend developer, react, next.js, javascript, portfolio, web design, SEO, responsive design, UK, Portsmouth, United Kingdom, small business websites',
    },
    {
      name: 'author',
      content: 'Chris Bicknell',
    },
    // Adds a "theme-color" for the address bar on some mobile browsers.
    {
      name: 'theme-color',
      content: '#000000', // A dark color, often black or a primary brand color
    },
    // Verifies ownership for various webmaster tools (Google, Bing, etc.)
    // {
    //   name: 'google-site-verification',
    //   content: 'your-google-search-console-verification-code', 
    // },
  ],

  // ===== ROBOTS META TAG DEFAULT =====
  // Controls search engine crawling and indexing.
  // Default is 'index, follow', so you often don't need to set this unless you want to change it.
  // robotsProps: {
  //   nosnippet: true, // Prevents displaying a snippet of the page in search results
  //   notranslate: true, // Prevents offering translation of the page in search results
  //   noimageindex: true, // Prevents indexing images on this page
  //   noarchive: true, // Prevents showing a "Cached" link in search results
  //   maxSnippet: -1, // Sets the maximum text-length for a snippet. -1 = no limit.
  //   maxImagePreview: 'none', // Sets the maximum size of an image preview. 'none', 'standard', 'large'
  //   maxVideoPreview: -1, // Sets the maximum length of a video preview. -1 = no limit.
  // },
};