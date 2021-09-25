import React from 'react';
import TestButton from "../TestButton";
import renderer from 'react-test-renderer';
it("<TestButton /> renders correctly", () => {
    const component = renderer.create(<TestButton label="test"></TestButton>);
    expect(component.root.props).toEqual({ label: "test" });
    
    const button = component.toJSON() as renderer.ReactTestRendererJSON;
    expect(button).toMatchSnapshot();
});