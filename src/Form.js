import React, {useState} from "react"

function Form({addTodo}) {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        if (value === '') {
            e.preventDefault();
        } else {
            e.preventDefault();
            addTodo(value);
    
            setValue("");
        }
    }
    return (
        <form onSubmit={handleSubmit} className='formDiv'>
            <input id='input' className='formInput' type='text' placeholder='What will you do today?' onChange={(e) => setValue(e.target.value)} value={value} autoComplete="off"/>
            <button type='submit' className='formButton'>Submit</button>
        </form>
    )
}

export default Form;