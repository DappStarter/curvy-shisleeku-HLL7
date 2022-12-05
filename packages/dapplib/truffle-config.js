require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside venture strong reflect place horn grace clip tail ghost'; 
let testAccounts = [
"0x0d5092f0dba726e47182b07b4b9886bb335e5253b50d572509012a3890d138bf",
"0x1d469698c267fc97a6d26b6c8b69c542b98a5ef9e376448cc867faf4c7942b28",
"0x06e3ab95bd49384c0921ce98c613c60ebd22caa777ab5c8e28a22aa228a2d8b6",
"0x00747e0191c6c1917ae45cd6c771fefe269d17aae59dad464158c6208e27c0b8",
"0x4027854013346c03bba60ba972c503c1394d97ca985bd290abb909592ed23831",
"0xc52ce7f58353e3b0f7ced461105af3079b7d807c736f7c5f0d5fc9b114cb5474",
"0x79d48fe711007328785fc6ccf9991497af160ea3fb28a34db0089e817af602a0",
"0x976699f36fab4d674a82fee0322f7bdb356e4db316e5d9e24ee95b3c9bdf7f5b",
"0x9a08a926fbc925620f06fce7d108bd918e66bb1127313af599135139271e7957",
"0x3c51a90d0a9f9e90ff05a4c11851c48388e3812fab3ed0f5919af3a04927b032"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


