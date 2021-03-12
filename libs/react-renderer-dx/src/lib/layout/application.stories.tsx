import React, { PropsWithChildren, useState } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { withKnobs, boolean, number } from '@storybook/addon-knobs';

import { Application } from './application';
import { ApplicationBar } from './applicationbar';
import { RenderFactoryContext, RenderFactoryContextState } from '@ballware/react-renderer';
import { TenantContext, TenantContextState } from '@ballware/react-contexts';
import { Navigation } from './navigation';


const FakeRenderFactoryProvider = ({ children }: PropsWithChildren<{}>) => {

    const [value] = useState<RenderFactoryContextState>({
        ApplicationBar: (props) => <ApplicationBar {...props}/>,
        Navigation: (props) => <Navigation {...props}/>,        
    });

    return <RenderFactoryContext.Provider value={value}>{children}</RenderFactoryContext.Provider>;
}

const FakeTenantProvider = ({ children } : PropsWithChildren<{}>) => {
    const [value] = useState<TenantContextState>({
        name: 'Tenant',
        navigation: {
            title: 'Tenant title',
            items: [
                { 
                    type: 'group', 
                    options: {
                        caption: 'First group'                       
                    }, 
                    items: [
                        { 
                            type: 'page',                            
                            options: {
                                page: 'first',
                                caption: 'First page'
                            }
                        }
                    ]
                }
            ]
        },
        pageAllowed: (page) => {
            switch (page) {
                case 'first':
                    return boolean('First page allowed', true);
            }
        }
    });

    return <TenantContext.Provider value={value}>{children}</TenantContext.Provider>;
}

export default { 
    title: 'Application',
    decorators: [withKnobs]
};

export const ApplicationWithNavigation = () => (
    <Router history={createBrowserHistory()}>
        <FakeRenderFactoryProvider>
            <FakeTenantProvider>
                <Application drawerWidth={number("DrawerWidth", 240)} />
            </FakeTenantProvider>
        </FakeRenderFactoryProvider>
    </Router>
)