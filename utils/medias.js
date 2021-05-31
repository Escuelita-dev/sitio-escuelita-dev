export function getStrapiMedia(url, baseUrl) {
  // Check if URL is a local path
  if (url.startsWith("/")) {
    // Prepend Strapi address
    return `${baseUrl}${url}`;
  }
  // Otherwise return full URL
  return url;
}
