import React from 'react';
import './App.css';
import  './Card.css';

const card_data = [
  {
    cardtitle:"Fancy product",price:"$40.00 - $80.00",buttonvalue:"View options",
  },
  {
    cardtitle:"Special Item",price:"$18.00",star:"⭐⭐⭐⭐⭐",buttonvalue:"Add to Cart",
  },
  {
    cardtitle:"Special Item",price:"$18.00",star:"⭐⭐⭐⭐⭐",buttonvalue:"Add to Cart",
  },
  {
    cardtitle:"Special Item",price:"$18.00",star:"⭐⭐⭐⭐⭐",buttonvalue:"Add to Cart",
  },
  {
    cardtitle:"Fancy product",price:"$40.00 - $80.00",buttonvalue:"View options",
  },
  {
    cardtitle:"Fancy product",price:"$40.00 - $80.00",buttonvalue:"View options",
  },
  {
    cardtitle:"Special Item",price:"$18.00",star:"⭐⭐⭐⭐⭐",buttonvalue:"Add to Cart",
  },
  {
    cardtitle:"Special Item",price:"$18.00",star:"⭐⭐⭐⭐⭐",buttonvalue:"Add to Cart",
  }
]

function App() {
  return (
   <>
   <div className='cards'>
{card_data.map((data)=>(
  <Card key={data.id} card_datas={data} />
))}
   </div>
   </>
  );
}

export default App;


function Card({card_datas}) {
  return (
    <>
      <div className="card" style={{ width: "15rem" }}>
      {card_datas.buttonvalue === "Add to Cart" ? <span class="badge bg-dark">Sale</span> : ""}
        <div className="cardspan">450*300  </div>
        <div className="card-body">
          <h5 className="card-title">{card_datas.cardtitle}</h5>
          {card_datas.star}
          <p className="card-text">{card_datas.price}</p>
          <a href="/#" className="btn btn-outline-dark">
           {/* {props.buttonvalue==="Add to Cart" ? onclick={props.buttonvalue==="Added to cart"}:""} */}
           {card_datas.buttonvalue}
          </a>
        </div>
      </div>
    </>
  );
}