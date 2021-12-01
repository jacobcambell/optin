import React from 'react'

const fieldStyle = 'border border-gray-500 w-full p-1 mb-3';
const labelStyle = 'font-bold';

export default function Form() {
    return (
        <div className="w-1/3 m-auto my-5">
            <p className={labelStyle}>Email</p>
            <input type="text" className={fieldStyle} />

            <p className={labelStyle}>First Name</p>
            <input type="text" className={fieldStyle} />

            <p className={labelStyle}>Last Name</p>
            <input type="text" className={fieldStyle} />

            <p className={labelStyle}>Phone</p>
            <input type="text" className={fieldStyle} />

            <p className={labelStyle}>Address</p>
            <input type="text" className={fieldStyle} />

            <p className={labelStyle}>Zip Code</p>
            <input type="text" className={fieldStyle} />

            <p className={labelStyle}>Country</p>
            <input type="text" className={fieldStyle} />

            <button className="bg-blue-600 text-white block w-full py-2">Submit</button>
        </div>
    )
}
