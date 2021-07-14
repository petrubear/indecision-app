import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.handleClearSelection}
            contentLabel='Selected Option'>
            {props.selectedOption && <h3>Selected Option: {props.selectedOption}</h3>}
            <button onClick={props.handleClearSelection}>Close</button>
        </Modal>
    );
};

export default OptionModal;
