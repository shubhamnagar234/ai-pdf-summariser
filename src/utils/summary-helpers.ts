export const parseSection = (
  section: string,
): { title: string; points: string[] } => {
  // Normalize both \r\n and \n to \n so template literals with Windows endings parse correctly
  const normalized = section.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const [title, ...content] = normalized.split('\n');
  const cleanTitle = title.startsWith('#')
    ? title.substring(1).trim()
    : title.trim();

  const points: string[] = [];
  let currentPoint = '';

  content.forEach((line) => {
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith('•')) {
      if (currentPoint) points.push(currentPoint.trim());
      currentPoint = trimmedLine;
    } else if (!trimmedLine) {
      if (currentPoint) points.push(currentPoint.trim());
      currentPoint = '';
    } else {
      currentPoint += ' ' + trimmedLine;
    }
  });

  if (currentPoint) points.push(currentPoint.trim());

  return {
    title: cleanTitle,
    points: points.filter(
      (point) =>
        point && !point.startsWith('#') && !point.startsWith('[Choose'),
    ),
  };
};

export function parsePoint(point: string) {
  const isNumbered = /^\d./.test(point);
  const isMainPoint = /^[•]/.test(point);
  // Detect emoji: surrogate pairs (most modern emoji) or BMP symbol range
  const hasEmoji =
    /[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(point) ||
    /[\u2600-\u27BF]/.test(point);
  const isEmpty = !point.trim();
  return { isNumbered, isMainPoint, hasEmoji, isEmpty };
}

export function parseEmojiPoint(content: string) {
  // Strip bullet and leading space
  const cleanContent = content.replace(/^[•]\s*/, '').trim();

  // Match surrogate-pair emoji (e.g. 🍓 🎬 🚀 🎯 💡 📄) — ES2017 compatible, no /s flag
  const m1 = cleanContent.match(/^([\uD800-\uDBFF][\uDC00-\uDFFF][\uFE0F\u20E3]?\s?)(.+)/);
  if (m1) {
    return { emoji: m1[1].trim(), text: m1[2].trim() };
  }

  // Match BMP emoji/symbols (e.g. ⚡ ⏱️ ⭐ 🗂️ ⬇️) — U+2600 to U+27BF range
  const m2 = cleanContent.match(/^([\u2600-\u27BF][\uFE0F]?\s?)(.+)/);
  if (m2) {
    return { emoji: m2[1].trim(), text: m2[2].trim() };
  }

  return null;
}
