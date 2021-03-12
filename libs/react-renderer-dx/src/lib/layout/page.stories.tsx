import React, { PropsWithChildren, useState } from 'react';
import { Router } from 'react-router-dom';
import { withKnobs } from '@storybook/addon-knobs';

import { RenderFactoryContext, RenderFactoryContextState } from '@ballware/react-renderer';
import { LookupContext, LookupContextState, PageContext, PageContextState } from '@ballware/react-contexts';
import { Page } from './page';
import { FilterBar } from './filterbar';
import { PageToolbarComponent } from '../dxrenderfactoryprovider';

const FakeLookupProvider = ({ children }: PropsWithChildren<{}>) => {

    const [value] = useState<LookupContextState>({
        lookups: {},
        lookupsComplete: true
    });

    return <LookupContext.Provider value={value}>{children}</LookupContext.Provider>;
}

const FakeRenderFactoryProvider = ({ children }: PropsWithChildren<{}>) => {

    const [value] = useState<RenderFactoryContextState>({        
        PageToolbar: (props) => <FilterBar {...props} />,
        PageToolbarItem: (props) => <PageToolbarComponent {...props} />
    });

    return <RenderFactoryContext.Provider value={value}>{children}</RenderFactoryContext.Provider>;
}

const FakePageProvider = ({ children }: PropsWithChildren<{}>) => {

    const [value] = useState<PageContextState>({       
        customParam: {},
        layout: {
            title: 'Story page',
            items: [],
            toolbaritems: [
                { 
                    type: 'datetime',
                    name: 'date1',
                    caption: 'Date',
                    options: { },
                    defaultValue: new Date()
                },
                { 
                    type: 'button',
                    name: 'button1',
                    caption: 'Toolbar Button',
                    options: { },
                    defaultValue: undefined
                }
            ]           
        },
        resetDocumentation: () => {},
        paramsInitialized: (_hidden) => {},
        paramEditorInitialized: (_identifier, _editUtil) => {},
        paramEditorValueChanged: (_name, _value, _editUtil) => {},
        paramEditorEvent: (_name, _event, _editUtil, _param) => {}
    });

    return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
}

export default { 
    title: 'Page',
    decorators: [withKnobs]
};

export const PageWithToolbar = () => (
    
    <FakeRenderFactoryProvider>
        <FakeLookupProvider>
            <FakePageProvider>                
                <Page />
            </FakePageProvider>
        </FakeLookupProvider>
    </FakeRenderFactoryProvider>
)