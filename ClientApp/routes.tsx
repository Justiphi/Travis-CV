import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/experience' component={Experience} />
    <Route path='/contact' component={Contact} />
    <Route path='/education' component={Education} />
</Layout>;
