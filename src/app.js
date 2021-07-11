/* eslint-disable no-undef */
/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */

/* eslint-disable react/prop-types */

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: [],
        };
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: [],
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

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option),
            };
        });
    }

    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer.';
        return (
            <div>
                <Header
                    title={title}
                    subtitle={subtitle}
                />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};
/*
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}
*/

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >What Should I do?
            </button>
        </div>
    );
};

/*
class Action extends React.Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >What Should I do?
                </button>
            </div>
        );
    }
}
*/

const Option = (props) => {
    return (
        <div>
            {props.optionText}
        </div>
    );
};

/*
class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}
*/

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>RemoveAll</button>
            {props.options.map((option) => {
                return <Option key={option} optionText={option}/>;
            })}
        </div>
    );
};

/*
class Options extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
                {this.props.options.map((option) => {
                    return <Option key={option} optionText={option}/>;
                })}
            </div>
        );
    }
}
*/
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined,
        };
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => {
            return {
                error: error,
            };
        });
        e.target.elements.option.value = '';
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

/*
const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};
*/
const appRoot = document.getElementById('app');
// ReactDOM.render(<User name='Edison' age={39}/>, appRoot);
ReactDOM.render(<IndecisionApp/>, appRoot);
