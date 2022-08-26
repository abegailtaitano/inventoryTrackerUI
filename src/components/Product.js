import { useState } from 'react';
 
const Product = () => {
const [id, setId] = useState('');
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');
const [quantity, setQuantity] = useState('');

//saw this in another example... not sure if this is what we needed to do.
const handleSubmit = (e) => {
    e.preventDefault();
    const product = { id, name, description, price, quantity };
    console.log(product);

    setId('')
    setName('')
    setDescription('')
    setPrice('')
    setQuantity('')
}

/* maybe for line 32...
<form
onSubmit={handleSubmit(() => {
  try {
    request();
  } catch (e) {
    // handle your error state here
  }
})}
/>
</>; */

return (
    <div className="create">
        <h2>CREATE PRODUCT</h2>
        <form> 
        <label>ID</label>
            <input
                type="text"
                required
                value={id} 
                onChange={(e) => setId(e.target.value)} />
            <label>NAME</label>
            <input
                type="text"
                required
                value={name}  
                onChange={(e) => setName(e.target.value)} />
       <label>DESCRIPTION</label>
            <textarea
                required
                onChange={(e) => setDescription(e.target.value)}
            >
                {description}
            </textarea> 
            {/* also for description part...not sure either if this was right
             if we use textarea or just another input box like the rest -_-*/}
        <label>PRICE</label>
        <input
                type="number"
                required
                value={price} 
                onChange={(e) => setPrice(e.target.value)}/>
        <label>QUANTITY</label>
        <input
                type="number"
                required
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)} />
        <button
         onClick={handleSubmit}
        >SUBMIT</button>
        </form>
    </div>
);
}
        
export default Product;