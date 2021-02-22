import conf from '../utils/conf'

export function getStrapiMedia(url) {
  // Check if URL is a local path
  if (url.startsWith("/")) {
    // Prepend Strapi address
    return `${conf.strapiCdnBaseUri}${url}`;
  }
  // Otherwise return full URL
  return url;
}
