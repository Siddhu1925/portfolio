import './index.css';
const LeftSection = () => {
    return (
      <div className="LeftSection">
        <div className="Education">
          <p className="section-title">Education</p>
          <p className="section-sub-title">
         Sri KrishnaDevaraya University College <br/>Of Engineering And Technology
         <span className="year">
              (2017-2021)</span>
              </p>
              <p className='section-description'>CGPA: 7.4<br/>
              </p>
          <p className="section-sub-title">
            Sri Sai Yuktha Jr College <span className="year">
              (2015-2017)</span>
              </p>
              <p className='section-description'>CGPA: 9.36<br/>
              </p>
          <p className="section-sub-title">
            S.P.Y.Reddy E.M High School <span className="year">
              (2014-2015)</span>
              </p>
              <p className='section-description'>CGPA: 8.3<br/>
              </p>
           </div>
        <hr />
        <div className="Skill">
          <p className="section-title">Skills</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>BootStrap</li>
        <li>JavaScript</li>
        <li>React.js</li>
      </ul>
             </div>
      </div>
    );
  };
  
  export default LeftSection;