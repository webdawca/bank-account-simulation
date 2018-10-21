import * as React from 'react';
import ListElement from '../components/dashboard-child-components/ListELement';
import uuid from 'uuid';

class History extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                historyBills: [],
                isLoading: false
            }
        }

        componentDidMount() {
        this.setState({isLoading: true});
        this.fetchHistory();
    }


    fetchHistory = () => {
        const endpoint = 'https://efigence-camp.herokuapp.com/api/data/history';

        fetch(endpoint)
            .then(rawData => rawData.json())
            .then(data => this.setState(prevState => ({
                historyBills: [...prevState.historyBills, ...data.content],
                isLoading: false
            }))
        );
    }

    render() {
        const { historyBills } = this.state;
        const filtered = historyBills
        .map(item => item.category)
        .filter((item, index, array) => array.indexOf(item) === index);
        return (
            <div className="main__container">
            <div className="h-l-grid main__grid">
                <h1 className="h-c__title">History</h1>
                <div className="h-l-inputs__container">
                    <div className="inputs__element">
                        <label className="h-l__label" htmlFor="">Search</label>
                        <input className="h-l_search" type="text"/>
                    </div>
                    <div className="inputs__element">
                        <label className="h-l__label" htmlFor="">Filter by</label>
                        <select className="h-l__select">
                            <option value="all">Show all</option>
                            {filtered.filter(value => value !== historyBills.category)
                                .map(item =>
                                    <option
                                    key={uuid()}
                                    value="">{item}</option>
                                )
                            }
                    </select>
                    </div>
                </div>
            </div>
            <div className="h-l-grid--column">
                <div className="h-l__titles">
                    <p className="title">Date</p>
                    <p className="title">Details</p>
                    <p className="title">Category</p>
                    <p className="title">Amount</p>
                </div>
                <div className="h-l__list">
                    <div className="history__wrapper">
                    <div className="history__list">
                        <ul className="list">
                            {historyBills.map(bill =>
                                <ListElement
                                key={bill.id}
                                array={filtered}
                                {...bill}
                            />)}
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
}

export default History;