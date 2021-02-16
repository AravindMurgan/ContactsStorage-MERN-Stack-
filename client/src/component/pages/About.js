import React,{Fragment} from 'react';

 const About = () => {
    return (
        <Fragment>
            <h1>About this Application</h1>
            <h3>Contact Manager</h3>
            <p className="my-1">This Application allows you to keep all your contacts safe and secure...</p>
            <p className="bg-dark p">
                <strong>Version:</strong>1.0.1
            </p>
        </Fragment>
    )
}

export default About