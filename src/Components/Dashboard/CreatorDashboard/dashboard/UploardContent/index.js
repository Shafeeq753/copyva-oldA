import React, { useEffect, useState } from 'react';
import ContentInformation from './ContentInformation';
import ContentLink from './ContentLink';
import PermissionUpload from './PermissionUpload';
import Agreement from './Agreement';
import './uploardcontent.css';
import check from "../../../../../assets/check.svg"
import BackImg from '../../../../../assets/backIMg.svg'
import { IoMdClose } from "react-icons/io";
import BlubImg from "../../../../../assets/noun-light-blub.png"

const UploardContent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    ContentInformation: {},
    ContentLink: {},
    PermissionUpload: {},
    agreement: {},
  });

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };



  const [isActive, setIsActive] = useState(false);

  const handleSearchClick = () => {
    setIsActive(!isActive);
  };

  const handleBlurbClick = () => {
    setIsActive(true);
  };

  const handleCloseClick = () => {
    setIsActive(false);
  };



  const handleDataChange = (stepData, stepName) => {
    setFormData({
      ...formData,
      [stepName]: stepData,
    });
  };

  

    return (

        <>
        <div className='back_screens'>
            <h1><a href="/dashboard/home"><img src={BackImg} alt='BackImg' />Upload Content</a></h1>
            <div className='d-block d-md-none blurb_img  ' onClick={handleBlurbClick} ><img src={BlubImg} alt='BlubImg' /></div>
            
        </div>
        <div className='step_part'>
                {/* <div className="stepForm_part">
        <div className='step_divForm'><p onClick={() => setActiveStep(1)} className={currentStep === 1 ? 'active' : ''}>Content information</p><span>1</span></div>
        <div className='step_divForm'><p onClick={() => setActiveStep(2)} className={currentStep === 2 ? 'active' : ''}>Content links</p><span>2</span></div>
        <div className='step_divForm'><p onClick={() => setActiveStep(3)} className={currentStep === 3 ? 'active' : ''}>Permission to upload</p><span>3</span></div>
        <div className='step_divForm'><p onClick={() => setActiveStep(4)} className={currentStep === 4 ? 'active' : ''}>Agreement</p><span>4</span></div>
    </div> */}
                <div className="stepForm_part">
                    <div className={`step_divForm ${currentStep > 1 ? 'stepCompleted' : ''}`} onClick={() => setCurrentStep(1)}>
                        <p onClick={() => setActiveStep(1)} className={currentStep === 1 ? 'active' : ''}>Content information</p>
                        <span>{currentStep >= 2 ? <img src={check} /> : 1}</span>
                    </div>
                    <div className={`step_divForm ${currentStep > 2 ? 'stepCompleted' : ''}`} onClick={() => setCurrentStep(2)}>
                        <p onClick={() => setActiveStep(2)} className={currentStep === 2 ? 'active' : ''}>Content links</p>
                        <span>{currentStep >= 3 ? <img src={check} /> : 2}</span>
                    </div>
                    <div className={`step_divForm ${currentStep > 3 ? 'stepCompleted' : ''}`} onClick={() => setCurrentStep(3)}>
                        <p onClick={() => setActiveStep(3)} className={currentStep === 3 ? 'active' : ''}>Permission to upload</p>
                        <span>{currentStep >= 4 ? <img src={check} /> : 3}</span>
                    </div>
                    <div className={`step_divForm ${currentStep > 4 ? 'stepCompleted' : ''}`} onClick={() => setCurrentStep(4)}>
                        <p onClick={() => setActiveStep(4)} className={currentStep === 4 ? 'active' : ''}>Agreement</p>
                        <span>4</span>
                    </div>
                </div>
                <div className={`custom-form content_info ${isActive ? 'active' : ''} ${currentStep === 3 ? 'Content_infowrapper' : ''}`}>
                <div className="note_SecWrapper mobile_only">
                    <div className='note_sec'>
                        <div className='note_secwrap'>
                    <h1>Note</h1>
                    <p>Since our customers buy a license for each song, we suggest you set an affordable price.</p>
                    
                    <span  onClick={handleSearchClick} className='close_icon'><IoMdClose /> </span>
                    </div>
                </div>
                </div>
                    {currentStep === 1 && (
                        <ContentInformation
                            data={formData.ContentInformation}
                            setFormData={(data) => handleDataChange(data, 'ContentInformation')} />
                    )}
                    {currentStep === 2 && (
                        <ContentLink
                            formData={formData.ContentLink}
                            setFormData={(data) => handleDataChange(data, 'ContentLink')} />
                    )}
                    {currentStep === 3 && (
                        <PermissionUpload
                        nextstep={handleNext}
                            data={formData.PermissionUpload}
                            setFormData={(data) => handleDataChange(data, 'PermissionUpload')} />
                    )}
                    {currentStep === 4 && (
                        <Agreement
                            data={formData.agreement}
                            setFormData={(data) => handleDataChange(data, 'agreement')} />
                    )}
<div className={currentStep !== 3 && 'musicSubmitbtn'}>
                        {currentStep < 5 && currentStep !== 3 && <button className='musicSubmitbutton' onClick={handleNext}>Submit</button>}
                        {/* You can include a Previous button if needed */}
                        {/* {currentStep > 1 && <button onClick={handlePrev}>Previous</button>} */}
                    </div>
                </div>

            


                <div className='note_SecWrapper desktop_only'><div className='note_sec'>
                    <h1>Note</h1>
                    <p>Since our customers buy a license for each song, we suggest you set an affordable price.</p>
                </div>
                </div>
            </div></>
    );
};

export default UploardContent;
