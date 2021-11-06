import React, { Component } from 'react';

export class Footer extends Component {

    render() {
        return (
            <footer className="bg-light text-center text-lg-start">
                <div className="text-center p-3" style={{backgroundColor: 'gray'}}>
                    © {new Date().getFullYear()}
                </div>
            </footer>
        );
    }
}