export const infuras = (network, id) =>
  ({
    1: `https://mainnet.infura.io/v3/${id}`,
    4: `https://rinkeby.infura.io/v3/${id}`,
    56: 'https://bsc-dataseed.binance.org/',
    137: `https://polygon-mainnet.infura.io/v3/${id}`
  }[network])

export const contracts = {
  1: '',
  4: '0xD673224197Cf741365094B50b1ef1A2c99b84Cc3',
  56: '',
  137: ''
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
  }
]

export const subgraphs = {
  1: '',
  4: 'https://api.studio.thegraph.com/query/2120/bcravatar-rinkeby/1.2.4',
  56: '',
  137: ''
}
