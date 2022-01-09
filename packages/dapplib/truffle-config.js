require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clog swift suggest firm crater remind honey half enrich orange ghost'; 
let testAccounts = [
"0xba43d9c9f3b828a20ba398ede929ea932fda11ad1f09fba9b84c01143830162a",
"0x0b36af48a771b0e7cb4f3aa08a746a4e4ff92b6aff764b5352c8e2129d2cdf8e",
"0xedc4b14c3b67e693cf2637ee852b2ef67faf2ac9f22abd04789ca7fdc58ff861",
"0xe351f5a2ebd140e6c1390dd54321216b7be529c91b9232f9b2a7c9da32b1cea8",
"0x3d90a4f1d096ee09cc36bd0ac2a357e1d3d2c9337fa2f25157dee2193810fbe7",
"0xfeecacd6b595a563230f32eb411d5edab7c53d2ef2002a3344edc71462dd9cc0",
"0xe6d46ca12ed04a83f7e9f19c9793047828680002032e6d35905d887701bb6722",
"0xd335ce16b07103513e6a2401a3d5464b3797dfdacb2908f2cc9f48b5dfaf3c52",
"0x7eccedd80b9224e4f71f62f56b14affb4432a28dfd88505d76564fbc48470c11",
"0xdad999701990e64288596adc1d6893f618f2a7c2103d1105f87b20469ee154ae"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

