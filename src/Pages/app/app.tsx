import {Suspense} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Main} from 'src/Components/Main/main';
import {Login} from 'src/Pages/login/login';
import {Projects} from 'src/Pages/projects/projects';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Suspense fallback={<>loading...</>}>
                    <Main>
                        <Route exact path="/" render={() => <Login/>}/>
                        <Route path="/projects" render={() => <Projects/>}/>
                    </Main>
                </Suspense>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
