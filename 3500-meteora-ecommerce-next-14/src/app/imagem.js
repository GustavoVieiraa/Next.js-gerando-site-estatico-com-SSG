export default function githubLoader({ src, width, quality }) {
  return `${src}?w=${width}&=${quality ?? 75}`;
}