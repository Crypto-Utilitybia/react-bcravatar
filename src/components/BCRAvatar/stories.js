import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import BCRAvatar from './BCRAvatar';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 20px;
	box-shadow: 1px 1px 3px;

	#logo {
		height: 30px;
	}

	.bcravatar {
		display: flex;
		align-items: center;

		img {
			width: 30px;
			height: 30px;
			border-radius: 50%;
			margin-right: 15px;
		}
	}
`;

const INFURA_ID = '9aa3d95b3bc440fa88ea12eaa4456161';
const address = '0x23ABfdBd2535aC77ea60a078707a9e5820b0Fff2';
const shorten = (addr) => `${addr.substr(0, 6)}...${addr.substr(-4)}`;

storiesOf('BCRAvatar').add('with infura', () => (
	<Wrapper>
		<img id="logo" src="/crypto-utilitybia.png" alt="Crypto Utilitybia" />
		<BCRAvatar infura={INFURA_ID} network={4} address={address}>
			{shorten(address)}
		</BCRAvatar>
	</Wrapper>
));
