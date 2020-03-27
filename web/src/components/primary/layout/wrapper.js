import React from "react";
import Header from './header';
import Footer from './footer';
import "../../../../styles.scss"

export default class Layout extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                <Header />
                <main className={this.props.mainClass}>
                    {this.props.children}
                </main>
                <Footer />
            </div>
        );
    }
}