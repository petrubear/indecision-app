/* eslint-disable require-jsdoc */
/* eslint-disable react/prop-types */
import React from 'react';

const Action = (props) => (
    <div>
        <button
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            className="big-button"
        >What Should I do?
        </button>
    </div>
);

export default Action;
