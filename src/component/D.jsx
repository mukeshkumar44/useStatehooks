import React, {useState} from 'react'

const D = () => {
    const [firstName, setFirstName] = useState(''); 
    const [lastName, setLastName] = useState('');  
    const First = (e) => {
        setFirstName(e.target.value);
    };

    const Last = (e) => {
        setLastName(e.target.value);
    };

    const fullName = firstName && lastName ? `${firstName} ${lastName}` : '';
  return (
    <div className='ml-[200px] mt-14'>
       <form>
                <div>
                    <label>
                        First Name:
                        <input className='border-2 border-black'
                            type="text"
                            value={firstName}
                            onChange={First}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Last Name:
                        <input className='border-2 border-black'
                            type="text"
                            value={lastName}
                            onChange={Last}
                            required
                        />
                    </label>
                </div>
            </form>
          
            {fullName && <h2>Full Name: {fullName}</h2>}
            {!fullName && <p>Fill fullName </p>}
    </div>
  )
}

export default D
