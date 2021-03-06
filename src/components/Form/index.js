export default function Form({ children, handleSubmit, style }) {
  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  };

  const doSubmit = (e) => {
    e.preventDefault(); // stops refresh
    handleSubmit && handleSubmit(); // calls submit function from parent
  };

  return (
    <form style={{ ...formStyles, ...style }} onSubmit={doSubmit}>
      {children}
    </form>
  );
}
