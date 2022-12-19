import { useEffect, useRef } from 'react'
import MainLayout from 'layouts/MainLayout'
import './LazeLoft.scss'

const LazeLoft = () => {
	const videoRef = useRef<HTMLVideoElement>(null)

	useEffect(() => {
		videoRef?.current?.play()
	}, [videoRef])

	return (
		<MainLayout title="Laze Loft" className="laze-loft">
			<div className="container">
				<div className="title-logo">
					<img src="/img/title-logo-new.png" alt="laze-loft" className="laze-loft-logo" />
					<img
						src="/img/background-no-screen.png"
						alt="background"
						className="background"
					/>
					<video ref={videoRef} className="video-background" muted>
						<source src="/videos/laze-loft.mp4" type="video/mp4" />
					</video>
					<span className="place-text">Explore Funky Utilities</span>
					<span className="space-text"></span>
				</div>
				<div className="title"></div>
				<div className="description"></div>
			</div>
		</MainLayout>
	)
}

export default LazeLoft
