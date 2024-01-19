import { importRemote } from "module-federation-import-remote";
import { useState } from 'react';

export const Application = () => {
  const [Apps, setApps] = useState<any[]>([]);
  return (
    <div>
      <h1>Basic Consumer</h1>
      <div>
        <button
          onClick={() => {
            setApps([])
          }}
        >Reset</button>
        <button
          onClick={() => {
            importRemote({ url: "http://localhost:13000", scope: 'Remote_unversioned', module: 'main_unversioned', bustRemoteEntryCache: true })
              .then((r: any) => r.Main)
              .then(x => setApps(v => {
                if (v.includes(x)) {
                  return v;
                }
                return [...v, x]
              }))
          }}
        >Load unversioned</button>
        <button
          onClick={() => {
            importRemote({ url: "http://localhost:13010", scope: 'Remote_versioned', module: 'main_versioned', bustRemoteEntryCache: true })
              .then((r: any) => r.Main)
              .then(x => setApps(v => {
                if (v.includes(x)) {
                  return v;
                }
                return [...v, x]
              }))
          }}
        >Load version</button>
      </div>
      <div>
        {
          Apps.map((App, i) => (
            <div key={i}>
              <h2>{i}</h2>
              <App />
            </div>
          ))
        }
      </div>
    </div>
  );
};
