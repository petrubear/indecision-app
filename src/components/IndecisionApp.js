/* eslint-disable require-jsdoc */
/* eslint-disable react/prop-types */
import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: this.props.options,
        };
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

    handleDeleteOptions() {
        this.setState(() => ({
            options: [],
        }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => {
                    return option !== optionToRemove;
                }),
            };
        });
    }

    handlePick() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter an option';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option),
        }));
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
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: [],
};
