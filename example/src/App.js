import React, { useEffect, useState } from 'react'
import Web3 from 'web3'

import { useBCRProfile, BCRAvatar, fetchAvatars } from 'react-bcravatar'
import 'react-bcravatar/dist/index.css'

const web3 = new Web3(`https://rinkeby.infura.io/v3/${INFURA_ID}`)

const INFURA_ID = '9aa3d95b3bc440fa88ea12eaa4456161'
const addresses = [
  '0x23ABfdBd2535aC77ea60a078707a9e5820b0Fff2',
  '0x6EedE8E28C581989260da2d9401de60Ae2d4AA64'
]
const shorten = (addr) => `${addr.substr(0, 6)}...${addr.substr(-4)}`

function BCRProfileExample({
  network,
  address,
  className = '',
  placeholder = 'https://ipfs.io/ipfs/QmVaFasJTocvnuEobz7HkRpADB82z5gYA2xuZrgYFmMoQz',
  ...props
}) {
  const [profile, error] = useBCRProfile(network, address)
  const loading = !profile && !error
  const classes = [error ? 'bcrprofile error' : 'bcrprofile', className]

  return (
    <pre className={classes.join(' ')} {...props}>
      {loading
        ? 'Loading...'
        : error
        ? JSON.stringify(error, null, 4)
        : JSON.stringify(profile, null, 4)}
    </pre>
  )
}

const App = () => {
  const [[avatarMap, error], setAvatarMap] = useState([null, null])
  useEffect(() => {
    fetchAvatars(addresses, 4, web3)
      .then((avatars) =>
        setAvatarMap([
          avatars.reduce(
            (a, c) => ({
              ...a,
              [c[0]]: { uri: c[1], hasNFT: c[2] }
            }),
            {}
          ),
          null
        ])
      )
      .catch((err) => setAvatarMap([null, err]))
  })

  return (
    <div>
      <div className='avatar-wrapper'>
        <img id='logo' src='./logo.png' alt='Crypto Utilitybia' />
        <BCRAvatar
          Web3={Web3}
          infura={INFURA_ID}
          network={4}
          address={addresses[0]}
        >
          {shorten(addresses[0])}
        </BCRAvatar>
      </div>
      <BCRProfileExample
        infura={INFURA_ID}
        network={4}
        address={addresses[0]}
      />
      <pre className='bcrprofile'>
        {!(avatarMap || error)
          ? 'Loading...'
          : error
          ? JSON.stringify(error, null, 4)
          : JSON.stringify(avatarMap, null, 4)}
      </pre>
    </div>
  )
}

export default App
