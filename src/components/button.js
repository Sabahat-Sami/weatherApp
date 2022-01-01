import React from 'react';
import api from './api.js';



class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {responseData : []}
    }

    async fetchData(){
        console.log(this.props.data)
        const cityID = await api.getCityID(this.props.data);
        console.log(cityID);
        const rawData = await api.getData(cityID);
        const parsedData = await api.parseData(rawData);
        await this.setState(this.state.responseData = parsedData);
    }

    render(){

        return <div><button onClick= {() => this.fetchData()}>Click me</button>
            <br></br>
            <div>
            {this.state.responseData.map((temp) => 
            {return <div className="temp" key={temp.id}>
                {temp.id} {temp.temperature}&deg;F
                </div>})}
            </div>
            </div>
    }
}

export default Button;