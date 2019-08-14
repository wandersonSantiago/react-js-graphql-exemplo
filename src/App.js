import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import PessoaList from './components/PessoaList'
import Header from './components/Header';

const client = new ApolloClient({
  uri:'http://localhost:9090/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <div className="App">
        <PessoaList />
      </div>
    </ApolloProvider>
  );
}

export default App;
