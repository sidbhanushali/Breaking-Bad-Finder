import React from 'react'
import propTypes from 'prop-types'

// destructure prop object so "item" is now coming from props.item
const InfoCard = ({ item }) => {



    return (
      <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={item.img} alt='' />
          </div>
          <div className='card-back'>
            <h1>{item.name}</h1>
            <ul>

              <li>
                <strong>Actor Name:</strong> {item.portrayed}
              </li>

              <li>
                <strong>Nickname:</strong> "{item.nickname}"
              </li>

              <li>
                <strong>Birthday:</strong> {item.birthday}
              </li>

              <li>
    <strong>Occupation:</strong> {item.occupation.map(job=>(<span>{job},  </span>))}
              </li>

              <li>
                <strong>Status:</strong> {item.status}
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  
// typecheck the item prop
InfoCard.propTypes = {
    items: propTypes.object
}

export default InfoCard
