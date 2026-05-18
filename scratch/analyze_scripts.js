const fs = require('fs');
const path = require('path');

const rootDir = 'd:\\MR CodersHub\\Front-end Projects\\May Day\\Coffee-Roaster';

function analyzeFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const scriptRegex = /<script>([\s\S]*?)<\/script>/gi;
    let match;
    const scripts = [];
    while ((match = scriptRegex.exec(content)) !== null) {
        // Skip external script tags or Tailwind config script
        if (match[0].includes('src=') || match[1].includes('tailwind.config')) {
            continue;
        }
        scripts.push(match[1].trim());
    }
    return scripts;
}

const htmlFiles = [
    path.join(rootDir, 'index.html')
];

const pagesDir = path.join(rootDir, 'pages');
if (fs.existsSync(pagesDir)) {
    fs.readdirSync(pagesDir).forEach(file => {
        if (file.endsWith('.html')) {
            htmlFiles.push(path.join(pagesDir, file));
        }
    });
}

const results = {};
htmlFiles.forEach(file => {
    const relativeName = path.relative(rootDir, file);
    const scripts = analyzeFile(file);
    if (scripts.length > 0) {
        results[relativeName] = scripts;
    }
});

console.log(JSON.stringify(results, null, 2));
