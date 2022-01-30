import Image from 'next/image'
import styles from "./Hero.module.sass"

export default function Hero() {
	return (
		<div className={styles.hero}>
			<Image src="/hero-luke-2.png" alt="Luke Skywalker" width={600} height={600} />	
		</div>
	)
}