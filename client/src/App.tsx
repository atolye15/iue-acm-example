import { gql, useQuery } from "@apollo/client";
import "./App.css";
import { Authors } from "./__generated__/Authors";

const AuthorsQuery = gql`
  query Authors {
    authors {
      id
      firstName
      lastName
      posts {
        id
      }
    }
  }
`;

function App() {
  const { data } = useQuery<Authors>(AuthorsQuery);

  return (
    <div className="App">
      <header className="App-header">
        {data?.authors.map((author) => (
          <p>
            {author.firstName} {author.lastName} ({author.posts.length})
          </p>
        ))}
      </header>
    </div>
  );
}

export default App;
