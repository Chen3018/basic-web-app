import { useState } from "react";
import CalculatePrice from "../utils/QueryProcessor";

export default function Home() {
  const [price, setPrice] = useState<string>("");
  const [priceList, setPriceList] = useState<number[]>([]);
  const [pre, setPre] = useState<string>("");
  const [pretaxG, setPreTax] = useState<number>(0);
  const [post, setPost] = useState<string>("");
  const [posttaxG, setPostTax] = useState<number>(0);
  
  function addPrice() {
    const f = parseFloat(price);
    if (f > 0) {
      setPriceList([...priceList, f]);
    }
  }
  
  function enterPrice(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      addPrice();
    }
  }

  function addPre() {
    const f = parseFloat(pre);
    if (f > 0) {
      setPreTax(f);
    }
  }

  function enterPre(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      addPre();
    }
  }

  function addPost() {
    const f = parseFloat(post);
    if (f > 0) {
      setPostTax(f);
    }
  }

  function enterPost(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      addPost();
    }
  }

  return (
    <div>
      <p>Type the price of the items one at a time (for one person): </p>
      <input
        type="text"
        value={price}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPrice(e.target.value)
        }
        onKeyDown={enterPrice}    
      />
      <button onClick={addPrice}>Add</button>
      <p>Prices:</p>
      <div>
        {priceList.map((p) => (
          <div>{p}</div>
        ))}
      </div>

      <p>Enter the pretax total: </p>
      <input
        type="text"
        value={pre}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPre(e.target.value)
        }
        onKeyDown={enterPre}
      />
      <button onClick={addPre}>Add</button>
      <p>Pretax total:</p>
      <div>
        {pretaxG}
      </div>

      <p>Enter the post tax total: </p>
      <input
        type="text"
        value={post}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPost(e.target.value)
        }
        onKeyDown={enterPost} 
      />
      <button onClick={addPost}>Add</button>
      <p>Post tax total:</p>
      <div>
        {posttaxG}
      </div>

      <p>Price for one person:</p>

      <div>
        {CalculatePrice(priceList, pretaxG, posttaxG)}
      </div>

    </div>
  );
}
