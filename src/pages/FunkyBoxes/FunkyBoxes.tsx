import { useEffect, useRef, useState } from 'react'
import MainLayout from 'layouts/MainLayout'
import FunkyBox from 'components/FunkyBox'
import { DiscordIcon, TwitterIcon } from 'components/SVGIcons'
import { shortenAddress } from 'utils'
import './FunkyBoxes.scss'

const boxes = [
	{ imageUrl: '/img/lootbox-1.jpg', videoUrl: '/videos/lootbox-1.mp4', value: 0.1 },
	{ imageUrl: '/img/lootbox-2.jpg', videoUrl: '/videos/lootbox-2.mp4', value: 0.2 },
	{ imageUrl: '/img/lootbox-3.jpg', videoUrl: '/videos/lootbox-3.mp4', value: 0.3 },
]

const FunkyBoxes = () => {
	const [openedBox, setOpenedBox] = useState<number>(-1)
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [recentOpens, setRecentOpens] = useState<Array<any>>([
		{
			boxId: 1,
			walletAddress: '4FBqjSUBsYrkV2nSaSQ2fiythmSXRrQhXX3bN1A34M6R',
			betAmount: 0.5,
			winAmount: 1,
			time: '2022-12-12 3:00:00',
		},
		{
			boxId: 0,
			walletAddress: '4FBqjSUBsYrkV2nSaSQ2fiythmSXRrQhXX3bN1A34M6R',
			betAmount: 0.5,
			winAmount: 1,
			time: '2022-12-12 2:00:00',
		},
		{
			boxId: 0,
			walletAddress: '4FBqjSUBsYrkV2nSaSQ2fiythmSXRrQhXX3bN1A34M6R',
			betAmount: 0.5,
			winAmount: 1,
			time: '2022-12-12 2:00:00',
		},
		{
			boxId: 1,
			walletAddress: '4FBqjSUBsYrkV2nSaSQ2fiythmSXRrQhXX3bN1A34M6R',
			betAmount: 0.5,
			winAmount: 1,
			time: '2022-12-12 2:00:00',
		},
		{
			boxId: 2,
			walletAddress: '4FBqjSUBsYrkV2nSaSQ2fiythmSXRrQhXX3bN1A34M6R',
			betAmount: 0.5,
			winAmount: 1,
			time: '2022-12-12 2:00:00',
		},
		{
			boxId: 1,
			walletAddress: '4FBqjSUBsYrkV2nSaSQ2fiythmSXRrQhXX3bN1A34M6R',
			betAmount: 0.5,
			winAmount: 1,
			time: '2022-12-12 2:00:00',
		},
		{
			boxId: 0,
			walletAddress: '4FBqjSUBsYrkV2nSaSQ2fiythmSXRrQhXX3bN1A34M6R',
			betAmount: 0.5,
			winAmount: 1,
			time: '2022-12-12 2:00:00',
		},
		{
			boxId: 1,
			walletAddress: '4FBqjSUBsYrkV2nSaSQ2fiythmSXRrQhXX3bN1A34M6R',
			betAmount: 0.5,
			winAmount: 1,
			time: '2022-12-12 2:00:00',
		},
		{
			boxId: 2,
			walletAddress: '4FBqjSUBsYrkV2nSaSQ2fiythmSXRrQhXX3bN1A34M6R',
			betAmount: 0.5,
			winAmount: 1,
			time: '2022-12-12 2:00:00',
		},
		{
			boxId: 0,
			walletAddress: '4FBqjSUBsYrkV2nSaSQ2fiythmSXRrQhXX3bN1A34M6R',
			betAmount: 0.5,
			winAmount: 1,
			time: '2022-12-12 2:00:00',
		},
	])
	const videoRef = useRef<HTMLVideoElement>(null)

	//triggers when a user select the box to open
	const handleSelectBox = (i: number) => {
		setOpenedBox(i)
	}

	useEffect(() => {
		if (openedBox === -1) return
		videoRef.current?.play()
	}, [openedBox])

	const handleVideoFinished = () => {
		setOpenedBox(-1)
		handleShowResult()
	}

	const handleShowResult = () => {
		setIsOpen(true)
		setTimeout(() => {
			setIsOpen(false)
		}, 3000)
	}

	//fetch opened boxes data from chain
	const fetchDataFromChain = () => {}

	const timeDiff = (time: string) => {
		const startDate = new Date(time)
		const endDate = new Date()
		let diff = endDate.getTime() - startDate.getTime()
		diff = Math.floor(diff / 1000)
		if (diff < 60) return 'a few seconds ago'
		if (diff < 120) return 'a minute ago'
		if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`
		if (diff < 7200) return 'an hour ago'
		if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`
		if (diff < 172800) return 'a day ago'
		return 'many days ago'
	}

	return (
		<MainLayout title="Funky Boxes" className="funky-boxes">
			<div className="container">
				<h1 className="title">Open Lotties to win up to 100X in the SOL</h1>
				<h5 className="description">No house edge, with 100% RTP.</h5>
				<div className="boxes">
					{boxes.map((box, index) => (
						<FunkyBox
							box={box}
							key={index}
							isOpen={index === openedBox}
							onClick={() => handleSelectBox(index)}
						/>
					))}
				</div>
				<h3 className="responsive">Open Responsibly</h3>
				<div className="recent-open">
					<h2>Recent Opens</h2>
					<div className="recent-opened-boxes">
						{recentOpens.map((item, index) => (
							<div key={index}>
								<img src={boxes[item.boxId].imageUrl} alt="" width={54} height={54} />
								<p>
									{shortenAddress(item.walletAddress)} opened {item.betAmount} SOL and won{' '}
									{item.winAmount} SOL
								</p>
								<span>{timeDiff(item.time)}</span>
							</div>
						))}
					</div>
				</div>
				<div className="divider" />
				<span className="gradient-text">LOOTIES</span>
				<div className="social-links">
					<a href="https://discord.com">
						<DiscordIcon />
					</a>
					<a href="https://twitter.com">
						<TwitterIcon />
					</a>
				</div>
				<p className="copyright">&copy;2022 Looties, All rights reserved.</p>
			</div>
			{openedBox !== -1 ? (
				<div className="video-box">
					<video ref={videoRef} onEnded={handleVideoFinished}>
						<source src={boxes[openedBox].videoUrl} type="video/mp4" />
					</video>
				</div>
			) : (
				<></>
			)}
			{isOpen ? (
				<div className="result-modal" onClick={() => setIsOpen(false)}>
					<div className="modal-content">Sorry you lost, better luck next time</div>
				</div>
			) : (
				<></>
			)}
		</MainLayout>
	)
}

export default FunkyBoxes
