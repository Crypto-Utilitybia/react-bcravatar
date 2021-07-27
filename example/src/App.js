import React, { useEffect, useState } from 'react'
import Web3 from 'web3'

import { useBCRProfile, BCRAvatar, fetchAvatars } from 'react-bcravatar'
import 'react-bcravatar/dist/index.css'

const INFURA_ID = '9aa3d95b3bc440fa88ea12eaa4456161'
const web3 = new Web3(`https://rinkeby.infura.io/v3/${INFURA_ID}`)
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

const networks = [
  {
    key: 1,
    label: 'Mainnet'
  },
  {
    key: 4,
    label: 'Rinkeby'
  },
  {
    key: 56,
    label: 'BSC'
  },
  {
    key: 137,
    label: 'Polygon'
  }
]

const addresses = {
  1: [
    '0x1Ef9882554C6DaABEcd2c7056F8811C69674fc6D',
    '0xBb9499d98C01D97Cc02B40Fa767531c308989995'
  ],
  4: [
    '0x23ABfdBd2535aC77ea60a078707a9e5820b0Fff2',
    '0xD673224197Cf741365094B50b1ef1A2c99b84Cc3'
  ],
  56: [
    '0x1Ef9882554C6DaABEcd2c7056F8811C69674fc6D',
    '0xbF8ef894fC52b423c50A8086415B9D5620FC64ce'
  ],
  137: [
    '0x1Ef9882554C6DaABEcd2c7056F8811C69674fc6D',
    '0xbF8ef894fC52b423c50A8086415B9D5620FC64ce'
  ]
}

const App = () => {
  const [network, setNetwork] = useState(networks[0].key)
  const [[avatarMap, error], setAvatarMap] = useState([null, null])
  useEffect(() => {
    fetchAvatars(addresses[network], network, web3)
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
  }, [network])

  return (
    <div>
      <div className='avatar-wrapper'>
        <img id='logo' src='./logo.png' alt='Crypto Utilitybia' />
        <BCRAvatar
          Web3={Web3}
          infura={INFURA_ID}
          network={network}
          address={addresses[network][0]}
        >
          {shorten(addresses[network][0])}
        </BCRAvatar>
      </div>
      <select
        value={network}
        onChange={(event) => setNetwork(event.target.value)}
      >
        {networks.map((network) => (
          <option key={network.key} value={network.key}>
            {network.label}
          </option>
        ))}
      </select>
      <BCRProfileExample
        infura={INFURA_ID}
        network={network}
        address={addresses[network][0]}
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
