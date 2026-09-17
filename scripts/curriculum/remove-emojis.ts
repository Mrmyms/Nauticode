import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'scripts', 'curriculum');
const files = fs.readdirSync(dir).filter(f => f.startsWith('block-') && f.endsWith('.ts'));

// Regex to match emojis. 
const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2300}-\u{23FF}\u{2B50}\u{1F004}]/gu;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Remove emojis
  const original = content;
  content = content.replace(emojiRegex, '').replace(/\s{2,}/g, ' '); // Clean up double spaces if any left by emojis
  
  // We don't want to mess up indentation, so maybe don't replace \s{2,} globally, just space before emoji.
  // Actually, just replacing emoji is enough.
  let cleanContent = original.replace(emojiRegex, '');
  // Also clean up space followed by emoji if it left trailing spaces.
  cleanContent = cleanContent.replace(/ \n/g, '\n').replace(/ $/gm, '');
  
  if (cleanContent !== original) {
    fs.writeFileSync(filePath, cleanContent, 'utf-8');
    console.log(`Removed emojis from ${file}`);
  }
}
