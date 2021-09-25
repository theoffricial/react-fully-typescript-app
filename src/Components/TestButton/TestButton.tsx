import React from 'react';
import "./TestButton.css";

interface TestButtonProps {
    label: string;
}

const TestButton = (props: TestButtonProps): JSX.Element => {
    return <button data-testid="test-button" className="test-button">{props.label}</button>
}

export default TestButton;