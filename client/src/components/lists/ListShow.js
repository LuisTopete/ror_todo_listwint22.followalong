import { useState } from 'react';
import ListForm from './ListForm';

const ListShow = ({ id, title, desc, updateList, deleteList }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      { 
        editing ?
        <>
          <ListForm
            id={id}
            title={title}
            desc={desc}
            updateList={updateList}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>
            Cancel
          </button>
        </>
        :
        <>
          <h1>{title}</h1>
          <p>{desc}</p>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteList(id)}>
            Delete
          </button>
          <button>Todos</button>
        </>
      }
    </>
  )
}

export default ListShow;