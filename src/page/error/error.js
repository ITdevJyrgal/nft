import React from 'react';
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className="container">
            <Link to={"/"}> <p style={{
                color:"white",
                paddingTop:"500px"
            }}> node found 404</p></Link>
        </div>
    );
};

export default Error;