import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const EmailVerificationForm = () => {
  const [email, setEmail] = useState('');
  const [showOtpField, setShowOtpField] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '']); // Array to store each digit of the OTP

  const handleVerifyEmail = () => {
    // Logic to handle email verification (e.g., send OTP to the email)
    setShowOtpField(true); // Show the OTP input fields
  };

  const handleOtpChange = (index, value) => {
    // Update the OTP array with the new value
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus to the next input field if a digit is entered
    if (value && index < 4) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleSubmitOtp = () => {
    // Combine the OTP array into a single string
    const otpCode = otp.join('');
    console.log('OTP submitted:', otpCode);
    // Add your OTP verification logic here
  };

  return (
    <Form>
      <Form.Group controlId="formEmail" className="mb-3 d-flex align-items-center">
        <Form.Control
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="me-2"
        />
        <Button variant="primary" onClick={handleVerifyEmail}>
          Verify
        </Button>
      </Form.Group>

      {showOtpField && (
        <Form.Group controlId="formOtp" className="mb-3 d-flex align-items-center">
          {otp.map((digit, index) => (
            <Form.Control
              key={index}
              id={`otp-input-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              maxLength={1}
              className="me-2 text-center"
              style={{ width: '50px' }} // Adjust the width as needed
            />
          ))}
        </Form.Group>
      )}
    </Form>
  );
};

export default EmailVerificationForm;