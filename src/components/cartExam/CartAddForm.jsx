import React from 'react';

const CartAddForm = (props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();
  const onSubmit = event => {
    event.preventDefault();
    const title =inputRef.current.value;
    title && props.inputCartAdd(title);
    formRef.current.reset();
  }
  return (
    <form ref={formRef} onSubmit={onSubmit}>
      <input ref={inputRef} type="text" placeholder='μνμΆκ°'/>
      <button>Add</button>
    </form>
  );
}

export default CartAddForm;