import React, { useContext, useEffect, useState } from "react";

import Iframe from 'react-iframe';

import { SettingsContext, RightsContext } from "@ballware/react-contexts";
import { useHistory } from "react-router-dom";

const MuiDocumentViewer = () => {

  const [url, setUrl] = useState(undefined as string);

  const { metaDocumentApiFactory } = useContext(SettingsContext)
  const { token } = useContext(RightsContext);
  const { location } = useHistory();

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