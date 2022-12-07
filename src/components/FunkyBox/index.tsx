// import { useMemo } from 'react';
// import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
// import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import SolanaIcon from 'assets/icons/solana.svg'

type FunkyBoxProps = {
	imageUrl: string
	videoUrl: string
	value: number
}

type Props = {
	box: FunkyBoxProps
}

const FunkyBox = ({ box }: Props) => {
	const { imageUrl, videoUrl, value } = box

	// const { connection } = useConnection();
	// const wallet = useWallet();
	// const isConnected = useMemo(() => {
	// 	return !!wallet.publicKey;
	// }, [wallet.publicKey]);

	return (
		<div className="box">
			<img src={imageUrl} alt="" className="card" />
			<div className="profile">
				<div className="solana-logo">
					<img src={SolanaIcon} alt="" width="40px" height="40px" />
				</div>
				<span>{value}</span>
				{/* <WalletMultiButton className='wallet-connect'>
					{!isConnected ? 'Select Wallet' : 'Open'}
				</WalletMultiButton> */}
			</div>
		</div>
	)
}
export default FunkyBox
