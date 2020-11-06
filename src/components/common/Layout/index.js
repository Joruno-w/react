import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Layout extends Component {
    static propTypes = {
        header: PropTypes.element,
        aside: PropTypes.element,
        children: PropTypes.element
    };
    render() {
        return (
            <div>
                <header className="header">
                    {this.props.header}
                </header>
                <div className="middle">
                    <aside className="aside">
                        {this.props.aside}
                    </aside>
                    <div className="main">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;