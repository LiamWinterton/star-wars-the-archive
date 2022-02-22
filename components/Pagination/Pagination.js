import { useRouter } from "next/router"

import Button from '../Button/Button'

import styles from './Pagination.module.sass'

export default function Pagination(props) {
	const router = useRouter()

	const { previous, next } = props

	const previousPage = previous ? new URL(previous).searchParams.get("page") : false
	const nextPage = next ? new URL(next).searchParams.get("page") : false

	const base = router.pathname

	return(
		<div className={styles.pagination}>
			{previousPage &&
				<Button href={`${base}?page=${previousPage}`} text="Previous" />
			}
			{nextPage !== false &&
				<Button href={`${base}?page=${nextPage}`} text="Next" />
			}
		</div>
	)
}