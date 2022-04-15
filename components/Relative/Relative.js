import React from "react"

export default function Relative(props) {
	const child = (
		<>
			<div>
				{props.content}
			</div>
			<div>
				{props.backgroundImage}
			</div>
		</>
	)

	return (
		<>
			{React.cloneElement(props.wrapper, {}, child)}
		</>
	)
}