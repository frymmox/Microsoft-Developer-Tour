import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import places from '../api/places';
import Place from './components/Place';
import Form from './components/Form';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            places: []
        };

        this.handlePlaceAdd = this.handlePlaceAdd.bind(this);
    }

    componentDidMount() {
        axios.get('api/places')
            .then(response => response.data)
            .then(places => this.setState({ places }))
            .catch(error => console.error(error));
    }

    handlePlaceAdd(city, name, image) {
        axios.post('api/places', { city, name, image })
            .then(response => response.data)
            .then(place => {
                let places = [place, ...this.state.places];
        
                this.setState({ places });
            })
    }
    
    render() {
        return (
            <main className="content">
                <div className="content__header">
                    <h2 className="content__title">Путеводитель</h2>
                </div>

                <section className="place-list">
                    {this.state.places.map(place => 
                        <Place 
                            key={place.id}
                        	city={place.city}
                        	name={place.name}
                        	image={place.image}
                        />)}
                </section>

                <div className="place-add">
                    <p className="place-add__title">Добавить свое место!</p>
                    <button className="btn add">Добавить место</button>
                </div>

                <div className="modal-content">
                    <button className="modal-content__close close" type="button">Закрыть</button>
                    <h2 className="modal-content__title">Добавить своё место!</h2>
                    <Form onPlaceAdd={this.handlePlaceAdd}/>
                </div>
            </main>
        );
    }
}

App.propTypes = {
    initialData: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        city: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        image: React.PropTypes.string.isRequired
    })).isRequired
}

ReactDOM.render(<App initialData={places} />, document.getElementById('root'));