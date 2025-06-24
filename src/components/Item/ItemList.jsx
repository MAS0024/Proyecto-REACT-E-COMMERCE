import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <div className="row">
      {items.map(prod => (
        <Item key={prod.id} item={prod} />
      ))}
    </div>
  );
};

export default ItemList;
