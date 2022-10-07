import React, { useEffect, useState } from 'react';
import { Button, Col, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addCartThunk } from '../store/slices/cart.slice';

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const productList = useSelector(state => state.article.data?.products)
    const [rate, setRate] = useState(0);
    const productDetail = productList?.find(products => products?.id === Number(id))
    const relatedProduct = productList?.filter(
        product => product.category.id === productDetail?.category.id
    )
    useEffect(() => {
        setRate(1)
    }, [id])
    //products: id
    //rate: 
    const addProduct = () => {
        const product = {
            id: id,
            quantity: rate
        }
        console.log(product)
        dispatch(addCartThunk(product));
    }
    console.log(relatedProduct)
    return (
        <Row>
            <Col>
                <h3>{productDetail?.title}</h3>
                <div className='rate'>
                    <Button className="me-3" onClick={() => setRate(rate - 1)}>-</Button>
                    {rate}
                    <Button className="ms-3" onClick={() => setRate(rate + 1)}>+</Button>
                    <br />
                    <Button onClick={() => addProduct()}>Add to Favorite</Button>
                </div>
                <img className='img-fluid' src={productDetail?.productImgs} alt="" />
                <br />

                {productDetail?.description}
            </Col>
            <Col lg={3} >
                <ListGroup variant="flush">
                    {
                        relatedProduct?.map(product =>
                        (<ListGroup.Item
                            key={product.id}>
                            <Link
                                to={`/ProductDetail/${product.id}`}>
                                {product.title}
                                <img className='img-fluid' src={productDetail?.productImgs} alt="" />
                            </Link>
                        </ListGroup.Item>

                        ))
                    }
                </ListGroup>
            </Col>
        </Row>
    );
};

export default ProductDetail;