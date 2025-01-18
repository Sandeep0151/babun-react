import { useState } from "react";
import getCsrfToken from '../../utils/getCsrfToken';

// Type for FormData
type FormData = {
  bhk: string;
  budget: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  property_name: string;
  area_pin_code: string;
};

const PropertyForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    bhk: "",
    budget: "",
    name: "",
    phone: "",
    email: "",
    city: "",
    property_name: "",
    area_pin_code: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Validation functions
  const validateStep1 = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.bhk) errors.bhk = "Property type is required";
    return errors;
  };

  const validateStep2 = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.budget) errors.budget = "Budget is required";
    return errors;
  };

  const validateStep3 = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number must be 10 digits";
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email";
    }
    if (!formData.city) errors.city = "City is required";
    if (!formData.property_name) errors.property_name = "Property name is required";
    if (!formData.area_pin_code) errors.area_pin_code = "Area pin code is required";
    return errors;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let currentErrors = {};
    switch (currentStep) {
      case 1:
        currentErrors = validateStep1();
        break;
      case 2:
        currentErrors = validateStep2();
        break;
      case 3:
        currentErrors = validateStep3();
        break;
      default:
        break;
    }

    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors as { [key: string]: string });
      return;
    }

    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1); // Move to the next step
    } else {
      try {
        const csrfToken = await getCsrfToken();
        const response = await fetch("http://54.158.143.81/api/save-property-details/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken || '' ,
          },
          body: JSON.stringify(formData),
        });
        const result = await response.json();
        if (response.ok) {
          alert("Property details submitted successfully!");
          setFormData({
            bhk: "",
            budget: "",
            name: "",
            phone: "",
            email: "",
            city: "",
            property_name: "",
            area_pin_code: "",
          });
          setCurrentStep(1); // Reset to step 1
        } else {
          alert(`Error: ${result.message}`);
        }
      } catch (error) {
        alert(`An error occurred: ${error}`);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form onSubmit={onSubmit}>
      {currentStep === 1 && (
        <div className="row">
          <div className="col-12">
            <div className="input-group-meta position-relative mb-25">
              <label>Property Type*</label>
              <select name="bhk" value={formData.bhk} onChange={handleChange}>
                <option value="">Select property type</option>
                <option value="1BHK">1 BHK</option>
                <option value="2BHK">2 BHK</option>
                <option value="3BHK">3 BHK</option>
                <option value="4BHK">4 BHK</option>
              </select>
              {errors.bhk && <div className="error-message">{errors.bhk}</div>}
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn-four w-100 tran3s d-block mt-20">
              Next
            </button>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="row">
          <div className="col-12">
            <div className="input-group-meta position-relative mb-25">
              <label>Budget*</label>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="Enter your budget"
              />
              {errors.budget && <div className="error-message">{errors.budget}</div>}
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn-four w-100 tran3s d-block mt-20">
              Next
            </button>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="row">
          <div className="col-12">
            <div className="input-group-meta position-relative mb-25">
              <label>Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
              {errors.name && <div className="error-message">{errors.name}</div>}
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta position-relative mb-25">
              <label>Phone*</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
              {errors.phone && <div className="error-message">{errors.phone}</div>}
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta position-relative mb-25">
              <label>Email*</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta position-relative mb-25">
              <label>City*</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
              />
              {errors.city && <div className="error-message">{errors.city}</div>}
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta position-relative mb-25">
              <label>Property Name*</label>
              <input
                type="text"
                name="property_name"
                value={formData.property_name}
                onChange={handleChange}
                placeholder="Enter property name"
              />
              {errors.property_name && <div className="error-message">{errors.property_name}</div>}
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta position-relative mb-25">
              <label>Area Pin Code*</label>
              <input
                type="text"
                name="area_pin_code"
                value={formData.area_pin_code}
                onChange={handleChange}
                placeholder="Enter pin code"
              />
              {errors.area_pin_code && <div className="error-message">{errors.area_pin_code}</div>}
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn-four w-100 tran3s d-block mt-20">
              Submit
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default PropertyForm;
