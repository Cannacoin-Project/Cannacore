var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

// Use this to get reverse genesis/merkle.
//echo -n '203067d812254f72cdc20099b4a077a380597cf97638a88c4157620202b055ba' | dd conv=swab | rev


exports.livenet = {
  name: 'livenet',
  magic: hex('c7c0fcd5'),
  addressVersion: 28,
  privKeyVersion: 156,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('2198de7089b82bb4932bc936b4fa5af00ba1d118c0f158079a09863cf0cdb4f1'),
    merkle_root: hex('68aa0ac2ac0c2dbb7e2317d24c1e8b9cb08062ab6228fea3c299e0b772aec304'),
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
  addressVersion: 111,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('ba55b002026257418ca83876f97c5980a377a0b49900c2cd724f2512d8673020'),
    merkle_root: hex('0b9fec20e5668d517876c19dcde24160165533daeeb5403d21b7d6c515b842540x'),
    height: 0,
    nonce: 1223606,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1416351712,
    bits: 504365055,
  },
  dnsSeeds: [],
  defaultClientPort: 17143,
  lastPoWBlock: 1300
};
