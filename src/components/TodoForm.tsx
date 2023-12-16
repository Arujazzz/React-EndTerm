import React, {useRef} from "react";

interface TodoFormProps {
	onAdd(title: string): void
}

export const TodoForm: React.FunctionComponent<TodoFormProps> = (props) => {


	const ref = useRef<HTMLInputElement>(null)
	

	const keyPressHandler = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter'){
			props.onAdd(ref.current!.value);
			ref.current!.value = '';
		}
	}

	return (
		<div className="input-field mt2">
			<input 
			onKeyPress={keyPressHandler}
			ref={ref}
			type="text" 
			id="title" 
			placeholder="Enter the name"/>
			<label htmlFor="title" className="active">Enter the name</label>
		</div>
	)
}