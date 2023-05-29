import { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';

export default class Portfolio extends Component {
    constructor(props) {
      super(props);
      this.filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
      this.state = { selected: 'All' }
    }

    static propTypes = {
      filters: PropTypes.array,
      state: PropTypes.object,
      list: PropTypes.array,
    }
  
    clickHandler(filter) {
      this.setState({ selected: filter });
    }
  
    listHandler() {
      return this.state.selected === 'All'
      ? this.props.list
      : this.props.list.filter(item => item.category === this.state.selected)
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
  
  // export default Portfolio