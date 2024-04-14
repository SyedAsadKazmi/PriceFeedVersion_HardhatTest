require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      blockConfirmations: 1,
      forking: {
        url: SEPOLIA_RPC_URL,
        blockNumber: 5000000
      }
    }
  }
};
