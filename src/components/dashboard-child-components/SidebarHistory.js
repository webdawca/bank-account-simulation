import * as React from 'react';
import ListElement from './ListELement';
import { connect } from 'react-redux';
import { fetchHistory } from '../../actions/fetchActions';

class SidebarHistory extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        isLoading: false
    }
}
    componentDidMount() {
        this.setState({isLoading: true});
        this.props.fetchHistory();
    }

    render() {
        const historyBills = this.props.history;
        const filtered = historyBills
        .map(item => item.category)
        .filter((item, index, array) => array.indexOf(item) === index);
        return (
            <section className="content__sidebar sidebarHistory">
                <h3 className="sidebar__title">History</h3>
                <div className="sidebarHistory__wrapper">
                        <ul className="sidebarHistory__list">
                            {historyBills.map(bill =>
                                <ListElement
                                key={bill.id}
                                array={filtered}
                                {...bill}
                            />)}
                        </ul>
                </div>
            </section>
        );
    }
};
const mapStateToProps = state => ({
    history: state.history.itemsHistory
})

export default connect(mapStateToProps, { fetchHistory })(SidebarHistory);







