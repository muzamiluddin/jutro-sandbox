const fs = require('fs');
const path = require('path');
const css = require('css');

const cssFilePath = 'path/to/grounded.css';
const outputJsonFilePath = 'path/to/design-tokens.json';

// Function to convert CSS rule to design token format
const convertRuleToToken = (rule) => {
    // Assuming the rule follows a specific format, e.g., --system-category-property-modifier: value;
    const nameParts = rule.split('-').slice(1); // Remove the initial '--'
    return {
        system: nameParts[0],
        category: nameParts[1],
        property: nameParts[2],
        modifier: nameParts[3],
        value: rule.value
    };
};

// Read the CSS file
fs.readFile(cssFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading CSS file:', err);
        return;
    }

    // Parse the CSS
    const parsedCss = css.parse(data);
    const tokens = {};

    // Iterate over CSS rules
    parsedCss.stylesheet.rules.forEach(rule => {
        if (rule.type === 'rule') {
            rule.declarations.forEach(declaration => {
                if (declaration.property && declaration.property.startsWith('--')) {
                    const token = convertRuleToToken(declaration.property);
                    const tokenPath = `${token.system}.${token.category}.${token.property}.${token.modifier}`;
                    tokens[tokenPath] = declaration.value;
                }
            });
        }
    });

    // Write the tokens to a JSON file
    fs.writeFile(outputJsonFilePath, JSON.stringify(tokens, null, 2), 'utf8', (writeErr) => {
        if (writeErr) {
            console.error('Error writing JSON file:', writeErr);
            return;
        }
        console.log('Design tokens JSON file generated successfully.');
    });
});