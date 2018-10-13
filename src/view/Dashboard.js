import * as React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Dashboard = () => (
    <div className="main__container">
        <Header />
        <div className="dashboard__wrapper">
            <div className="dashboard__payments">
                <h1 className="payments__title">Finance life stream</h1>
                <div className="payments__buttons">
                    <button>Add</button>
                    <button>BANK</button>
                    <button>PAYMENT</button>
                </div>
            </div>

            <div className="dashboard__summary">
                <div className="summary__preview">
                    <div>
                            <h2>Balance</h2>
                            <span className="preview__text"> <b>7 200, 34</b> PLN</span>
                        </div>
                    <div>
                            <h2>Available funds</h2>
                            <span className="preview__text"> <b>7 200,34</b> PLN</span>
                        </div>
                    <div>
                            <h2>Scheduled payments</h2>
                            <span className="preview__text"> <b>2 200,34</b> PLN</span>
                            <button className="payment__btn">FAST PAY</button>
                        </div>
                </div>
                <div className="summary__analysis">
                    <p>Account analysis</p>
                    <span className="toggle_placeholder">toggle</span>
                </div>
            </div>
            <div className="dashboard__chart">

            </div>
        <div className="productsAndHistory">
            <div className="products__container">
                <h3>Products</h3>
                <div className="products__wrapper">
                    <div className="products-element border">
                        <p>Wallets</p>
                        <p>500,00 PLN</p>
                    </div>
                    <div className="products-element border">
                        <p>Deposits</p>
                        <p>10 000,00 PLN</p>
                    </div>
                    <div className="products-element border">
                        <p>Accounts</p>
                        <p>7 200,00 PLN</p>
                    </div>
                    <div className="products-element border">
                        <p>Funds</p>
                        <p>7 000,00 PLN</p>
                    </div>
                    <div className="products-element border">
                        <p>Bank loans</p>
                        <p>-127 000,00 PLN</p>
                    </div>
                </div>
            </div>
            <div className="history__container">
                <h3>History</h3>
                <div className="history__wrapper">
                    <div className="history__list">
                        <ul className="list">
                            <li className="list__element">
                                <span>29.06</span>
                                <span>Gas station Shell, Woloska Street</span>
                                <select>
                                    <option value="">gas</option>
                                    <option value="">food</option>
                                    <option value="">fun</option>
                                </select>
                                <span>-100,00 PLN</span>
                            </li>
                            <li className="list__element">
                                <span>29.06</span>
                                <span>Gas station Shell, Woloska Street</span>
                                <select>
                                    <option value="">gas</option>
                                    <option value="">food</option>
                                    <option value="">fun</option>
                                </select>
                                <span>-100,00 PLN</span>
                            </li>
                            <li className="list__element">
                                <span>29.06</span>
                                <span>Gas station Shell, Woloska Street</span>
                                <select>
                                    <option value="">gas</option>
                                    <option value="">food</option>
                                    <option value="">fun</option>
                                </select>
                                <span>-100,00 PLN</span>
                            </li>
                            <li className="list__element">
                                <span>29.06</span>
                                <span>Gas station Shell, Woloska Street</span>
                                <select>
                                    <option value="">gas</option>
                                    <option value="">food</option>
                                    <option value="">fun</option>
                                </select>
                                <span>-100,00 PLN</span>
                            </li>
                            <li className="list__element">
                                <span>29.06</span>
                                <span>Gas station Shell, Woloska Street</span>
                                <select>
                                    <option value="">gas</option>
                                    <option value="">food</option>
                                    <option value="">fun</option>
                                </select>
                                <span>-100,00 PLN</span>
                            </li>
                            <li className="list__element">
                                <span>29.06</span>
                                <span>Gas station Shell, Woloska Street</span>
                                <select>
                                    <option value="">gas</option>
                                    <option value="">food</option>
                                    <option value="">fun</option>
                                </select>
                                <span>-100,00 PLN</span>
                            </li>
                            <li className="list__element">
                                <span>29.06</span>
                                <span>Gas station Shell, Woloska Street</span>
                                <select>
                                    <option value="">gas</option>
                                    <option value="">food</option>
                                    <option value="">fun</option>
                                </select>
                                <span>-100,00 PLN</span>
                            </li>
                            <li className="list__element">
                                <span>29.06</span>
                                <span>Gas station Shell, Woloska Street</span>
                                <select>
                                    <option value="">gas</option>
                                    <option value="">food</option>
                                    <option value="">fun</option>
                                </select>
                                <span>-100,00 PLN</span>
                            </li>
                            <li className="list__element">
                                <span>29.06</span>
                                <span>Gas station Shell, Woloska Street</span>
                                <select>
                                    <option value="">gas</option>
                                    <option value="">food</option>
                                    <option value="">fun</option>
                                </select>
                                <span>-100,00 PLN</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
);

export default Dashboard;