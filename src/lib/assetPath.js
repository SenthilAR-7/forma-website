const basePath =
  process.env.NODE_ENV === 'production'
    ? '/forma-website'
    : '';

export function getAssetPath(path) {
  return `${basePath}${path}`;
}