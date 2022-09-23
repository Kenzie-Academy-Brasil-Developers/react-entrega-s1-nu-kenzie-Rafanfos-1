import "./style.css";

const RemoveButton = ({ setListTransactions, id }) => {
  const removeItem = () => {
    setListTransactions((previouslistTransactions) =>
      previouslistTransactions.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <button className="remove_button">
      <div onClick={removeItem}></div>
    </button>
  );
};

export default RemoveButton;
