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
						hasNFT
					}
				}`,
			}),
		})
			.then((response) => response.json())
			.then(({ data: { avatars } }) => avatars[0])
			.then((avatar) => {
				if (avatar) {
					if (avatar.hasNFT) {
						const contract = new web3.eth.Contract(
							contractABI,
							contracts[network]
						);
						contract.methods
							.getAvatar(address)
							.call()
							.then((uri) => {
								fetch(uri)
									.then((response) => response.json())
									.then((metadata) => {
										if (metadata.image || metadata.image_url) {
											const uri = metadata.image || metadata.image_url;
											resolve([uri, avatar.uri !== uri]);
										} else {
											resolve([avatar.uri, false]);
										}
									})
									.catch(() => resolve([avatar.uri, false]));
							})
							.catch(() => resolve([avatar.uri, false]));
					} else {
						resolve([avatar.uri, false]);
					}
				} else {
					reject({ error: 'No Avatar' });
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
			import('web3')
				.then(({ default: Web3 }) => {
					setWeb3(new Web3(provider));
				})
				.catch((error) => 'An error occurred while loading Web3');
		}
	}, [infura, network]);

	useEffect(() => {
		if (!address || !web3) return;
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
	placeholder = 'https://ipfs.io/ipfs/QmVaFasJTocvnuEobz7HkRpADB82z5gYA2xuZrgYFmMoQz',
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
			<a href="https://www.bcravatar.com" target="_blank">
				<img className="bcravatar__image" src={avatar || placeholder} />
			</a>
			<div className="bcravatar__content">{children}</div>
		</div>
	);
}
