/* eslint-disable no-undef */
/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */
console.log('build-it-visible-components.js is loaded');

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false,
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility,
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {
                        this.state.visibility ? 'Hide Details' : 'Show Details'
                    }
                </button>
                {
                    this.state.visibility && (
                        <div>
                            <p>Here are some details</p>
                        </div>)
                }
            </div>
        );
    }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<VisibilityToggle/>, appRoot);
