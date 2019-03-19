import React from 'react';

export default function UserComponent(props) {
    return (
        <div>
            User <br />
            User Email: {props.match.params.useremail} <br />   {/*parameter  */}
            User Pass: {props.location.state.userObj.userPass} <br/> {/*location state  */}
            search : {props.location.search} {/*query string */} <br/>
        </div>
    );
}