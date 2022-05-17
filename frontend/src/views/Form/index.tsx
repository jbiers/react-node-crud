import { Header } from "../../components/Header"
import { Navbar } from "../../components/Navbar"
import { FormEvent, useEffect, useState } from "react";

import axios from 'axios';

interface State {
    id: number;
    uf: string;
    string?: string;
}

export function Form() {
    const [states, setStates] = useState<State[]>([]);
    const [fields, setFields] = useState({
        textName: '',
        textAge: 0,
        cmbUF: 0,
    });

    function handleInputChange(event: FormEvent<HTMLInputElement> | FormEvent<HTMLSelectElement>) {
        setFields({...fields, [event.currentTarget.name]: event.currentTarget.value})
    }

    function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.post('http://localhost:3031/register', fields)
        .then(response => {
            alert(response.data.data.length + ' registrations');
        })
    }

    useEffect(() => {
        axios.get('http://localhost:3030/states')
        .then(response => {
            setStates(response.data);
        })
    }, []);

    return (
        <div>
            <Header title="Form" />
            <Navbar />
            

            <form onSubmit={handleFormSubmit}>
                <fieldset>
                <legend>
                    <h2>Sign in data</h2>
                </legend>
 
                <div>
                    <label>Name:
                        <input type="text" name="textName" id="textName" onChange={handleInputChange} />
                    </label>
                </div>
 
                <div>
                    <label>Age:
                        <input type="number" name="textAge" id="textAge" onChange={handleInputChange} />
                    </label>
                </div>
 
                <div>
                    <label>UF:
                        <select name="cmbUF" id="cmbUF" onChange={handleInputChange}>
                            <option value="0">Choose an option:</option>
                            {states.map(state => (<option key={state.id} value={state.id}>{state.uf}</option>))}
                        </select>
                    </label>
                </div>
                <input type="submit" value="Save" />
                </fieldset>
            </form>
        </div>
    )
}