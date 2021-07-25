# react-bcravatar

> React components/hooks for BCRAvatar

[![NPM]](https://www.npmjs.com/package/react-bcravatar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-bcravatar web3
```

## Usage

```jsx
import React, { Component } from 'react';
import Web3 from 'web3';

import { BCRAvatar } from 'react-bcravatar';
import 'react-bcravatar/dist/index.css';

class Example extends Component {
	render() {
		return (
			<BCRAvatar Web3={Web3} infura={INFURA_ID} network={4} address={address}>
				{shorten(address)}
			</BCRAvatar>
		);
	}
}
```

## License

MIT © [Crypto-Utilitybia](https://github.com/Crypto-Utilitybia)
