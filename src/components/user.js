import React, { useState } from 'react';
import "../css/user.css"

const User = (props) => {
    const [infoReveal, setReveal] = useState(false)
    const [btnTxt, setBtnTxt] = useState("More Info")

    const showInfo = () => {
        if (infoReveal) {
            setReveal(false)
            setBtnTxt("More Info")
        } else {
            setReveal(true)
            setBtnTxt("Hide Info")
        }
    }

    const { user } = props;
  
    return (
        <div className="address-card">
            <div className="pic">
                <img className="img" src={user.picture.thumbnail}/>
            </div>

            <div className="contact-info">
                <h3 className="name">{`${user.name.first} ${user.name.last}`}</h3>
                {infoReveal ? <ExpandInfo user={user} /> : ''}
            </div>

            <div className="button">
                <button onClick={showInfo}>{btnTxt}</button>
            </div>

        </div>
  )
}

const ExpandInfo = (props) => {
  const { user } = props;
  return (
    <p>
        Email:{` ${user.email}`}<br />
        Address: {` ${user.location.street.number} 
                    ${user.location.street.name}, 
                    ${user.location.city}, 
                    ${user.location.state}, 
                    ${user.location.street.postcode}`
                }<br />
        Phone:{` ${user.phone}`}<br />
    </p>
  )
}

export default User