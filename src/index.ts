export default function widower(text: string): string {
  if (!text) return text;

  const textArray = text.split(' ');

  textArray.push(textArray.splice(-2, 2).join('\u00A0'));

  return textArray.join(' ');
}
