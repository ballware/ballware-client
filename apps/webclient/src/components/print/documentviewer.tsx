import { useContext, useEffect, useState } from "react";

import { useObservableState } from 'observable-hooks';

import Iframe from 'react-iframe';

import { SettingsContext, RightsContext } from "@ballware/react-contexts";
import { useLocation } from "react-router-dom";

const MuiDocumentViewer = () => {

  const [url, setUrl] = useState<string|undefined>(undefined);

  const { metaDocumentApiFactory } = useContext(SettingsContext)
  const { token$ } = useContext(RightsContext);
  
  const token = useObservableState(token$, undefined);
  const location = useLocation();

  useEffect(() => {
    if (metaDocumentApiFactory && token && location) {
      const api = metaDocumentApiFactory(); 

      api.viewerUrl(token, location.search).then(result => {
        setUrl(result);
      });
    }
  }, [metaDocumentApiFactory, token, location]);

  return <div className="h-100 shadow bg-white rounded">{url && <Iframe allowFullScreen scrolling={'no'} frameBorder={0} styles={{ border: 0 }} width={'100%'} height={'100%'} url={url} />}</div>;
}

export const DocumentViewer = MuiDocumentViewer;