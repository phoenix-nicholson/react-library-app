import BookList from './views/Books/BookList';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink } from 'react-router-dom';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <BrowserRouter>
        <header>
          <NavLink to="/books" data-testid="book-link">
            Books
          </NavLink>
        </header>

        <Switch>
          <Route path="/books">
            <BookList />
          </Route>

          <Route path="/books/:id"></Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
