import React, { useState } from 'react';

const Contact = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real-world scenario, you would send the feedback to the server here.
    setSubmitted(true);
  };

  return (
    <div
      style={{
        background: 'linear-gradient(to right, #5a8d68, #2e604e)',
        fontFamily: 'Times New Roman, serif',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '2em',
        padding: '20px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>
        <strong>Contact Us</strong>
      </h1>
      <div>
        <p>Email: BIKEROOM@GMAIL.COM</p>
        <p>Number: 9140561093</p>
        <p>Address: 2/9 Cantt Allahabad</p>
      </div>

      <div
        style={{
          background: 'white',
          padding: '20px',
          borderRadius: '10px',
          marginTop: '20px',
          width: '400px',
          textAlign: 'center',
        }}
      >
        {submitted ? (
          <p style={{ color: '#2e604e' }}>Thank you for your feedback!</p>
        ) : (
          <>
            <p style={{ color: '#2e604e' }}>Please provide your valuable feedback for our better performance.</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="feedback" className="form-label">
                  Feedback:
                </label>
                <textarea
                  className="form-control"
                  id="feedback"
                  rows="4"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit Feedback
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;