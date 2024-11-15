import React, { useState } from 'react';
import './styles/RegistrationForm.css';

function RegistrationForm() {
  const [gstRequired, setGstRequired] = useState(null);

  return (
    <form>
      <input type="email" placeholder="Email Id" required />
      <input type="tel" placeholder="Mobile No." required />

      {/* GST Invoice Toggle */}
      <label>Are you a business which needs GST invoice?</label>
      <div className="toggle-buttons">
        <button
          type="button"
          className={gstRequired === true ? 'active' : ''}
          onClick={() => setGstRequired(true)}
        >
          Yes
        </button>
        <button
          type="button"
          className={gstRequired === false ? 'active' : ''}
          onClick={() => setGstRequired(false)}
        >
          No
        </button>
      </div>

      <input type="text" placeholder="Company Name" required />
      <input type="text" placeholder="Company Address" required />

      <div className="form-row">
        <input type="text" placeholder="State" required />
        <input type="text" placeholder="Pincode" required />
      </div>

      {gstRequired && <input type="text" placeholder="GST Number" required />}

{/* Add New GST Button */}
<button type="button" className="add-gst-button">Add New GST</button>

{/* Register Button */}
<button type="submit" className="register-button">Register</button>

{/* Terms and Conditions */}
<p className="terms">
  By continuing you agree to the <a href="#terms">Terms & Conditions</a>
</p>
    </form>
  );
}

export default RegistrationForm;
