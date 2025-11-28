const fs = require('fs');
const path = 'src/data/shikigami.ts';
let content = fs.readFileSync(path, 'utf8');

// Improved regex:
// 1. Allow whitespace after 'orbCost:'
// 2. Allow whitespace after the number and comma before the newline
// 3. Capture all whitespace between the comma and 'description:'
const regex = /(orbCost:\s*\d+,)(\s+)(description:)/g;

let count = 0;
const newContent = content.replace(regex, (match, p1, p2, p3) => {
    // Check if cooldown already exists in the whitespace (unlikely but possible if mixed)
    // or if we are inside a comment (regex is dumb, but file structure is simple)

    // We want to insert 'cooldown: 0,' before 'description:'
    // We'll use the same indentation as 'description:' which is likely the last part of p2

    // p2 contains newlines and spaces. 
    // Example p2: "\n                "

    // We want output:
    // orbCost: 0,
    // cooldown: 0,
    // description: ...

    // So we can just append 'cooldown: 0,' + p2 to p1?
    // No, p2 is the separator.
    // We want: p1 + p2 + "cooldown: 0," + p2 + p3 ? No that adds extra newline.

    // Let's try to reconstruct.
    // p1 = "orbCost: 0,"
    // p2 = "\n                "
    // p3 = "description:"

    // Result: "orbCost: 0," + "\n                " + "cooldown: 0," + "\n                " + "description:"
    // This adds a newline.

    // But wait, if I use p2 for indentation, I need to be careful.
    // Let's just assume standard formatting.

    count++;
    return `${p1}${p2}cooldown: 0,${p2}${p3}`;
});

fs.writeFileSync(path, newContent);
console.log(`Updated ${count} skills with cooldown: 0.`);
