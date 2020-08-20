import React from 'react'
import propTypes from 'prop-types'

import InfoCard from './InfoCard'

import Spinner from '../img/spinner.gif'


const CharacterGrid = (props) => {
    //ternary : is state is still loading from app.js  ?
    return props.isLoading ?
    //if so then show spinner
         <div className='center'>  <img src={Spinner} alt='spinner'></img> </div> :
    // otherwhys map thru large array and take info from each array, put it in our card format, and return a new array of our cards
    <section className='cards'>
        {/*  need a  unique key prop for react list and thats what .map does */}
            {props.items.map(item=>
                    // our JSX card for each character object
                (<InfoCard key={item.char_id} item={item}/>)
            )}

    </section>

}

// typechecking with proptypes
 CharacterGrid.propTypes = {
    items: propTypes.array,
    isLoading: propTypes.bool
}



export default CharacterGrid