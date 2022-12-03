const path = require("path");

const buildSolhintCommand = (filenames) =>
    `solhint --fix ${filenames
        .map((f) => path.relative(process.cwd(), f))
        .join(" ")}`;

const buildEslintCommand = (filenames) =>
    `eslint --fix ${filenames
        .map((f) => path.relative(process.cwd(), f))
        .join(" ")}`;

const buildPrettierCommand = (filenames) =>
    `prettier --write ${filenames
        .map((f) => path.relative(process.cwd(), f))
        .join(" ")}`;

module.exports = {
    "*.sol": [buildSolhintCommand, buildPrettierCommand],
    "*.ts": [buildEslintCommand, buildPrettierCommand],
};
