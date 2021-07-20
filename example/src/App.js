import React from 'react';
import Web3 from 'web3';

import { useBCRProfile, BCRAvatar } from 'react-bcravatar';
import 'react-bcravatar/dist/index.css';

const INFURA_ID = '9aa3d95b3bc440fa88ea12eaa4456161';
const address1 = '0x23ABfdBd2535aC77ea60a078707a9e5820b0Fff2';
const address2 = '0x543812C87700377b7b6D943142Cb57b1b4a05624';
const shorten = (addr) => `${addr.substr(0, 6)}...${addr.substr(-4)}`;

function BCRProfileExample({
	network,
	address,
	className = '',
	placeholder = 'https://ipfs.io/ipfs/QmVaFasJTocvnuEobz7HkRpADB82z5gYA2xuZrgYFmMoQz',
	...props
}) {
	const [profile, error] = useBCRProfile({
		network,
		address,
	});
	const loading = !profile && !error;
	const classes = [error ? 'bcrprofile error' : 'bcrprofile', className];

	return (
		<pre className={classes.join(' ')} {...props}>
			{loading
				? 'Loading...'
				: error
				? JSON.stringify(error, null, 4)
				: JSON.stringify(profile, null, 4)}
		</pre>
	);
}

const App = () => {
	return (
		<div>
			<div className="avatar-wrapper">
				<img id="logo" src="./logo.png" alt="Crypto Utilitybia" />
				<BCRAvatar
					Web3={Web3}
					infura={INFURA_ID}
					network={4}
					address={address1}
				>
					{shorten(address1)}
				</BCRAvatar>
			</div>
			<div className="profile-wrapper">
				<BCRProfileExample infura={INFURA_ID} network={4} address={address1} />
			</div>
			<div className="avatar-wrapper">
				<img id="logo" src="./logo.png" alt="Crypto Utilitybia" />
				<BCRAvatar
					Web3={Web3}
					infura={INFURA_ID}
					network={4}
					address={address2}
				>
					{shorten(address2)}
				</BCRAvatar>
			</div>
			<div className="profile-wrapper">
				<BCRProfileExample infura={INFURA_ID} network={4} address={address2} />
			</div>
		</div>
	);
};

export default App;
