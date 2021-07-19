## React Component for [BCRAvatar](https://bcravatar.com/)

- [Storybook](https://crypto-utilitybia.github.io/react-bcravatar)

## How to use BCRAvatar

### BCRAvatar and useBCRAvatar

```javascript
import { BCRAvatar } from 'react-bcravatar';
///
<BCRAvatar infura={INFURA_ID} network={4} address={address}>
	{shorten(address)}
</BCRAvatar>;
```

```javascript
import { useBCRAvatar } from 'react-bcravatar';
///
const [avatar, isNFT] = useBCRAvatar({
	infura,
	network,
	address,
});
///
<div className={classes.join(' ')} {...props}>
	<a href="https://www.bcravatar.com" target="_blank">
		<img className="bcravatar__image" src={avatar || placeholder} />
	</a>
	<div className="bcravatar__content">{children}</div>
</div>;
```

### useBCRProfile

```javascript
import { useBCRProfile } from 'react-bcravatar';
///
const [profile, error] = useBCRProfile({
	network,
	address,
});
///
<pre className={classes.join(' ')} {...props}>
	{loading
		? 'Loading...'
		: error
		? JSON.stringify(error, null, 4)
		: JSON.stringify(profile, null, 4)}
</pre>;
```
