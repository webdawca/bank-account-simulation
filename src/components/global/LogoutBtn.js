import * as React from 'react';
import { connect } from "react-redux";
import { logOut } from '../../actions/auth';
import { LogOut } from '../../assets/svgInTag/svg';

const LogoutBtn = (props) => (
    <button
        className="logout-btn"
        onClick={props.logOut}>
        <LogOut
            classes={`logout-btn__icon`}/>
    </button>
);

export default connect(
    null,
    { logOut }
)(LogoutBtn);
