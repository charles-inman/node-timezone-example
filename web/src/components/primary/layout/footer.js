import React from "react";

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <p>© {new Date().getFullYear()} Copyright. Charles Inman</p>
                <nav className="footer-menu">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/charlie-inman/" target='_blank'>LinkedIn</a></li>
                        <li><a href="mailto:mail@charlesinman.com">mail@charlesinman.com</a></li>
                    </ul>
                </nav>
            </footer>
        );
    }
}