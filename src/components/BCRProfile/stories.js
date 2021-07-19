import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import BCRProfile from './BCRProfile';

const Wrapper = styled.div`
	margin: 10px 20px;
	box-shadow: 1px 1px 3px;

	.bcrprofile {
		padding: 10px 20px;
	}
`;

const INFURA_ID = '9aa3d95b3bc440fa88ea12eaa4456161';
const address1 = '0x23ABfdBd2535aC77ea60a078707a9e5820b0Fff2';
const address2 = '0x543812C87700377b7b6D943142Cb57b1b4a05624';
const shorten = (addr) => `${addr.substr(0, 6)}...${addr.substr(-4)}`;

storiesOf('BCRProfile')
	.add('with profile', () => (
		<Wrapper>
			<BCRProfile infura={INFURA_ID} network={4} address={address1}>
				{shorten(address1)}
			</BCRProfile>
		</Wrapper>
	))
	.add('without profile', () => (
		<Wrapper>
			<BCRProfile infura={INFURA_ID} network={4} address={address2}>
				{shorten(address2)}
			</BCRProfile>
		</Wrapper>
	));
