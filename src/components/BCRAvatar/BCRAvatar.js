import React, { useState, useEffect } from 'react';
import { contractABI, infuras, subgraphs, contracts } from '../../constants';

function fetchAvatar(address, network, web3) {
	return new Promise((resolve, reject) =>
		fetch(subgraphs[network], {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query: `{
					avatars(where: { id: "${address.toLowerCase()}" }) {
						id,
						uri,
						nft,
						tokenId
					}
				}`,
			}),
		})
			.then((response) => response.json())
			.then(({ data: { avatars } }) => avatars[0])
			.then((avatar) => {
				if (avatar) {
					if (avatar.nft) {
						const contract = new web3.eth.Contract(
							contractABI,
							contracts[network]
						);
						contract.methods
							.getAvatar(address)
							.call()
							.then((uri) => resolve[(uri, avatar.uri !== uri)])
							.catch(reject);
					} else {
						resolve([avatar.uri, false]);
					}
				} else {
					reject({ msg: 'No Avatar' });
				}
			})
			.catch(reject)
	);
}

export function useBCRAvatar({ infura, network, address }) {
	const [web3, setWeb3] = useState(null);
	const [avatar, setAvatar] = useState([null, false]);

	useEffect(() => {
		if (!infura || !contracts[network]) return;
		const provider =
			typeof infura === 'object' || !infuras[network]
				? infura
				: `${infuras[network]}${infura}`;
		if (web3) {
			web3.setProvider(provider);
		} else {
			setWeb3(new (require('web3'))(provider));
		}
	}, [infura, network]);

	useEffect(() => {
		if (!address || !subgraphs[network]) return;
		fetchAvatar(address, network, web3)
			.then(setAvatar)
			.catch((err) => console.log('Error: Fetch Avatar', err));
	}, [address, network, web3]);

	return avatar;
}

export default function BCRAvatar({
	infura,
	network,
	address,
	className = '',
	placeholder = '../../assets/images/avataaars.png',
	children,
	...props
}) {
	const [avatar, isNFT] = useBCRAvatar({
		infura,
		network,
		address,
	});
	const classes = [isNFT ? 'bcravatar is-nft' : 'bcravatar', className];

	return (
		<div className={classes.join(' ')} {...props}>
			<img className="bcravatar__image" src={ placeholder} />
			<div className="bcravatar__content">{children}</div>
		</div>
	);
}
