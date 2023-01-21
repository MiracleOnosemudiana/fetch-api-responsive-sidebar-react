import React, { useState, useEffect } from 'react';
import "./ProfileCard.css"

const url = 'https://randomuser.me/api'

const ProfileCard = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data.results)
        setUser(data.results)
      })
      // .catch(err => console.log(err.message))
  }, [])

  return (
    <div className='card'>
      {user.map(person => (
        <div key={person.login.uuid}>
          <div className='img-container'>
            <div className='images'>
              <img src={person.picture.large} alt="" className='image' />
            </div>
          </div>


          <div className='mt-5 d-sm-flex justify-content-around text-start ms-3 mx-sm-0'>
            <div className='mb-5'>
              <h4>Personal details</h4>
              <h6>FIRST NAME: <span style={{ fontWeight: 300 }}>  {person.name.first}</span> </h6>
              <h6>LAST NAME: <span style={{ fontWeight: 300 }}> {person.name.last}</span>  </h6>
              <h6>TITLE: <span style={{ fontWeight: 300 }}> {person.name.title}</span>  </h6>
              <h6>EMAIL: <span style={{ fontWeight: 300 }}> {person.email}</span>  </h6>
              <h6>PHONE: <span style={{ fontWeight: 300 }}> {person.phone}</span>  </h6>

            </div>
            <div className='vr'></div>
            <div>
              <h4>Login details</h4>
              <h6>PASSWORD: <span style={{ fontWeight: 300 }}> {person.login.password}</span>  </h6>
              <h6>USERNAME: <span style={{ fontWeight: 300 }}> {person.login.username}</span>  </h6>
              <h6>MD5: <span style={{ fontWeight: 300 }}>{person.login.md5}</span>  </h6>
            </div>
          </div>
        </div>
      ))
      }
    </div>
  );
}

export default ProfileCard;
