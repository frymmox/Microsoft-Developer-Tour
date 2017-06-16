import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: '',
            name: '',
            image: ''
        };

        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handlePlaceAdd = this.handlePlaceAdd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleCityChange(event) {
        this.setState({ city: event.target.value });
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    handleImageChange(event) {
        this.setState({ image: event.target.value });
    }

    handlePlaceAdd() {
        const city = this.state.city;
        const name = this.state.name;
        const image = this.state.image;

        if (city, name, image) {
            this.props.onPlaceAdd(city, name, image);
            this.setState({ city: '', name: '', image: '' });
        }
        
    }

    render() {
        return (
            <form className="place-form" onSubmit={this.handleSubmit}>
                <input
                    className="field" 
                    type="text" 
                    placeholder="Город" 
                    value={this.state.city}
                    onChange={this.handleCityChange}
                />
                <input 
                    className="field"
                    type="text" 
                    placeholder="Название"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />
                <input 
                    className="field"
                    type="text" 
                    placeholder="Ссылка на изображение"
                    value={this.state.image}
                    onChange={this.handleImageChange}
                />

                <button className="btn-pop add-off" onClick={this.handlePlaceAdd}>Добавить место</button>
            </form>
        );
    }
}

Form.propTypes = {
    onPlaceAdd: React.PropTypes.func.isRequired
};

export default Form;