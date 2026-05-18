const fs = require('fs');
const path = require('path');

const rootDir = 'd:\\MR CodersHub\\Front-end Projects\\May Day\\Coffee-Roaster';

function refactorFile(filePath) {
    const isSub = filePath.includes('\\pages\\');
    const prefix = isSub ? '../' : './';
    let content = fs.readFileSync(filePath, 'utf-8');

    // 1. Replace <header>...</header> with <header></header>
    const headerRegex = /<header[\s\S]*?<\/header>/gi;
    if (headerRegex.test(content)) {
        content = content.replace(headerRegex, '<header></header>');
        console.log(`  - Replaced header in ${path.basename(filePath)}`);
    } else {
        console.log(`  - WARNING: No <header> tag found in ${path.basename(filePath)}`);
    }

    // 2. Replace <footer...>...</footer> with <footer></footer>
    const footerRegex = /<footer[\s\S]*?<\/footer>/gi;
    if (footerRegex.test(content)) {
        content = content.replace(footerRegex, '<footer></footer>');
        console.log(`  - Replaced footer in ${path.basename(filePath)}`);
    } else {
        console.log(`  - WARNING: No <footer> tag found in ${path.basename(filePath)}`);
    }

    // 3. Remove inline script blocks containing theme-toggle, profile, or lucide at the bottom
    const scriptRegex = /<script>([\s\S]*?)<\/script>/gi;
    let match;
    const scriptsToRemove = [];
    while ((match = scriptRegex.exec(content)) !== null) {
        const scriptBody = match[1];
        if (scriptBody.includes('lucide.createIcons') || scriptBody.includes('theme-toggle') || scriptBody.includes('profileBtn') || scriptBody.includes('mobileBtn')) {
            scriptsToRemove.push(match[0]);
        }
    }

    scriptsToRemove.forEach(scriptTag => {
        content = content.replace(scriptTag, '');
        console.log(`  - Removed redundant inline script tag in ${path.basename(filePath)}`);
    });

    // 4. Inject the new script tag in the <head>
    const headCloseTag = '</head>';
    const scriptInjectStr = `\n    <!-- VELOURA UNIFIED NAVBAR & FOOTER -->\n    <script src="${prefix}src/navbar-footer.js" defer></script>\n`;
    
    if (content.includes(headCloseTag)) {
        content = content.replace(headCloseTag, `${scriptInjectStr}${headCloseTag}`);
        console.log(`  - Injected script tag in head of ${path.basename(filePath)}`);
    } else {
        console.log(`  - WARNING: </head> not found in ${path.basename(filePath)}`);
    }

    // Save the refactored file
    fs.writeFileSync(filePath, content, 'utf-8');
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

console.log(`Starting refactoring for ${htmlFiles.length} files...`);
htmlFiles.forEach(file => {
    console.log(`Refactoring ${file}...`);
    refactorFile(file);
});
console.log('Refactoring completed successfully!');
