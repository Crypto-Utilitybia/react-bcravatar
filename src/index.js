import React, { useState, useEffect } from 'react'
import { contractABI, infuras, subgraphs, contracts } from './constants'
import styles from './styles.module.css'

export const constants = { contracts, subgraphs }

const replaceId = (uri, id) => {
  if (uri.includes('0x{id}')) return uri.replace('0x{id}', id)
  else if (uri.includes('{id}')) return uri.replace('{id}', id)
  else return uri
}

export function fetchAvatar(address, network, web3, origin) {
  return new Promise((resolve, reject) =>
    fetch(subgraphs[network], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `{
					avatars(where: { id: "${address.toLowerCase()}" }) {
						id,
						uri,
						hasNFT
					}
				}`
      })
    })
      .then((response) => response.json())
      .then(({ data: { avatars } }) => avatars[0])
      .then((avatar) => {
        if (avatar) {
          if (avatar.uri === origin[0] && avatar.hasNFT === origin[1]) {
            resolve(origin)
          } else {
            if (avatar.hasNFT) {
              const contract = new web3.eth.Contract(
                contractABI,
                contracts[network]
              )
              Promise.all([
                contract.methods.getAvatar(address).call(),
                contract.methods.avatarNFTs(address).call()
              ])
                .then(([uri, nft]) => {
                  fetch(replaceId(uri, nft.tokenId))
                    .then((response) => response.json())
                    .then((metadata) => {
                      if (metadata.image || metadata.image_url) {
                        const uri = metadata.image || metadata.image_url
                        resolve([uri, avatar.uri !== uri])
                      } else {
                        reject({ error: metadata.detail })
                      }
                    })
                    .catch(reject)
                })
                .catch(() => resolve([avatar.uri, false]))
            } else {
              resolve([avatar.uri, false])
            }
          }
        } else {
          reject({ error: 'No Avatar' })
        }
      })
      .catch(reject)
  )
}

export function fetchAvatars(addresses, network, web3) {
  return new Promise((resolve, reject) =>
    fetch(subgraphs[network], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `{
					avatars(where: { id_in: ["${addresses
            .map((item) => item.toLowerCase())
            .join('","')}"] }) {
						id,
						uri,
						hasNFT
					}
				}`
      })
    })
      .then((response) => response.json())
      .then(({ data: { avatars } }) => {
        if (avatars.length) {
          Promise.all(
            avatars.map(
              (avatar) =>
                new Promise((resolve) => {
                  if (avatar.hasNFT) {
                    const contract = new web3.eth.Contract(
                      contractABI,
                      contracts[network]
                    )
                    Promise.all([
                      contract.methods.getAvatar(address).call(),
                      contract.methods.avatarNFTs(address).call()
                    ])
                      .then(([uri, nft]) => {
                        fetch(replaceId(uri, nft.tokenId))
                          .then((response) => response.json())
                          .then((metadata) => {
                            if (metadata.image || metadata.image_url) {
                              const uri = metadata.image || metadata.image_url
                              resolve([avatar.id, uri, avatar.uri !== uri])
                            } else {
                              resolve([avatar.id, avatar.uri, false])
                            }
                          })
                          .catch(() => resolve([avatar.id, avatar.uri, false]))
                      })
                      .catch(() => resolve([avatar.id, avatar.uri, false]))
                  } else {
                    resolve([avatar.id, avatar.uri, false])
                  }
                })
            )
          )
            .then(resolve)
            .catch(reject)
        } else {
          reject({ error: 'No Avatar' })
        }
      })
      .catch(reject)
  )
}

export function useBCRAvatar({ Web3, infura, network, address, refresh }) {
  const [web3, setWeb3] = useState(null)
  const [avatar, setAvatar] = useState([null, false])

  useEffect(() => {
    if (!infura || !contracts[network]) return
    const provider =
      typeof infura === 'object' ? infura : infuras(network, infura)
    if (!provider) return
    if (web3) {
      web3.setProvider(provider)
    } else {
      setWeb3(new Web3(provider))
    }
  }, [infura, network])

  const getAvatar = (address, network, web3, origin) =>
    fetchAvatar(address, network, web3, origin)
      .then(setAvatar)
      .catch((err) => {
        console.log('Error: Fetch Avatar', err)
        setAvatar(['', false])
      })

  useEffect(() => {
    if (!address || !web3) return
    const timeout = !avatar[0] ? 0 : refresh
    setTimeout(() => getAvatar(address, network, web3, avatar), timeout)
  }, [address, network, web3, refresh, avatar])

  return avatar
}

export function BCRAvatar({
  Web3,
  infura,
  network,
  address,
  className = '',
  placeholder = 'https://ipfs.io/ipfs/QmVaFasJTocvnuEobz7HkRpADB82z5gYA2xuZrgYFmMoQz',
  refresh = 15 * 1000,
  children,
  ...props
}) {
  const [avatar, isNFT] = useBCRAvatar({
    Web3,
    infura,
    network,
    address,
    refresh
  })
  const classes = [
    isNFT ? 'bcravatar is-nft' : 'bcravatar',
    styles.bcravatar,
    className
  ]

  return (
    <div className={classes.join(' ')} {...props}>
      <a href='https://www.bcravatar.com' target='_blank'>
        <img className='bcravatar__image' src={avatar || placeholder} />
      </a>
      <div className='bcravatar__content'>{children}</div>
    </div>
  )
}

export function fetchProfile(address, network) {
  return new Promise((resolve, reject) =>
    fetch(subgraphs[network], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `{
					profiles (where: { id: "${address.toLowerCase()}" }) {
						id,
						uri
					}
				}`
      })
    })
      .then((response) => response.json())
      .then(({ data: { profiles } }) => profiles[0])
      .then((profile) => {
        if (profile) {
          fetch(profile.uri)
            .then((response) => response.json())
            .then((data) => {
              resolve([data, null])
            })
            .catch(reject)
        } else {
          reject({ error: 'No Profile' })
        }
      })
      .catch(reject)
  )
}

export function useBCRProfile(network, address) {
  const [profile, setProfile] = useState([null, null])

  useEffect(() => {
    if (!address || !subgraphs[network]) return
    fetchProfile(address, network)
      .then(setProfile)
      .catch((err) => setProfile([null, err]))
  }, [address, network])

  return profile
}
