export const infuras = (network, id) =>
  ({
    1: `https://mainnet.infura.io/v3/${id}`,
    4: `https://rinkeby.infura.io/v3/${id}`,
    56: 'https://bsc-dataseed.binance.org/',
    137: 'https://rpc-mainnet.maticvigil.com/v1/7fa2effe8251c5c9816d77cadc1fe638ba8f8ed3'
  }[network])

export const contracts = {
  1: '0xBb9499d98C01D97Cc02B40Fa767531c308989995',
  4: '0xD673224197Cf741365094B50b1ef1A2c99b84Cc3',
  56: '0xbF8ef894fC52b423c50A8086415B9D5620FC64ce',
  137: '0xbF8ef894fC52b423c50A8086415B9D5620FC64ce'
}

export const contractABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'getAvatar',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    name: 'avatarNFTs',
    outputs: [
      {
        internalType: 'address',
        name: 'nft',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      },
      {
        internalType: 'bool',
        name: 'isERC721',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'getProfile',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
]

export const subgraphs = {
  1: 'https://api.studio.thegraph.com/query/2120/bcravatar-mainnet/1.0.1',
  4: 'https://api.studio.thegraph.com/query/2120/bcravatar-rinkeby/1.2.5',
  56: 'https://api.studio.thegraph.com/query/2120/bcravatar-bsc/1.0.1',
  137: 'https://api.studio.thegraph.com/query/2120/bcravatar-polygon/1.0.1'
}
