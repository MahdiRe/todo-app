import React from 'react';

class Header extends React.Component {
    render() {
        const header = this.props.header;
        return (
            <h3>{header}</h3>
        );
    }
}
export default Header;