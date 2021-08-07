 import React from 'react';
 import ReactDOM from 'react-dom';
 import './index.css';
 import map_work from './map_work.jpg';
 import map_back_work from './map_back_work.jpg';
 import {Warway} from './warway.js';
 
const Main = <div className="container"><div className="flipper" id="target"><div className="front"><a href="#target" className="home button">перевернуть</a><img src={map_work} alt="" /><div className="map_info"><a href="gorchakov.html"><span className="portrait tooltip"><span className="tooltiptext">гв. капитан Горчаков<br />Григорий Степанович<br /><br /><small>нажмите на портрет, чтобы узнать больше</small></span></span></a><a href="brigada.html"><span className="about_brigada"></span></a><div id="war_way"><Warway /></div></div></div><div className="back"><a href="#close" className="close button">перевернуть</a><img src={map_back_work} alt="" />  </div></div></div>

ReactDOM.render(
  Main,
  document.getElementById('root')
);
