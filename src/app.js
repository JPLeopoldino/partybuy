import React from 'react';
import MainBuyScreen from './screens/MainBuyScreen';
import { BalloonProvider } from './hooks/BalloonProvider';

export default class App extends React.Component {
    dummy = () => {
        // Just to test arrow functions
    }

    render() {
        return (
            // <div className={'hello'}>
            <BalloonProvider>
                <MainBuyScreen logo={"./assets/partybuy-logo.png"} />
            </BalloonProvider>
        );
    }
}
