import { useMemo } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import SolanaIcon from 'assets/icons/solana.svg'

type FunkyBoxProps = {
	imageUrl: string
	videoUrl: string
	value: number
}

type Props = {
	box: FunkyBoxProps
	isOpen: boolean
	onClick: () => void
}

const FunkyBox = ({ box, isOpen, onClick }: Props) => {
	const { imageUrl, value } = box

	const wallet = useWallet()
	const isConnected = useMemo(() => {
		return !!wallet.publicKey
	}, [wallet.publicKey])

	return (
		<div className="box">
			<img src={imageUrl} alt="" className="card" />
			<div className="profile">
				<div className="solana-logo">
					<img src={SolanaIcon} alt="" width="40px" height="40px" />
				</div>
				<span>{value}</span>
				{!isConnected ? (
					<WalletMultiButton className="wallet-connect">Select Wallet</WalletMultiButton>
				) : (
					<button className="wallet-connect" onClick={onClick}>
						{isOpen ? 'Processing...' : 'Open'}
					</button>
				)}
			</div>
		</div>
	)
}
export default FunkyBox
