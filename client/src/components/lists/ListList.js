import ListShow from './ListShow';

const ListList = ({ lists }) => (
  <>
    { lists.map(l => 
      <ListShow 
        key={l.id}
        {...l}
      />
    )}
  </>
)

export default ListList;