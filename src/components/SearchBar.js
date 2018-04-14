import React from "react"

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({ input: e })
        this.props.onSearchTermChange(e)
    }

    render() {
        console.log(this.state.input)
        return (
            <div className="search-bar">
                <input
                    value={this.state.input}
                    placeholder="Enter Video Name"
                    onChange={(e) => this.handleInputChange(e.target.value)} />
            </div>
        )

    }
}