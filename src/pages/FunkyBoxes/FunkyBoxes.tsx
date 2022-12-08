import { useEffect, useRef, useState } from 'react'
import MainLayout from 'layouts/MainLayout'
import FunkyBox from 'components/FunkyBox'
import './FunkyBoxes.scss'

const boxes = [
	{ imageUrl: '/img/lootbox-1.jpg', videoUrl: '/videos/lootbox-1.mp4', value: 0.1 },
	{ imageUrl: '/img/lootbox-2.jpg', videoUrl: '/videos/lootbox-2.mp4', value: 0.2 },
	{ imageUrl: '/img/lootbox-3.jpg', videoUrl: '/videos/lootbox-3.mp4', value: 0.3 },
]

const FunkyBoxes = () => {
	const [openedBox, setOpenedBox] = useState<number>(-1)
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const videoRef = useRef<HTMLVideoElement>(null)

	const handleSelectBox = (i: number) => {
		setOpenedBox(i)
	}

	useEffect(() => {
		if (openedBox === -1) return
		videoRef.current?.play()
		setTimeout(() => {
			setOpenedBox(-1)
			handleShowResult()
		}, 7000)
	}, [openedBox])

	const handleShowResult = () => {
		setIsOpen(true)
		setTimeout(() => {
			setIsOpen(false)
		}, 2000)
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
				</div>
			</div>
			{openedBox !== -1 ? (
				<div className="video-box">
					<video ref={videoRef}>
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
