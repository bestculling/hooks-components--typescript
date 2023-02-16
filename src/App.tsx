import { useState, useReducer } from 'react'
import Greeting from './GreetingFunctional'
import './App.css'

function App() {
	const reducer = (state: any, action: any) => {
		switch (action.type) {
			case 'enteredName':
				if (state.enteredName === action.payload) {
					return state
				}
				return { ...state, enteredName: action.payload }
			case 'message':
				return { ...state, message: `Hello, ${action.payload}` }
			default:
				throw new Error(`Invalid action type ${action.type}`)
		}
	}

	const initialState = {
		enteredName: '',
		message: '',
	}

	const [{ message, enteredName }, dispatch] = useReducer(
		reducer,
		initialState
	)

	const onchangeName = (e: any) => {
		dispatch({
			type: 'enteredName',
			payload: e.target.value,
		})
		dispatch({
			type: 'message',
			payload: e.target.value,
		})
	}

	return (
		<div className="App">
			<Greeting
				message={message}
				enteredName={enteredName}
				greetingDispatcher={dispatch}
			/>
		</div>
	)
}

export default App
