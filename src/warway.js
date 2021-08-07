import warpoints from './warpoint.json';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import oov2st from './oov2st.js';

export function Warway(props) {
	const points = props.warpoints;
	const listWarways = warpoints.map((warpoint, index) =>
		<div id={warpoint.pointname} key={index}>
			<span className={`${warpoint.pointname}_container tooltip`}>
            	<span className={warpoint.pointname.indexOf('blag') ? `medal ${warpoint.pointname}` : `medal ${warpoint.pointname.slice(0,4)}`}></span>
            	<span className="tooltiptext"><span dangerouslySetInnerHTML = {{ __html: warpoint.pointnote, }} /><br /><br /><small>нажмите на изображение, чтобы узнать больше</small></span>
          	</span>
          {warpoint.pointname}
          </div> 
	);
	return (
		<div>{listWarways}</div>
	);
};