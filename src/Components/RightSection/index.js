import './index.css';

const RightSection = () => {
  return (
    <div className="RightSection">
      <div className="Projects">
        <p className='section-title'>Projects</p>
        <p className="section-sub-title">
      Registration Form
         <span className="year"><br/>
            (Aug,2022) </span>
              </p>
              <p className='section-description'>Tech Stack: HTML,CSS,JavaScript<br/>
              </p>
          <p className="section-sub-title">
         Order Status Manangement 
         <span className="year">
              (Sep,2022) </span>
              </p>
              <p className='section-description'>Tech Stack: HTML,CSS,JavaScript<br/>
              </p>
          <p className="section-sub-title">
            Calculator App
            <span className="year">
              (Oct,2022) </span>
              </p>
              <p className='section-description'>Tech Stack: HTML,CSS,JavaScript,React.js<br/>
              </p>
      </div>
      <hr />
      <div className="Achievements">
          <p className="section-title">Achievements</p>
      <ul>
        <li>Secured rank-1 in 4,5,6 standard of School(2009-2011)</li>
        <li>Secured Rank-2 in Intermediate(2017)</li>
        <li>Secured Rank-1 in Graduation final semesters (2021)</li>
      </ul>
             </div>
      <hr />
        <div className="Languages">
          <p className="section-title">Languages</p>
      <ul>
        <li>Telugu</li>
        <li>English</li>
        <li>Hindi</li>
      </ul>
             </div>
    </div>
  );
};

export default RightSection;