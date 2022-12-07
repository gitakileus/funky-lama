import MainLayout from 'layouts/MainLayout'
import FunkyBox from 'components/FunkyBox'
import './FunkyBoxes.scss'

const boxes = [
	{ imageUrl: '/img/lootbox-1.jpg', videoUrl: '/video/lootbox-1.mp4', value: 0.1 },
	{ imageUrl: '/img/lootbox-2.jpg', videoUrl: '/video/lootbox-2.mp4', value: 0.2 },
	{ imageUrl: '/img/lootbox-3.jpg', videoUrl: '/video/lootbox-3.mp4', value: 0.3 },
]

const FunkyBoxes = () => {
	return (
		<MainLayout title="Funky Boxes" className="funky-boxes">
			<div className="container">
				<h1 className="title">Open Lotties to win up to 100X in the SOL</h1>
				<h5 className="description">No house edge, with 100% RTP.</h5>
				<div className="boxes">
					{boxes.map((box, index) => (
						<FunkyBox box={box} key={index} />
					))}
				</div>
				<h3 className="responsive">Open Responsibly</h3>
				<div className="recent-open">
					<h2>Recent Opens</h2>
				</div>
			</div>
		</MainLayout>
	)
}

export default FunkyBoxes
