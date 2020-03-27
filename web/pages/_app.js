import React from 'react';
import nextApp from 'next/app';
import {Provider} from 'react-redux';
import store from '../src/utils/store';

class App extends nextApp {

    constructor(props) {
        super(props);
    }

    render() {
        const {Component, pageProps} = this.props;
        return <Provider store={store}><Component {...pageProps} /></Provider>;
    }
}

export default App;