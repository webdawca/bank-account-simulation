import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LandingPage from '../view/LandingPage';
import Desktop from '../view/Desktop';
import LogInPage from "../view/LogInPage";
import History from '../view/History';
import Transfer from '../view/Transfer';
import Calendar from '../view/Calendar';
import RegisterPage from '../view/RegisterPage';
import ForgottenPassword from '../view/ForgottenPassword';
import PageDontExist from '../view/PageDontExist';
import Header from '../components/header/Header';

const AppRouter = () => (
  <HashRouter>
    <div>
    <Header />
          <Route render={({location}) => (
          <TransitionGroup>
              <CSSTransition
                  key={location.key}
                  timeout={1000}
                  classNames="fade">
                  <Switch location={location}>
                    <Route path="/" exact={true} component={LandingPage} />
                    <Route path="/login" exact={true} component={LogInPage} />
                    <Route path="/forgottenpassword" exact={true} component={ForgottenPassword} />
                    <Route path="/register" exact={true} component= {RegisterPage} />
                    <Route path="/desktop" exact={true} component={Desktop} />
                    <Route path="/history" exact={true} component={History} />
                    <Route path="/calendar" exact={true} component={Calendar} />
                    <Route path="/transfer" exact={true} component={Transfer} />
                    <Route path="*" component={PageDontExist} />
                  </Switch>
              </CSSTransition>
          </TransitionGroup>
          )}
          />
    </div>
  </HashRouter>
)
export default AppRouter;