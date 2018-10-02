import { connect } from 'react-redux'
import * as EventListModule from '../modules/EventListModule'
import EventList from '../components/EventList'


const mapStateToProps = state => {
  return {
    count: state.eventList.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(EventListModule.increment()),
    decrement: () => dispatch(EventListModule.decrement()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList)
