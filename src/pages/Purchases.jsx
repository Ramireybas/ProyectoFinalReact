import React, { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getpurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {
    const dispatch= useDispatch();
    const navigate= useNavigate();
    const purchases=useSelector(state=>state.purchases.purchases)
  /*  const date = new Date(purchases.createdAt)*/
    useEffect(()=>{
dispatch(getpurchasesThunk());
    },[])
    return (
        <div>
         <h1>Purchases</h1>
         <ListGroup>
         {purchases?.map(purchases=>(
                <ListGroup.Item key={purchases.id}  >
    
                    {purchases.cart.products.map(item=>(
                       <h1 key={item.id} onClick={()=> navigate(`/ProductDetail/${item.id}`)}>{item.title}</h1> 
                    ))}
                    <br />
              
                </ListGroup.Item>
            ))
         }
         </ListGroup>
        </div>
    );
};

export default Purchases;