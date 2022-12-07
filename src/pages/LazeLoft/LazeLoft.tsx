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
					<video ref={videoRef} className="video-background" loop muted>
						<source src="/videos/laze-loft.mp4" type="video/mp4" />
					</video>
					<span className="place-text">PLACE FOR THE TEXT</span>
					<span className="space-text">SPACE FOR THE TEXT</span>
				</div>
				<div className="title">LOREM IPSUM DOLOR SIT</div>
				<div className="description">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dignissim
						mauris. Etiam eleifend rutrum justo nec viverra. Etiam congue iaculis tortor,
						non ullamcorper sapien blandit sit amet. Suspendisse viverra feugiat
						scelerisque. Quisque sed neque vitae elit hendrerit ultricies. Maecenas risus
						orc.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dignissim
						mauris. Etiam eleifend rutrum justo nec viverra. Etiam congue iaculis tortor,
						non ullamcorper sapien blandit sit amet. Suspendisse viverra feugiat
						scelerisque. Quisque sed neque vitae elit hendrerit ultricies. Maecenas risus
						orc.
					</p>
				</div>
			</div>
		</MainLayout>
	)
}

export default LazeLoft
