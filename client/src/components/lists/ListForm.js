import { useState, useEffect } from 'react';
import axios from 'axios';
import ListList from './ListList';
import ListForm from './ListForm';

const Lists = () => {
  const [lists, setLists] = useState([])

  useEffect( () => {
    axios.get('/api/lists')
      .then( res => setLists(res.data))
      .catch( err => console.log(err) )
  }, [])

  const addList = (list) => {
    axios.post('/api/lists', { list })
      .then(res => setLists([...lists, res.data]) )
      .catch( err => console.log(err) )
  }

  return (
    <>
      <ListForm addList={addList} />
      <h1>All Lists</h1>
      <ListList 
        lists={lists}
      />
    </>
  )
}

export default Lists;