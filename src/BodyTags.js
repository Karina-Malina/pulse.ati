import React from 'react';
import './bodyTags.css';
import positive from './Image/positive.png';
import negative from './Image/negative.png';
import vopros from './Image/vopros.png';
import predl from './Image/predl.png';

const BodyTags = () => {
    return (
        <div className="common-column">
            <div className="each-column"></div>
            <div className="each-column">
                <div className="head-block">
                    <img src={positive} className="logo-block"></img>
                    <h4>Позитив</h4>
                </div>
                <div align="justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id nibh ex. Integer eget purus nisi. Pellentesque pellentesque accumsan dui, sed lobortis nisi mattis ac. Nulla lacus libero, laoreet vel convallis et, condimentum sit amet magna. Duis interdum enim at dolor rhoncus, quis aliquet nisl sollicitudin. Proin efficitur sit amet elit a vehicula. Suspendisse vitae eros id libero lacinia lacinia 
                </div>
            </div>
            <div className="each-column">
                <div className="head-block">
                    <img src={negative} className="logo-block"></img>
                    <h4>Негатив</h4>
                </div>
                <div align="justify">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id nibh ex. Integer eget purus nisi. Pellentesque pellentesque accumsan dui, sed lobortis nisi mattis ac. Nulla lacus libero, laoreet vel convallis et, condimentum sit amet magna. Duis interdum enim at dolor rhoncus, quis aliquet nisl sollicitudin. Proin efficitur sit amet elit a vehicula. Suspendisse vitae eros id libero lacinia lacinia
                </div>
            </div>
            <div className="each-column">
                <div className="head-block">
                    <img src={predl} className="logo-block"></img>
                    <h4>Предложения</h4>
                </div>
                <div align="justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id nibh ex. Integer eget purus nisi. Pellentesque pellentesque accumsan dui, sed lobortis nisi mattis ac. Nulla lacus libero, laoreet vel convallis et, condimentum sit amet magna. Duis interdum enim at dolor rhoncus, quis aliquet nisl sollicitudin. Proin efficitur sit amet elit a vehicula. Suspendisse vitae eros id libero lacinia lacinia
                </div>
            </div>
            <div className="each-column">
                <div className="head-block">
                    <img src={vopros} className="logo-block"></img>
                    <h4>Вопросы</h4>
                </div>
                <div align="justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id nibh ex. Integer eget purus nisi. Pellentesque pellentesque accumsan dui, sed lobortis nisi mattis ac. Nulla lacus libero, laoreet vel convallis et, condimentum sit amet magna. Duis interdum enim at dolor rhoncus, quis aliquet nisl sollicitudin. Proin efficitur sit amet elit a vehicula. Suspendisse vitae eros id libero lacinia lacinia 
                </div>
            </div>
            <div className="each-column"></div>
        </div>
    );
}

export default BodyTags;