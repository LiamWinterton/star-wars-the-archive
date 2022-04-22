import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/Layout/Layout'
import Section from '../components/Layout/Section'

export default function Home() {
	return (
		<>
			<Head>
				<title>Star Wars: The Archive</title>
				<meta name="description" content="A next.js site archiving information about various parts of the Star Wars universe!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<Section title="The History of Star Wars">
					<div className="prose mx-auto">
						<p>Cursus augue tincidunt blandit leo porttitor nunc etiam condimentum morbi. Posuere consectetur pretium malesuada sem nulla ultricies nunc. Maecenas gravida tortor egestas sollicitudin diam. Erat cursus lorem facilisi non, magnis in. Fringilla proin magna proin aliquet pellentesque eu hac eget ut. Ultricies amet mauris in aliquet fames dolor sit. Malesuada dictumst in ac, velit elit. Amet sit gravida non sapien, nulla a lacus viverra erat. Rhoncus laoreet aliquet facilisis pharetra tortor.</p>
					</div>
				</Section>

				<Section title="upcoming features">
					<div className='grid gap-6 md:grid-cols-2 md:gap-9 xl:grid-cols-4'>
						<div className="prose text-center mx-auto">
							<div className="mb-6">
								<Image src="https://via.placeholder.com/400x400" width={400} height={400} alt="" />
							</div>
							<h2 className="mt-0 uppercase">3D Lightsaber</h2>
							<p>Nam laoreet tortor eget maximus finibus. Nunc luctus vehicula sem, id gravida est condimentum sed. Phasellus viverra est vitae dolor tincidunt convallis. Ut varius erat nisl, at elementum justo finibus eu. Morbi eget bibendum ex. Donec a orci ac eros rutrum dictum. Aenean nec neque eget mauris efficitur suscipit.</p>
						</div>
						<div className="prose text-center mx-auto">
							<div className="mb-6">
								<Image src="https://via.placeholder.com/400x400" width={400} height={400} alt="" />
							</div>
							<h2 className="mt-0 uppercase">3D Lightsaber</h2>
							<p>Nam laoreet tortor eget maximus finibus. Nunc luctus vehicula sem, id gravida est condimentum sed. Phasellus viverra est vitae dolor tincidunt convallis. Ut varius erat nisl, at elementum justo finibus eu. Morbi eget bibendum ex. Donec a orci ac eros rutrum dictum. Aenean nec neque eget mauris efficitur suscipit.</p>
						</div>
						<div className="prose text-center mx-auto">
							<div className="mb-6">
								<Image src="https://via.placeholder.com/400x400" width={400} height={400} alt="" />
							</div>
							<h2 className="mt-0 uppercase">3D Lightsaber</h2>
							<p>Nam laoreet tortor eget maximus finibus. Nunc luctus vehicula sem, id gravida est condimentum sed. Phasellus viverra est vitae dolor tincidunt convallis. Ut varius erat nisl, at elementum justo finibus eu. Morbi eget bibendum ex. Donec a orci ac eros rutrum dictum. Aenean nec neque eget mauris efficitur suscipit.</p>
						</div>
						<div className="prose text-center mx-auto">
							<div className="mb-6">
								<Image src="https://via.placeholder.com/400x400" width={400} height={400} alt="" />
							</div>
							<h2 className="mt-0 uppercase">3D Lightsaber</h2>
							<p>Nam laoreet tortor eget maximus finibus. Nunc luctus vehicula sem, id gravida est condimentum sed. Phasellus viverra est vitae dolor tincidunt convallis. Ut varius erat nisl, at elementum justo finibus eu. Morbi eget bibendum ex. Donec a orci ac eros rutrum dictum. Aenean nec neque eget mauris efficitur suscipit.</p>
						</div>
					</div>
				</Section>
			</Layout>
		</>
	)
}
