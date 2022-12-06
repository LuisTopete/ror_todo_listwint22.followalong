import ListShow from './ListShow';

const ListList = ({ lists, updateList, deleteList }) => (
  <>
    { lists.map(l => 
      <ListShow 
        key={l.id}
        {...l}
        updateList={updateList}
        deleteList={deleteList}
      />
    )}
  </>
)
export default ListList;