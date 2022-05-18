import { Header } from "../../components/Header"
import { Navbar } from "../../components/Navbar"
import { FormEvent, useState } from "react";

import axios from 'axios';

export function Form() {
    const [fields, setFields] = useState({
        name: '',
        author: '',
        genre: '',
        pages: 0,
    });

    function handleInputChange(event: FormEvent<HTMLInputElement> | FormEvent<HTMLSelectElement>) {
        setFields({...fields, [event.currentTarget.name]: event.currentTarget.value});
    }

    function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.post('http://localhost:3031/books', fields)
        .then(response => {
            alert(response.data.book);
            console.log(response.data.book);
        })
    }

    /*useEffect(() => {
        axios.get('http://localhost:3030/states')
        .then(response => {
            setStates(response.data);
        })
    }, []);*/

    return (
        <div>
            <Header title="Books" />
            <Navbar />
            

            <form onSubmit={handleFormSubmit}>
                <fieldset>
                <legend>
                    <h2>New book data</h2>
                </legend>
 
                <div>
                    <label>Name:
                        <input type="text" name="name" id="name" onChange={handleInputChange} />
                    </label>
                </div>

                <div>
                    <label>Author:
                        <input type="text" name="author" id="author" onChange={handleInputChange} />
                    </label>
                </div>

                <div>
                    <label>Genre:
                        <input type="text" name="genre" id="genre" onChange={handleInputChange} />
                    </label>
                </div>
 
                <div>
                    <label>Pages:
                        <input type="number" name="pages" id="pages" onChange={handleInputChange} />
                    </label>
                </div>
                
                <input type="submit" value="Save" />
                </fieldset>
            </form>
        </div>
    )
}