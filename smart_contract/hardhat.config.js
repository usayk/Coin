require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/OfKEMLyg2JmX2MoWBYskqCUUeqbWuqge',
      accounts: ['dd07e3c694bb0442d063357af1d3fdac08710d8626a4b9169986ee2e78a955d6'],
    },
  },
};

 // https://eth-goerli.g.alchemy.com/v2/OfKEMLyg2JmX2MoWBYskqCUUeqbWuqge
// const { task } = require('hardhat/config');
// require('@nomicfoundation/hardhat-ethers');
// require('@nomicfoundation/hardhat-waffle');
// require('@nomicfoundation/hardhat-etherscan');
// const { upload } = require('@nomicfoundation/hardhat-etherscan');

// require('@nomicfoundation/hardhat-toolbox');

// module.exports = {
//   solidity: '0.8.0',
//   networks: {
//     goerli: {
//       url: 'https://eth-goerli.g.alchemy.com/v2/OfKEMLyg2JmX2MoWBYskqCUUeqbWuqge',
//       accounts: [ 'dd07e3c694bb0442d063357af1d3fdac08710d8626a4b9169986ee2e78a955d6' ]
//     }
//   }
// }