import React, { Component } from "react"

class AddPhoto extends Component {
    constructor() {
        super();
        this.handelsubmit = this.handelsubmit.bind(this)
    }

    handelsubmit(event) {
        event.preventDefault();
        const imageLink = event.target.Link.value;
        const description = event.target.description.value;
        const post = {
            id: Number(new Date()),
            imageLink: imageLink,
            description: description
        }
        if (description && imageLink) {
            this.props.startAddingPost(post)
            this.props.onHistory.push('/')

        }

    }
    render() {
        return (
            <div>
                <div className="form">
                    <form onSubmit={this.handelsubmit}>
                        <input type="text" placeholder="Link" name="Link" />
                        <input type="text" placeholder="Description" name="description" />
                        <button> Post </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto