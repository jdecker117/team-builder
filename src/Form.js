import React from 'react'

export default function TeamForm(props) {

    const { values, update, submit} = props;

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault(); 
        submit();
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>UserName
                    <input
                    name='username'
                    type='text'
                    placeholder='Enter a username...'
                    maxLength="20"
                    value={values.username}
                    onChange={onChange}/>
                </label>
                <label>Email
                    <input
                    name='email'
                    type='email'
                    placeholder='Enter an email...'
                    value={values.email}
                    onChange={onChange}/>
                </label>
                <label>Role
                    <select value={values.role} name='role' onChange={onChange}>
                        <option disabled hidden value=''>--Select A Role --</option>
                        <option value="Front-End Engineer">Front-End Engineer</option>
                        <option value="Back-End Engineer">Back-End Engineer</option>
                        <option value="Data Scientist">Data Scientist</option>
                    </select>
                </label>

                <div className='submit'>
                    <button disabled={!values.username || !values.email || !values.role}>submit</button>
                </div>
            </div>
        </form>
    
    )
}