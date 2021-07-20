import React, { useState, useEffect } from 'react';
import { contractABI, infuras, subgraphs, contracts } from './constants';
import styles from './styles.module.css';

export function fetchAvatar(address, network, web3) {
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

export function useBCRAvatar({ Web3, infura, network, address }) {
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
			setWeb3(new Web3(provider));
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

export function BCRAvatar({
	Web3,
	infura,
	network,
	address,
	className = '',
	placeholder = 'https://ipfs.io/ipfs/QmVaFasJTocvnuEobz7HkRpADB82z5gYA2xuZrgYFmMoQz',
	children,
	...props
}) {
	const [avatar, isNFT] = useBCRAvatar({
		Web3,
		infura,
		network,
		address,
	});
	const classes = [
		isNFT ? 'bcravatar is-nft' : 'bcravatar',
		styles.bcravatar,
		className,
	];

	return (
		<div className={classes.join(' ')} {...props}>
			<a href="https://www.bcravatar.com" target="_blank">
				<img className="bcravatar__image" src={avatar || placeholder} />
			</a>
			<div className="bcravatar__content">{children}</div>
		</div>
	);
}

export function fetchProfile(address, network) {
	return new Promise((resolve, reject) =>
		fetch(subgraphs[network], {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query: `{
					profiles (where: { id: "${address.toLowerCase()}" }) {
						id,
						uri
					}
				}`,
			}),
		})
			.then((response) => response.json())
			.then(({ data: { profiles } }) => profiles[0])
			.then((profile) => {
				if (profile) {
					fetch(profile.uri)
						.then((response) => response.json())
						.then((data) => {
							resolve([data, null]);
						})
						.catch(reject);
				} else {
					reject({ error: 'No Profile' });
				}
			})
			.catch(reject)
	);
}

export function useBCRProfile({ network, address }) {
	const [profile, setProfile] = useState([null, null]);

	useEffect(() => {
		if (!address || !subgraphs[network]) return;
		fetchProfile(address, network)
			.then(setProfile)
			.catch((err) => setProfile([null, err]));
	}, [address, network]);

	return profile;
}