import React from 'react';
import cloud from 'assets/img/cloud.png';
import WeaUpArrow from 'assets/img/WeaUpArrow.png';
import WeArrow from 'assets/img/WeArrow.png';
import AddSymbol from 'assets/img/AddSymbol.png';
import CityImage from 'assets/img/CityImage.png';
import { WEATHER_API_URL } from 'config/app';
import axios from 'axios';

class HomePage extends React.Component { 
    
    state = {
        error: false,
        data: {},
    }

    componentDidMount() {
        axios.get(WEATHER_API_URL)
        .then((response) => {
            this.setState({ data:response.data });
        }).catch((error) => {
            this.setState({ error: true });
        });
    }

    render() {
        if(this.state.error || Object.keys(this.state.data).length === 0) {
            return(<div>...Loading</div>)
        }
        const { name } = this.state.data;
        const { temp, temp_min, temp_max } = this.state.data.main;
        return(
            <div className="weather-wrapper">
                <div className="weather-inner-wrap">
                    <div className="spacer-50"></div>
                    <div className="tempreature-wrapper">
                        <p className="city-name">{ name }</p>
                        <img className="center-image" src={cloud} width="150" height="150" />
                        <p className="city-name" style={{'color':'#3BB4FA', 'fontSize':'20px', 'padding':'0','margin':'0'}}>{ temp }<sup>o</sup></p>
                        <p className="city-name" style={{'color':'#3BB4FA', 'fontSize':'10px'}}>HAZE</p>
                        <div className="tempreature-control">
                            <div className="temp-min-div">
                                <img src={WeArrow} width="30" height="30" /><br/>
                                <span>{ temp_min }</span><br/>
                                <span className="temp-min-value">Min</span>
                            </div>
                            <div className="temp-max-div">
                                <img src={WeaUpArrow} width="30" height="30" /><br/>
                                <span>{ temp_max }</span><br/>
                                <span className="temp-max-value">Min</span>
                            </div>
                        </div>
                    </div>
                    <div className="city-wrapper">
                        <p className="city-name">Add City</p>
                        <img className="center-image add-city" src={AddSymbol} />
                        <img className="city-thumb" src={CityImage} height="80" />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;