import { useState, useEffect } from 'react';
import Card from '../components/Card'

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/posts';

  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    setTimeout(() => fetchItems(), 2000);

  }, [])

  


   
  return (
    <section className="title">
    <header>
        <h1>Posts</h1>
    </header>
    <div className="App">
      
      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <div>
			<div className='wrapper'>
        
				{items.map(post => (
          <ul  key={post.id}>
          
          <Card
            title={post.title}
            body={post.body}
            

          />
          </ul>
				))}

			</div>
		</div>

}
      </main>
      
    </div>
    </section>
  );
}

export default App;