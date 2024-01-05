import React, {useState} from "react"

function Form({addTodo}) {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);

        setValue("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input id='input' type='text' placeholder='What will you do today?' onChange={(e) => setValue(e.target.value)} value={value}/>
            <button type='submit' id='button'>Submit</button>
        </form>
    )
}

export default Form;