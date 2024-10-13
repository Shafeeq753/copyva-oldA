import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar"; // Import the ProgressBar component
import { Form, Button } from "react-bootstrap";
const PermissionUpload = ({nextstep}) => {
  const [formData, setFormData] = useState({
    pricing: [],
    Seatingcapacity: [],
    AddHeading: "",
    Onetimeusage: "",
    Multipleusage: "",
    // Add other form data fields as needed
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [additionalOptionsCase2, setAdditionalOptionsCase2] = useState([]);
  const [additionalOptionsCase4, setAdditionalOptionsCase4] = useState([]);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData };
      if (checked) {
        if (!Array.isArray(updatedData[name])) {
          updatedData[name] = [];
        }
        updatedData[name] = [...updatedData[name], value];
      } else {
        updatedData[name] = updatedData[name].filter((item) => item !== value);
      }
      return updatedData;
    });
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  // Case3

  const Case2Options = [
    "Youtube",
    "Instagram",
    "Facebook",
    "Set a discuss with copyva team",
  ];

  const addOptionCase2 = () => {
    setAdditionalOptionsCase2((prevOptions) => [
      ...prevOptions,
      ...Case2Options.map((option) => ({ value: option, label: option })),
    ]);
  };
  useEffect(() => {
    // Initialize default options once
    setAdditionalOptionsCase2(
      Case2Options.map((option) => ({ value: option, label: option }))
    );
  }, []);
  const handleChangeCase2 = (event) => {
    const { value } = event.target;
    setFormData((prevData) => {
      if (prevData.Seatingcapacity.includes(value)) {
        return {
          ...prevData,
          Seatingcapacity: prevData.Seatingcapacity.filter(
            (item) => item !== value
          ),
        };
      } else {
        return {
          ...prevData,
          Seatingcapacity: [...prevData.Seatingcapacity, value],
        };
      }
    });
  };

  // Case4

  const Case4Options = ["AddHeading", "One time usage", "Multiple usage"];

  const addOptionCase4 = () => {
    setAdditionalOptionsCase4((prevOptions) => [
      ...prevOptions,
      ...Case4Options.map((option) => ({ value: option, label: option })),
    ]);
  };
  useEffect(() => {
    // Initialize default options once
    setAdditionalOptionsCase4(
      Case4Options.map((option) => ({ value: option, label: option }))
    );
  }, []);
  const handleChangeCase4 = (event) => {
    const { value } = event.target;
    setFormData((prevData) => {
      if (prevData.Seatingcapacity.includes(value)) {
        return {
          ...prevData,
          Seatingcapacity: prevData.Seatingcapacity.filter(
            (item) => item !== value
          ),
        };
      } else {
        return {
          ...prevData,
          Seatingcapacity: [...prevData.Seatingcapacity, value],
        };
      }
    });
  };

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <form className="Progress_form">
            <div>
              <h4>
                Permission to remix/combine the selected content/video by
                editing:
              </h4>
              <div className="check_progress" >
                <input
                  type="radio"
                  name="pricing"
                  value="Commercial / Business purpose"
                  checked={formData?.pricing.includes(
                    "Commercial / Business purpose"
                  )}
                  onChange={handleChange}
                />
                <label>Commercial / Business purpose</label>
              </div>
              <div className="check_progress">
                <input
                  type="radio"
                  name="pricing"
                  value="Specific / Custom licence"
                  checked={formData?.pricing.includes(
                    "Specific / Custom licence"
                  )}
                  onChange={handleChange}
                />
                <label>Specific / Custom licence</label>
              </div>
            </div>
            <div className="btn_wapper"><button type="button" onClick={nextStep}>
              Next
            </button>
            </div>
          </form>
        );
      case 2:
        return (
          <form className="Progress_form">
            <div>
              <h4>Commercial/Business Purpose:</h4>
              {additionalOptionsCase2.map((option, index) => (
                <div className="check_progress" key={index}>
                  <input
                    type="radio"
                    name="Seatingcapacity"
                    value={option.value}
                    checked={formData.Seatingcapacity === option.value}
                    onChange={handleChangeCase2}
                  />
                  <label>{option.label}</label>
                </div>
              ))}
              <button type="button" onClick={addOptionCase2} className="bg_transparent">
                {" "}
                + Add an option if needed
              </button>
            </div>
            <div className="btn_wapper">
              <button type="button" onClick={nextStep}>
                Next
              </button>
            </div>
          </form>
        );
      case 3:
        return (
          <form className="Progress_form">
            <div>
              <h4>Youtube:</h4>
              <div className="check_progress">
                <input
                  type="radio"
                  name="Seatingcapacity"
                  value="0 to 50,000 subscribers"
                  checked={formData?.Seatingcapacity.includes(
                    "0 to 50,000 subscribers"
                  )}
                  onChange={handleChange}
                />
                <label>0 to 50,000 subscribers</label>
              </div>
              <div className="check_progress">
                <input
                  type="radio"
                  name="Seatingcapacity"
                  value="50,000 to 500,000 subscribers"
                  checked={formData?.Seatingcapacity.includes(
                    "50,000 to 500,000 subscribers"
                  )}
                  onChange={handleChange}
                />
                <label>50,000 to 500,000 subscribers</label>
              </div>
              <div className="check_progress">
                <input
                  type="radio"
                  name="Seatingcapacity"
                  value="500,000 to 2,000,000 subscribers"
                  checked={formData?.Seatingcapacity.includes(
                    "500,000 to 2,000,000 subscribers"
                  )}
                  onChange={handleChange}
                />
                <label>500,000 to 2,000,000 subscribers</label>
              </div>
              <div className="check_progress">
                <input
                  type="radio"
                  name="Seatingcapacity"
                  value="2,000,000 to 10,000,000 subscribers"
                  checked={formData?.Seatingcapacity.includes(
                    "2,000,000 to 10,000,000 subscribers"
                  )}
                  onChange={handleChange}
                />
                <label>2,000,000 to 10,000,000 subscribers</label>
              </div>
              <div className="check_progress">
                <input
                  type="radio"
                  name="Seatingcapacity"
                  value="More than 10,000,000 subscribers"
                  checked={formData?.Seatingcapacity.includes(
                    "More than 10,000,000 subscribers"
                  )}
                  onChange={handleChange}
                />
                <label>More than 10,000,000 subscribers</label>
              </div>
            </div>
            <div className="btn_wapper">
              <button type="button" onClick={nextStep}>
                Next
              </button>
            </div>
          </form>
        );
      case 4:
        return (
          <form className="Progress_form">
            <div>
              <h4>
                Licence to use the content on Youtube - 0 to 50,000 subscribers:
              </h4>
              {additionalOptionsCase4.map((option, index) => (
                <Form.Group key={index} controlId={option.value}>
                  <Form.Label className="statement_form">
                    {option.label}
                  </Form.Label>
                  <Form.Control
                    name={option.value}
                    placeholder={`Enter ${option.label}`}
                    type="text"
                    value={formData[option.value]}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              ))}
              <button
                type="button"
                onClick={addOptionCase4}
                className="add_option bg_transparent"
              >
                Add an option if needed
              </button>
            </div>
         
                <div className="btn_wapper">
                  {/* <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                  >
                    Back
                  </button> */}
                  <button
                    type="button"
                    onClick={nextstep}
                    // disabled={currentStep === 4}
                  >
                   {currentStep === 4 ? 'Submit' : 'Next'} 
                  </button>
                </div>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="Progress_form">
      <div class="d-flex justify-content-between">
        <h2>Permission Upload</h2>
        <span> Step {currentStep}/4</span>
      </div>
      <ProgressBar step={currentStep} />
      {renderForm()}
    </div>
  );
};

export default PermissionUpload;
