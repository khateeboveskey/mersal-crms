const URL_REGEX = /(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:([^./]+)\.)?([^./]+\.com)/;

export function extractWebsiteName(url) {
  const matches = url.match(URL_REGEX);
  if (url && URL_REGEX && matches) {
    const [, subdomain, domain] = matches;
    let socialMediaName = subdomain
      ? subdomain.charAt(0) + subdomain.slice(1)
      : domain.charAt(0) + domain.slice(1);
    socialMediaName = socialMediaName.replace(/\.[^/.]+$/, '');
    return socialMediaName;
  } else {
    return '';
  }
}
