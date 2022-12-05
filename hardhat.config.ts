import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-deploy";

const config: HardhatUserConfig = {
    solidity: "0.8.17",
    networks: {
        hardhat: {},
        mainnet: {
            url: process.env.MAINNET_RPC_URL,
            accounts: [
                process.env.MAINNET_PRIVATE_KEY ||
                    process.env.PRIVATE_KEY ||
                    "",
            ],
        },
        testnet: {
            url: process.env.TESTNET_RPC_URL,
            accounts: [
                process.env.TESTNET_PRIVATE_KEY ||
                    process.env.PRIVATE_KEY ||
                    "",
            ],
        },
    },
    etherscan: { apiKey: process.env.ETHERSCAN_API_KEY },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
};

export default config;
