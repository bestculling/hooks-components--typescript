import React, { Dispatch } from 'react'

interface GreetingProps {
	enteredName: string
	message: string
	greetingDispatcher: Dispatch<{ type: string; payload: string }>
}

// Functional Component
export default function Greeting(props: GreetingProps) {
	const onChangeName = (e: any) => {
		props.greetingDispatcher({
			type: 'enteredName',
			payload: e.target.value,
		})
		props.greetingDispatcher({
			type: 'message',
			payload: e.target.value,
		})
	}

	return (
		<div>
			<input value={props.enteredName} onChange={onChangeName} />
			<div>{props.message}</div>
		</div>
	)
}
