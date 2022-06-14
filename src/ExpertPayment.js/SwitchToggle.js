import React from "react";

const SwitchToggle = ({ isOn, handleToggle }) => {
    return (
      <>
        <input
          checked={isOn}
          onChange={handleToggle}
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
        />
        <label
          style={{ background: isOn && '#5746EC' }}
            className="react-switch-label"
            htmlFor={`react-switch-new`}
        >
        
          <span className={`react-switch-button`} />
        </label>
      </>
    );
  };
  
  export default SwitchToggle;