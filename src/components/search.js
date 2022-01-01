import React from 'react'
import Button from './button'

function SearchBar() {
    let [value, setValue] = React.useState('')
    
    return <div><input type = "text" 
    placeholder="Enter a city"
    value={value} onChange={e => setValue(e.target.value)}></input>
    <Button data={value}/>
    </div>
}
export default SearchBar;