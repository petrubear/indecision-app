/* eslint-disable require-jsdoc */
/* eslint-disable react/prop-types */
import Option from './Option';
import React from 'react';

const Options = (props) => (
    <div>
        <button
            className="button button--link"
            onClick={props.handleDeleteOptions}>
            RemoveAll
        </button>
        {props.options.length === 0 && <p>Please add an option to get started.</p>}
        {props.options.map((option) => {
            return <Option
                key={option}
                optionText={option}
                handleDeleteOption={props.handleDeleteOption}
            />;
        })}
    </div>
);

export default Options;
