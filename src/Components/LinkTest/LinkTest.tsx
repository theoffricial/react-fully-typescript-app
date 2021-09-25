import React from 'react';

const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
};


interface TestLinkProps {
    page: string;
    children: JSX.Element | string;
}

const LinkTest = (props: TestLinkProps): JSX.Element => {
    const [status, setStatus] = React.useState(STATUS.NORMAL);

    const onMouseEnter = () => {
        setStatus(STATUS.HOVERED);
    };

    const onMouseLeave = () => {
        setStatus(STATUS.NORMAL);
    };

    return (
        <a
            className={status}
            href={props.page || '#'}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {props.children}
        </a>
    );
};

export default LinkTest;