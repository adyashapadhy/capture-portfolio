import React from 'react';
//Import Icons 
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

import styled from 'styled-components';
//Styles 
import {About, Description,Image} from "../Styles";
const ServicesSection = () => {
    return(
        <Services>
            <Description>
                <h2>High <span>Quality</span> services</h2>
                <Cards>
                 <Card>
                    <div className="icon">
                        <img alt="clock" src={clock}/>
                        <h3>Efficient</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet</p>
                </Card>  
                <Card>
                    <div className="icon">
                        <img alt="diaphragm" src={diaphragm}/>
                        <h3>Diaphragm</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet</p>
                </Card>   
                <Card>
                    <div className="icon">
                        <img alt = "money" src={money}/>
                        <h3>Money</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet</p>
                </Card>   
                <Card>
                    <div className="icon">
                        <img alt="teamwork" src={teamwork}/>
                        <h3>Teamwork</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet</p>
                </Card>    
                </Cards>
            </Description>
            <Image>
                <img alt="camera " src={home2}/>
            </Image>
        </Services>    
        )
}

const Services = styled(About)`
h2 {
    padding-bottom: 5rem;
}
p{
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
}
`;
const Cards = styled.div`
    
    display:flex;
    flex-wrap: wrap;
`;
const Card = styled.div`
    flex-basis: 15rem;
    .icon{
        
        display: flex;
        align-items: center;
        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`
export default ServicesSection;
