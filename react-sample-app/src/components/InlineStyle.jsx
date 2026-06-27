export const InlineStyle = () => {
  const containerStyle = {
    border: '1px solid black',
    padding: '8px',
    margin: '8px',
    borderRadius: '8px',
  }
  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '8px 16px',
  }
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- inline style -</p>
      <button style={buttonStyle}>FIGHT</button>
    </div>
  );
}