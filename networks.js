var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('fcc1b7dc'),
  addressVersion: 28,
  privKeyVersion: 156,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('F1B4CDF03C86099A0758F1C018D1A10BF05AFAB436C92B93B42BB88970DE9821'),
    merkle_root: hex('04C3AE72B7E099C2A3FE2862AB6280B09C8B1E4CD217237EBB2D0CACC20AAA68'),
    height: 0,
    nonce: 1120954,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1382342087,
    bits: 504365055
  },
  dnsSeeds: [
    'seed.cannacoin.cc'
  ],
  defaultClientPort: 7142,
  lastPoWBlock: 370000
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('fcc1b7dc'),
  addressVersion: 0x1C,
  privKeyVersion: 0x9C,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('F1B4CDF03C86099A0758F1C018D1A10BF05AFAB436C92B93B42BB88970DE9821'),
    merkle_root: hex('04C3AE72B7E099C2A3FE2862AB6280B09C8B1E4CD217237EBB2D0CACC20AAA68'),
    height: 0,
    nonce: 1120954,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1382342087,
    bits: 504365055,
  },
  dnsSeeds: [],
  defaultClientPort: 55444,
  lastPoWBlock: 150
};
