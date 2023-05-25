import React from 'react';
// import Button from "mf1/Button";
// import App from "mf1/App";

const AppRemote = () => {
  const Button = React.lazy(() => import('mf1/Button'));
  const App = React.lazy(() => import('mf1/App'));

  return (
    <React.Suspense fallback="Loading App...">
      <div className="remotes">
        <Button />
        {/* // As App in remote uses */}
        <App />
      </div>
    </React.Suspense>
  );
};
export default AppRemote;
