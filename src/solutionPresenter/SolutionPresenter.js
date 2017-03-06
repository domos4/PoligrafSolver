import React from "react";

class SolutionPresenter extends React.Component {

    render() {
        if (this.props.isVisible) {
            return (<span>solution</span>);
        }
        return null;
    }
}

export default SolutionPresenter;