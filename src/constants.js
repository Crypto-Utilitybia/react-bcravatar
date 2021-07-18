export const infuras = {
	1: 'https://mainnet.infura.io/v3/',
	4: 'https://rinkeby.infura.io/v3/',
	137: 'https://polygon-mainnet.infura.io/v3/',
};

export const contracts = {
	1: '',
	4: '0x5F958E9361397e226468a905508238B634a254C5',
	137: '',
};

export const contractABI = [
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'getAvatar',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
];

export const subgraphs = {
	1: '',
	4: 'https://api.studio.thegraph.com/query/2120/bcravatar-rinkeby/1.1.0',
	137: '',
};
