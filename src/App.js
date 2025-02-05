import './App.css';
import brandlogo from "./brandlogo.png";
import fullBrand from "./full-brand.png";
import partyPopper from './party-popper.png';
import subBrandLogo from './sub-brand-logo.svg';
import glass from './glass.png';
import { useState } from 'react';
import confirmLogo from './confirm.png';
import axios from 'axios';

function App() {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');


  const sendRequest = (e) => {
    let formData = {
      'fullName': fullName,
      'companyName': companyName,
      'jobTitle': jobTitle,
      'workEmail': workEmail,
      'phoneNo': phoneNumber
    }
    if (fullName && companyName && jobTitle && workEmail) {
      axios.post('http://localhost:3030', formData)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
      // toast("saved successfully.");
      document.getElementsByClassName('confirmation-Modal')[0].style.display = 'block';
      document.getElementsByClassName('landingPage')[0].style.display = 'none';
      console.log('form', formData);
    }
  }
  function hideModal() {
    setTimeout(() => {
      document.getElementsByClassName('confirmation-Modal')[0].style.display = 'none';
      document.getElementsByClassName('landingPage')[0].style.display = '';
      setFullName('');
      setCompanyName('');
      setJobTitle('');
      setWorkEmail('');
      setPhoneNumber('');
    }, 100);
  }
  // hideModal();
  return (
    <div className="App">
      <div className='row landingPage'>
        <div className='col-lg-6 col-md-12 image-background hide-sm-logos'>
          <img src={fullBrand} className="full-image" alt="logo" />
        </div>

        <div className='hide-lg-logos' style={{ textAlign: 'left' }}>
          <img src={brandlogo} style={{ paddingLeft: '25px', paddingTop: '20px' }} alt="logo" />
        </div>
        <div className='col-lg-6 image-background hide-lg-logos' style={{ marginTop: '20px', padding: '30px' }}>
          <div>
            <img src={glass} alt="logo" />
          </div>
          <div>
            <img src={subBrandLogo} alt="logo" />
          </div>
        </div>

        <div className='col-lg-6 col-md-12 from-section'>
          <div className='form-card shadow p-3 mb-5 bg-white'>
            <h6 style={{ color: '#FB8C00', fontSize: '1.6rem' }}>Enter to win! <img src={partyPopper} alt="logo" /></h6>
            <p className='sub-header'>Share your details below fro a chance to win!</p>

            {/* <form> */}
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name*"></input>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Company Name*" />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="Job Title*" />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" value={workEmail} onChange={(e) => setWorkEmail(e.target.value)} placeholder="Work Email*" />
                  </div>
                </div>
              </div>
              <div className="row justify-content-md-center">

                <div className="col-sm-12 col-md-6" style={{ paddingTop: '10px' }}>
                  <div className="form-group">
                    <input type="number" className="form-control form-control-lg" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number (Optional)" />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ padding: '20px' }}>
              <button className="btn btn-primary send-button" onClick={() => sendRequest()}>Send Request</button>
            </div>
            {/* </form> */}
          </div>
        </div>

      </div>
      {/* <div class="footer">
        <p></p>
      </div> */}
      <div className="confirmation-Modal">
        <div className='confirmation-Content'>
          <div>
            <div className='image-background'>
              <img src={brandlogo} style={{ width: '60vw', marginTop: '35px', marginBottom: '35px' }} alt="logo" />
            </div>
            <div>
              <img src={confirmLogo} style={{ marginTop: '35px' }} alt="logo" />
            </div>
          </div>
          <div style={{ padding: '20px', marginTop: '35px' }}>
            <button className="btn btn-primary send-button" onClick={() => hideModal()}>close</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
