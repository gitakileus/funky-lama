export const shortenAddress = (walletAddress: string) => {
	return walletAddress.slice(0, 3) + '...' + walletAddress.slice(walletAddress.length - 3)
}
