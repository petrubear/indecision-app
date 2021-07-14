/* eslint-disable react/prop-types */
import React from 'react';

const Option = (props) => (
    <div>
        {props.optionText}
        <button
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
