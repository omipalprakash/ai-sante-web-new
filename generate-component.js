const fs = require("fs");
const path = require("path");

// Join all arguments (so it works with unquoted multi-word input)
const rawInput = process.argv.slice(2).join(" ");

if (!rawInput) {
  console.error(
    "❌ Please provide a module name. Usage: node generate-module.js moduleName"
  );
  process.exit(1);
}

// Normalize input formats
const toKebabCase = (str) =>
  str
    .replace(/([a-z])([A-Z])/g, "$1-$2") // camelCase → kebab-case
    .replace(/[\s_]+/g, "-") // spaces or underscores → dashes
    .toLowerCase();

const toPascalCase = (str) =>
  str
    .split(/[-_ ]+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");

const toScreamingSnakeCase = (str) =>
  str.replace(/-/g, "_").toUpperCase();

const kebabName = toKebabCase(rawInput);
const pascalName = toPascalCase(kebabName);
const snakeName = toScreamingSnakeCase(kebabName);

const componentDir = path.join(__dirname, "src/component", kebabName);
const componentPath = path.join(componentDir, `index.js`);
const scssPath = path.join(componentDir, `${kebabName}.module.css`);
const constantsPath = path.join(componentDir, `constants.js`);

if (fs.existsSync(componentDir)) {
  console.error("❌ Module already exists.");
  process.exit(1);
}

fs.mkdirSync(componentDir, { recursive: true });

fs.writeFileSync(
  componentPath,
  `import styles from './${kebabName}.module.css';

const ${pascalName} = () => {
  return (
    <div className={styles.container}>
      <h1>${pascalName} Page</h1>
    </div>
  );
}
export default ${pascalName};
`
);

fs.writeFileSync(
  scssPath,
  `.container {
  color: red;
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
  `✅ Module "${pascalName}" created successfully at /src/component/${kebabName}/`
);
