# Sample Hardhat Project with TypeScript and linting

This is the sample TypeScript project that comes with Hardhat, with linting and formatting for TS and Solidity.

## Usage

Run the `prepare` script to install husky and lint-staged hooks:

```bash
npm run prepare
```

Every time you commit, the linter and formatter will run on your staged files. You can also run them manually:

```bash
npm run lint
npm run format
```

If you want the linter to try to fix your errors, run:

```bash
npm run lint:fix
```

## This is the original README

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```
