import React, { useState, useEffect } from 'react';
import { contractABI, infuras, subgraphs, contracts } from '../../constants';

function fetchProfile(address, network, web3) {
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

export default function BCRProfileExample({
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
