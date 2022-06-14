import React from "react";
import MultiStep from "./FormWizard";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";  


const steps = [
    { component: <StepOne /> },
    { component: <StepTwo /> },
    { component: <StepThree /> },
    { component: <StepFour /> }
    
  ]
  const prevStyle = { background: '#33c3f0' }
  const nextStyle = { background: '#33c3f0' }

function RegisterSetps(){

    return(
        <>
        
        <MultiStep activeStep={0} steps={steps} prevStyle={prevStyle} nextStyle={nextStyle} />
        </>
    );
}
export default RegisterSetps;