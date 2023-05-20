import { Component } from 'react'
import PropTypes from 'prop-types';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';

export class Portfolio extends Component {
    constructor(props) {
      super(props);
      console.log(this.props);
      this.filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
      this.state = { selected: 'All' }
    }

    static propTypes = {
      filters: PropTypes.array,
      state: PropTypes.object,
    }
  
    clickHandler(filter) {
      this.setState({ selected: filter });
    }
  
    listHandler() {
      return this.state.selected === 'All'
        ? Object.values(this.props)
        : Object.values(this.props).filter((item) => item.category === this.state.selected)
    }
  
    render() {
      return (
        <div className='container'>
          <Toolbar
            filters={this.filters}
            selected={this.state.selected}
            onSelectfilter={(filter) => this.clickHandler(filter)}
          />
        <ProjectList projects={this.listHandler()} />
        </div>
      )
    }
  }
  
  export default Portfolio