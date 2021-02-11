import React from 'react'

class SearchBar extends React.Component {
    state = { term: '' };

    onChange = (e) => {
        this.setState({ term: e.target.value })
    } 

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }


    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <label>Search Videos</label>
                    <input 
                    type='text'
                    value={this.state.term}
                    onChange={this.onChange}
                    >
                    </input>
                </form>
            </div>
        )
    }
} 

export default SearchBar