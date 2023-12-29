import singleSpaReact from 'single-spa-react';
import React from 'react';
import ReactDOM from 'react-dom';
// TODO: your module router or app entrypoint

const  getRootComponent = () =>{
  const Root = () => <div>HI</div>
  return Root
}

export default config => {
  // Use the config object to extract data from Portal such as GRAPHQL_URL into your app

  return singleSpaReact({
    React,
    ReactDOM,
    rootComponent: getRootComponent()
  });
}
