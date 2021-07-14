/* eslint-disable require-jsdoc */
/* eslint-disable react/prop-types */
import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: this.props.options,
        selectedOption: undefined,
    };

    handleClearSelection = () => {
        this.setState(() => ({
            selectedOption: undefined,
        }));
    }

    handleDeleteOptions = () => {
        this.setState(() => ({
            options: [],
        }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => {
                    return option !== optionToRemove;
                }),
            };
        });
    }

    handlePick = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        this.setState( () => ({
            selectedOption: option,
        }));
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter an option';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option),
        }));
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => {
                    return {
                        options,
                    };
                });
            }
        } catch (e) {
            // do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    render() {
        // const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer.';
        return (
            <div>
                <Header
                    // title={title}
                    subtitle={subtitle}
                />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelection={this.handleClearSelection}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: [],
};
