import React, { useState } from 'react'

const fieldStyle = 'border border-gray-500 w-full p-1 mb-3';
const labelStyle = 'font-bold';

export default function Form() {

    const [email, setEmail] = useState<string>('')
    const [first_name, setFirstName] = useState<string>('')
    const [last_name, setLastName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [zip_code, setZipCode] = useState<string>('')
    const [country, setCountry] = useState<string>('')

    const handleSubmit = () => {

    }

    return (
        <div className="w-1/3 m-auto my-5">
            <p className={labelStyle}>Email</p>
            <input type="text" className={fieldStyle} onChange={e => { setEmail(e.target.value) }} />

            <p className={labelStyle}>First Name</p>
            <input type="text" className={fieldStyle} onChange={e => { setFirstName(e.target.value) }} />

            <p className={labelStyle}>Last Name</p>
            <input type="text" className={fieldStyle} onChange={e => { setLastName(e.target.value) }} />

            <p className={labelStyle}>Phone</p>
            <input type="text" className={fieldStyle} onChange={e => { setPhone(e.target.value) }} />

            <p className={labelStyle}>Address</p>
            <input type="text" className={fieldStyle} onChange={e => { setAddress(e.target.value) }} />

            <p className={labelStyle}>Zip Code</p>
            <input type="text" className={fieldStyle} onChange={e => { setZipCode(e.target.value) }} />

            <p className={labelStyle}>Country</p>
            <input type="text" className={fieldStyle} onChange={e => { setCountry(e.target.value) }} />

            <button className="bg-blue-600 text-white block w-full py-2" onClick={handleSubmit}>Submit</button>
        </div>
    )
}
