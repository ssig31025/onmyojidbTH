const fs = require('fs');
const path = 'src/data/shikigami.ts';
let content = fs.readFileSync(path, 'utf8');

// Regex to find orbCost followed immediately by description (meaning cooldown is missing)
// We capture the newline and indentation before 'description' to reuse or just insert our own.
// But simpler to just insert between them.
// Pattern: orbCost: <number>,<newline><whitespace>description:
const regex = /(orbCost: \d+,)(\r?\n\s+)(description:)/g;

let count = 0;
const newContent = content.replace(regex, (match, p1, p2, p3) => {
    count++;
    // p2 is the newline and indentation
    // We want to insert cooldown: 0, with the same indentation
    return `${p1}${p2}cooldown: 0,${p2}${p3}`;
});

fs.writeFileSync(path, newContent);
console.log(`Updated ${count} skills with cooldown: 0.`);
