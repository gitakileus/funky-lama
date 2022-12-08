import { useMemo } from 'react'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import {
	PhantomWalletAdapter,
	SlopeWalletAdapter,
	SolflareWalletAdapter,
	SolletWalletAdapter,
} from '@solana/wallet-adapter-wallets'
import type { WalletError } from '@solana/wallet-adapter-base'
import '@solana/wallet-adapter-react-ui/styles.css'
import 'react-toastify/dist/ReactToastify.css'
import { devnetRPC, mainnetRPC } from 'constant'
import { ToastContainer } from 'react-toastify'
import Router from 'routes'

const network = WalletAdapterNetwork.Mainnet

const App = () => {
	// @ts-ignore
	const endpoint = network === WalletAdapterNetwork.Devnet ? devnetRPC : mainnetRPC
	const wallets = useMemo(
		() => [
			new PhantomWalletAdapter(),
			new SlopeWalletAdapter({ network }),
			new SolflareWalletAdapter({ network }),
			new SolletWalletAdapter({ network }),
		],
		[network] //eslint-disable-line
	)

	const walletConnectionError = (error: WalletError) => {
		console.log('Wallet Connection Error:', error)
	}
	return (
		<ConnectionProvider endpoint={endpoint}>
			<WalletProvider
				wallets={wallets}
				onError={walletConnectionError}
				autoConnect={true}
			>
				<WalletModalProvider>
					<Router />
					<ToastContainer style={{ fontSize: 14 }} />
				</WalletModalProvider>
			</WalletProvider>
		</ConnectionProvider>
	)
}

export default App
