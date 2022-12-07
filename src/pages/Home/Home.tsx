import Header from 'layouts/Header'
import Footer from 'layouts/Footer'
import './Home.scss'

const Home = () => {
	return (
		<div className="home">
			<Header />
			<div className="main-page">
				<div className="container">
					<div className="image-banner">
						<div className="banner-logo">
							<img
								src="/img/title-logo.png"
								title="Funky Llamas - Laze, Party and Get High"
								alt=""
							/>
						</div>
						<div className="liamas-content">
							<div className="img-box">
								<img src="/img/liamas-5.png" className="img-origin" alt="" />
								<img src="/img/liamas-5-h.png" className="img-hover" alt="" />
							</div>
							<div className="img-box">
								<img src="/img/liamas-4.png" className="img-origin" alt="" />
								<img src="/img/liamas-4-h.png" className="img-hover" alt="" />
							</div>
							<div className="img-box">
								<img src="/img/liamas-3.png" className="img-origin" alt="" />
								<img src="/img/liamas-3-h.png" className="img-hover" alt="" />
							</div>
							<div className="img-box">
								<img src="/img/liamas-2.png" className="img-origin" alt="" />
								<img src="/img/liamas-2-h.png" className="img-hover" alt="" />
							</div>
							<div className="img-box">
								<img src="/img/liamas-1.png" className="img-origin" alt="" />
								<img src="/img/liamas-1-h.png" className="img-hover" alt="" />
							</div>
							<span className="hi-there">
								<img src="/img/hi.svg" alt="" />
							</span>
						</div>
						<p className="banner-title">Funkiest NFT Collection</p>
					</div>
					<div className="home-content">
						<p>Laze, Party and Get High on this Funky Collection of 4500 Llamas</p>
					</div>
				</div>
			</div>
			<img src="/img/footer-img.png" alt="footer" className="footer-image" />
			<Footer />
		</div>
	)
}

export default Home
