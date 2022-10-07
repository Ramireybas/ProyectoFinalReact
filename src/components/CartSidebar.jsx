import React, { useEffect } from 'react';
import { Button, ListGroup, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getcartthunk, purchasesCartThunk } from '../store/slices/cart.slice';

const CartSidebar = ({ show, handleClose }) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)
    useEffect(() => {
        dispatch(getcartthunk());
    }, [])
    return (
        <div>
            <Offcanvas show={show}
                onHide={handleClose}
                placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        Cart
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body >
                    <ListGroup  >
                        {cart?.map(product => (
                            <ListGroup.Item key={product?.id}>
                                <Link to={`/ProductDetail/${product?.id}`}>
                                    {product.title}
                                </Link>

                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <Button onClick={()=>dispatch (purchasesCartThunk())}>Checkout</Button>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default CartSidebar;