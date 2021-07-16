/* eslint-disable react/prop-types */
import React from 'react';

const Option = (props) => (
    <div className="option">
        <p className="option__text">
            {props.count}. {props.optionText}
        </p>
        <button
            className="button button--link"
            onClick={
                () => {
                    props.handleDeleteOption(props.optionText);
                }
            }>
            remove
        </button>
    </div>
);

export default Option;
