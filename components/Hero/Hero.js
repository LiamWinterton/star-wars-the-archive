import Image from 'next/image'
import styles from "./Hero.module.sass"

export default function Hero() {
	return (
		<div className={styles.hero}>
			<h1 className={styles.text}>Star Wars:<br />The Archive</h1>
			<Image src="/hero-luke-2.png" alt="Luke Skywalker" width={600} height={600} priority />	
		</div>
	)
}