import React from 'react';
import api from './api.js';

class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            responseData : []
            }
    }

    async fetchData(){
        try {
            if(this.props.city === ""){
                alert("Enter a city name!")
            }
            else{
            const rawData = await api.getData(this.props.city.trim(), this.props.state);
            const parsedData = await api.parseData(rawData);
            await this.setState({responseData : parsedData});
            }

        } catch (error) {
            console.log(error);
        }
    }

    render(){
        return <React.Fragment><button className="border-4 border-cyan-200 bg-cyan-200 rounded-lg mt-2 transition-all hover:bg-cyan-500 hover:border-cyan-500 hover:scale-110 duration-150" onClick= {() => this.fetchData()} >
            Search
            </button>
            <br></br>
            <div className="flex text-center flex-col mt-14 items-center">
            <div className="min-w-fit w-1/4 bg-cyan-200 shadow-2xl rounded-xl transform transition-all duration-300 hover:scale-125 ">
            {this.state.responseData.map((temp) => 
            {return <div className=" border-b-black border-b-4 mt-5 rounded-lg hover:scale-y-110 duration-150"key={temp.id}>
                {temp.id}: <h1 className="text-lg overflow-auto">{temp.temperature}&deg;F </h1> <br></br>
                </div>})}
            </div>
            </div>
            </React.Fragment> 
        }
}


export default Button;