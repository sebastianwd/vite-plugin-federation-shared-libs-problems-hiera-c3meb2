import React from 'react';

const style = {
  background: '#a3e077',
  color: '#FFFFFF',
  padding: 12,
};

const Button = () => {
  // FIXME if not using state it works, but it's then pointelss...
  // const [count, setCount] = React.useState(0);
  const buttonHandler = () => {
    console.log(import.meta);
    alert('button event');
    // setCount((c) => c + 1);
  };
  return (
    <button
      className="remote-btn"
      style={style}
      onClick={() => buttonHandler()}
    >
      Rollup Remote React Button
      {/* {count} */}
    </button>
  );
};
export default Button;
