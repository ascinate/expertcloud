import React from "react";

const SwitchToggleNext = ({ isOn, handleToggleNew }) => {
    return (
      <>
        <input
          checked={isOn}
          onChange={handleToggleNew}
          className="react-switch-checkbox"
          id={`react-switch-new-next`}
          type="checkbox"
        />
        <label
          style={{ background: isOn && '#5746EC' }}
            className="react-switch-label"
            htmlFor={`react-switch-new-next`}
        >
        
          <span className={`react-switch-button`} />
        </label>
      </>
    );
  };
  
  export default SwitchToggleNext;