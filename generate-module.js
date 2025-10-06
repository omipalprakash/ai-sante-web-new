const fs = require("fs");
const path = require("path");

const rawInput = process.argv.slice(2).join(" ");

if (!rawInput) {
  console.error(
    "❌ Please provide a module name. Usage: node generate-module.js \"data grid\""
  );
  process.exit(1);
}

// Normalize to kebab-case
const toKebabCase = (str) =>
  str
    .replace(/([a-z])([A-Z])/g, "$1-$2") // camelCase to kebab-case
    .replace(/[\s_]+/g, "-") // spaces or underscores to dashes
    .toLowerCase();

// Kebab to PascalCase
const toPascalCase = (str) =>
  str
    .split(/[-_ ]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

// Kebab to SCREAMING_SNAKE_CASE
const toScreamingSnakeCase = (str) =>
  str.replace(/-/g, "_").toUpperCase();

const kebabName = toKebabCase(rawInput);
const pascalName = toPascalCase(kebabName);
const snakeName = toScreamingSnakeCase(kebabName);

const pagesDir = path.join(__dirname, "src/pages", kebabName);
const componentPath = path.join(pagesDir, `index.js`);
const scssPath = path.join(pagesDir, `${kebabName}.module.css`);
const constantsPath = path.join(pagesDir, `constants.js`);

if (fs.existsSync(pagesDir)) {
  console.error("❌ Module already exists.");
  process.exit(1);
}

fs.mkdirSync(pagesDir, { recursive: true });

fs.writeFileSync(
  componentPath,
  `import styles from './${kebabName}.module.css';

export default function ${pascalName}() {
  return (
    <div className={styles.container}>
      <h1>${pascalName} Page</h1>
    </div>
  );
}
`
);

fs.writeFileSync(
  scssPath,
  `.container {
  color: pink;
}
`
);

fs.writeFileSync(
  constantsPath,
  `// Static data for ${pascalName} module
export const ${snakeName}_DATA = [];
`
);

console.log(
  `✅ Module "${pascalName}" created successfully at /src/pages/${kebabName}/`
);
