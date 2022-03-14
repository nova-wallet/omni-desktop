import { WellKnownChain } from '@substrate/connect';
// import westmint from './chainSpecs/westmint.json';
// import statemine from './chainSpecs/statemine.json';
// import adz from './chainSpecs/adz.json';

export default [
  {
    name: 'Polkadot',
    chainName: WellKnownChain.polkadot,
    genesisHash:
      '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3',
  },
  {
    name: 'Westend',
    chainName: WellKnownChain.westend2,
    genesisHash:
      '0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e',
    // parachains: [
    //   {
    //     name: 'westmint',
    //     genesisHash: '',
    //     chainSpec: westmint.toString(),
    //   },
    // ],
  },
  // {
  //   name: 'Kusama',
  //   chainName: WellKnownChain.ksmcc3,
  //   genesisHash:
  //     '0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe',
  //   // parachains: [
  //   //   {
  //   //     name: 'Statemine',
  //   //     genesisHash: '',
  //   //     chainSpec: statemine.toString(),
  //   //   },
  //   // ],
  // },
  // {
  //   name: 'Rococo',
  //   chainName: WellKnownChain.rococo_v2,
  //   genesisHash:
  //     '0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe',
  //   // parachains: [
  //   //   {
  //   //     name: 'Adz',
  //   //     genesisHash: '',
  //   //     chainSpec: adz.toString(),
  //   //   },
  //   // ],
  // },
];
