import React from 'react';
import renderer, { act } from 'react-test-renderer';
import LinkTest from '../LinkTest';

it('Link changes the class when hovered', () => {
    const component = renderer.create(
        <LinkTest page="http://www.facebook.com">Facebook</LinkTest>,
    );
    let tree = component.toJSON() as renderer.ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();

    act(() => { 
        // manually trigger the callback
        tree.props.onMouseEnter();
        
    })
    // re-rendering
    tree = component.toJSON() as renderer.ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();

    act(() => { 
        // manually trigger the callback
        tree.props.onMouseLeave();
    })

    // re-rendering
    tree = component.toJSON() as renderer.ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();
});

it('Link should reference to the same page', () => {
    const component = renderer.create(
        <LinkTest page="">Empty page</LinkTest>,
    );
    const tree = component.toJSON() as renderer.ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();

    expect(tree.props.href).toBe("#");
})