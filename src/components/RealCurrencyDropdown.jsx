import React, {useState} from 'react';
import {Dropdown} from 'react-bootstrap';
import {CurrencyButton} from './StyledComponents';


function RealCurrencyDropdown(props) {
    const [deviceId, setDeviceId] = useState("USD");
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <CurrencyButton
            className="dropdownButton"
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
            >
            <b>{children} &#x25bc;</b>
        </CurrencyButton>
    ));

  if(props.numOfConnected <= 0){
    return(<h4>No Devices are connected</h4>)
  }
  else{
    return(
    <>
      <Dropdown style={{width:"30%", "display":"inline-block"}} onSelect={(e) => {setDeviceId(e); props.currentChanged(e)}}>
        <Dropdown.Toggle as={CustomToggle}>
          {deviceId}
        </Dropdown.Toggle>
    
        <Dropdown.Menu>
          <Dropdown.Item eventKey="USD" style={{'backgroundColor': "white", 'color':'black'}} active>USD</Dropdown.Item>
          <Dropdown.Item eventKey="EUR" style={{'backgroundColor': "white", 'color':'black'}} >EUR</Dropdown.Item>
          <Dropdown.Item eventKey="GBP" style={{'backgroundColor': "white", 'color':'black'}} >GBP</Dropdown.Item>
          <Dropdown.Item eventKey="JPY" style={{'backgroundColor': "white", 'color':'black'}} >JPY</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
    );
  }
}

export default RealCurrencyDropdown
