import React from "react";

const Logout = ({setIsAuth}) => {
    fetch('http://localhost:6789/logout' , {credentials: 'include'});
    setIsAuth(false);
    return(
        <div className="alert alert-danger" role="alert">
            You have been logged out
        </div>
    )
}

export default Logout;