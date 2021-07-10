/* eslint-disable no-undef */
/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */

/* eslint-disable react/prop-types */

class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer.';
        const options = ['Thing one', 'Thing two', 'Thing four'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
                <AddOption/>
            </div>
        );
    }
}

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

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What Should I do?</button>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                {this.props.options.map((option) => {
                    return <Option key={option} optionText={option}/>;
                })}
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <p>AddOption component here</p>
            </div>
        );
    }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp/>, appRoot);
