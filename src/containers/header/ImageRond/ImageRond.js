import React, { Component } from 'react';

class ImageRond extends Component {
    
    render() {    
        return (
            <section className={this.props.position} onMouseOver={this.props.show} onMouseLeave={this.props.closed}>
                <div>{this.props.children}</div>

                <div className={this.props.tailleRond}>
                    <img src={this.props.name} className={this.props.style} alt={this.props.name} />
                </div>
            </section>
        )
    }
};

export default ImageRond;
