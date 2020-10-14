import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundy from './ErrorBoundry';
// import { robots } from '../robots';

import '../css/App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robo_list: [],
            search_field: ''
        }

    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json()
            })
            .then(
                users => {
                    this.setState({ robo_list: users });
                }
            )


    }
    onInputSearchRobots = (event) => {
        this.setState({ search_field: event.target.value })

    }

    render() {
        const filteredList = this.state.robo_list.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.search_field.toLowerCase())
        })
        if (this.state.robo_list.length > 0) {
            return (<>

                <div id='search_section' className='fl w-100 p2 tc'>
                    <h1 className='f1'>Titulo</h1>
                    <SearchBox onInput={this.onInputSearchRobots} />
                </div>
                <Scroll>
                    <ErrorBoundy>
                        <CardList robo_list={filteredList} />
                    </ErrorBoundy>

                </Scroll>

            </>)
        } else {
            return (
                <>
                    <h1>Cargando...</h1>
                </>
            )
        }

    }

}

export default App;