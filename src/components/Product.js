import { useState } from 'react';
import axios from 'axios';
 
const Product = () => {
const [id, setId] = useState('');
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');
const [quantity, setQuantity] = useState('');


const handleSubmit = (e) => {
    e.preventDefault();
    const product = { id, name, description, price, quantity };
    console.log(product);

    axios.post('http://localhost:3000/inventory/product', { product })
    .then(res=>{
        console.log(res);
        console.log(res.data);
     })
}

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
            <textarea>
                <input
                type="text"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
            </textarea> 
            {/* also for description part...not sure either if this was right
             if we use textarea or just another input box like the rest -_-*/}
        <label>PRICE</label>
        <input
                type="text"
                required
                value={price} 
                onChange={(e) => setPrice(e.target.value)}/>
        <label>QUANTITY</label>
        <input
                type="text"
                required
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)} />
        <button onClick={handleSubmit}>SUBMIT</button>
        </form>
    </div>
);
}
        
export default Product;