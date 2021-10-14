import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>These are the information: {props.info}</p>
    </div>
);


const withAdminAccess = (WrappedComponent) => {
    return (props) => (
        <div>

            <p>The information below is only for admins</p>
            {props.isAdmin ? <WrappedComponent {...props} /> : <p>Please log in to see info</p>}
        </div>
    )
}

const AdminInfo = withAdminAccess(Info);

ReactDOM.render(<AdminInfo isAdmin={true} info='you are dumb' />, document.getElementById('app'));