import React from "react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault(); // يمنع الإرسال الافتراضي
    const confirmSend = window.confirm("Do you sure from send this Massage? ");
    if (confirmSend) {
      alert("Okay,we will replay soon.");
    }
  };

  return (
    <>
      <h1 id="contact" style={{ textAlign: "center" }}>Contact Us</h1>
      <div className="mar">
        
        <div className="lef">
          <p>
            <span className="first-letter">W</span>hether you have a question, feedback,<br />
            or just want to share your experience<br />
            Our team is here to help.<br />
            Reach out anytime and let’s stay connected
          </p>
          <hr />
          <div>
            <h3>
              We welcome all your inquiries.<br />
              Please fill out the form...
            </h3>
            <hr />
          </div>
        </div>

        
        <form className="rig" onSubmit={handleSubmit}>
          <h2>Send a Message</h2>
          <input type="text" placeholder="Name" aria-label="Name" required />
          <input type="email" placeholder="E-mail Address" aria-label="Email" required />
          <textarea placeholder="Message" aria-label="Message" required></textarea>
          <button type="submit">Submit</button>
        </form>

     
        <div className="bubbles">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="bubble"></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Contact;
