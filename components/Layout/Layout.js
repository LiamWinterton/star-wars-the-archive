import Header from '../Header/Header'

export default function Layout(props) {
	return (
		<>
			<Header />
			<main>
				{props.children}
			</main>
		</>
	)
}