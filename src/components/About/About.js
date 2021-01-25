import React from 'react';

const Card = ({ title }) => {
  return (
    <div className="shadow bg-white mx-auto" style={{ height: '550px', maxWidth: '400px' }}>
      <div className="h4 text-center py-2 border-bottom">{title}</div>
    </div>
  );
};

function About() {
  return (
    <div className="about bg-ulight height-rscreen ">
      <div className="row px-3 py-md-4 py-2">
        <div className="col-md-4 py-2 px-0">
          <Card title="About Us" />
        </div>
        <div className="col-md-4 py-2 px-0">
          <Card title="Developers" />
        </div>
        <div className="col-md-4 py-2 px-0">
          <Card title="Top Contributors" />
        </div>
      </div>
    </div>
  );
}

export default About;
