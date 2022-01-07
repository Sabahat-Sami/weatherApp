import React from 'react'
import Button from './button'

function SearchBar(props) {
    let [city, setCity] = React.useState('')
    
    return <React.Fragment><input type = "text" 
    placeholder="Enter a city"
    value={city} onChange={e => setCity(e.target.value)} className="text-2xl text-black bg-cyan-200  rounded-lg pl-3"></input>
    <div>
    <Button city={city} state={props.state}/>
    </div>
    </React.Fragment>
}
export default SearchBar;