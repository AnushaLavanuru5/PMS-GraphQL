import Header from './components/Header.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Clients from './components/Clients.jsx';
import Projects from './components/Projects.jsx';
import AddClientModal from './components/AddClientModal.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Project from './pages/Project.jsx';
import { ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
    fields:{
      clients: {
      merge(existing, incoming)
    {
      return incoming;
    },
  },
  projects: {
    merge(existing, incoming){
      return incoming;
    },
  },
    },
  },
  }
})
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
});

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <Router>
    <Header />
    <div className="container">
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/projects/:id' element={<Project />}></Route>
        <Route path='*' element={<NotFound />}></Route>

       
      </Routes>
    </div>
    </Router>
    </ApolloProvider>
    </>
  );
}

export default App;
