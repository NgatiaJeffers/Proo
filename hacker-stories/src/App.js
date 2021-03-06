import './App.css';
import { useState } from 'react';

const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='App'>
      <h1>My Hacker Stories</h1>

      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' onChange={handleChange} />

      <p>
        Searching for: <strong>{searchTerm}</strong>
      </p>
      <hr />
      <List list={stories}/>
    </div>
  );
};

const List = ({list}) => {
  // const filteredList = list.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  list.map(item => <Item key={item.objectsID} item={item}/>)
  const Item = ({item}) => (
    <div>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>
        {item.author}
      </span>
      <span>
        {item.num_comments}
      </span>
      <span>
        {item.points}
      </span>
    </div>
  )
} 
  



export default App;
