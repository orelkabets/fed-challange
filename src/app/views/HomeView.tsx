
import * as React from 'react';
import {default as LoginComponent} from '../components/LoginComponent';

export interface HomeState {
    loaded: boolean;
}

export default class HomeView extends React.Component<{}, HomeState> {
    constructor() {
        super();
        this.state = { loaded: false };
    }

    componentDidMount() {
        this.setState({ loaded: true });
    }

    render() {
        const loading = this.state.loaded ? "" : " (loading...)";
        return <div className="app-background">
            <LoginComponent  />
        </div>;
    }
}
