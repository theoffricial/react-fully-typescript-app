import React, { Suspense } from 'react';
const TestButtonLazy = React.lazy(() => import("./Components/TestButton/TestButton"));
import TestButton from "./Components/TestButton";
const App = (): JSX.Element => {
    return <div>
        {/* <h1>Hello World From React-Rollup</h1> */}
        <TestButton label="My TestButton" />
        <Suspense fallback={<div>Loading...</div>}>
            <TestButtonLazy label="Lazyy" />
        </Suspense>
    </div>;
}
export default App;