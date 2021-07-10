/* eslint-disable no-undef */
/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */
console.log('build-it-visible.js is loaded');

const appRoot = document.getElementById('app');

let isVisible = false;

const onShowDetails = () => {
    isVisible = !isVisible;
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button name="details" onClick={onShowDetails}>{isVisible ? 'Hide Details' : 'Show Details'}</button>
            {isVisible && (
                <div>
                    <p>Here are some details</p>
                </div>)}
        </div>);
    ReactDOM.render(template, appRoot);
};
render();
