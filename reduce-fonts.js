const fs = require('fs');
const path = require('path');

const scale = 0.85;

// directories to process
const dirs = [
    path.join(__dirname, 'public/assets/css'),
    path.join(__dirname, 'components'),
    path.join(__dirname, 'pages')
];

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modifications = 0;

    // Pattern for standard CSS: font-size: Xpx or Xrem
    const cssMatch = /font-size:\s*(\d+(?:\.\d+)?)(px|rem)/gi;
    
    // Pattern for React inline styles: fontSize: "Xpx" or 'Xrem'
    const jsxMatch = /fontSize:\s*(['"])(\d+(?:\.\d+)?)(px|rem)\1/gi;

    content = content.replace(cssMatch, (match, valStr, unit) => {
        const val = parseFloat(valStr);
        let newVal;
        if (unit.toLowerCase() === 'px') {
            newVal = Math.round(val * scale);
        } else {
            newVal = parseFloat((val * scale).toFixed(3)); 
        }
        modifications++;
        return `font-size: ${newVal}${unit}`;
    });

    content = content.replace(jsxMatch, (match, quote, valStr, unit) => {
        const val = parseFloat(valStr);
        let newVal;
        if (unit.toLowerCase() === 'px') {
            newVal = Math.round(val * scale);
        } else {
            newVal = parseFloat((val * scale).toFixed(3));
        }
        modifications++;
        return `fontSize: ${quote}${newVal}${unit}${quote}`;
    });

    if (modifications > 0) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${modifications} font-sizes in ${filePath}`);
    }
}

function traverseDir(dir) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            traverseDir(fullPath);
        } else if (file.endsWith('.css') || file.endsWith('.js')) {
            processFile(fullPath);
        }
    }
}

console.log('Starting font-size reduction...');
for (const dir of dirs) {
    traverseDir(dir);
}
console.log('Finished processing.');
