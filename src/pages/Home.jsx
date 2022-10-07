import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, InputGroup, ListGroup, Row } from 'react-bootstrap';
import {  useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    const productList = useSelector(state => state.article.data?.products);
    const [categories, setCategories] = useState([]);
    const [productFiltered, setProductFiltered] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    useEffect(() => {
        axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories")
            .then(res => setCategories(res.data.data.categories));
    }, [])

    useEffect(() => {
        setProductFiltered(productList);
    }, [productList])
    const filterCategory = (categoryId) => {
        const filtered = productList?.filter((product) => product.category.id === categoryId);
        setProductFiltered(filtered);
    };
    const SearchProduct = () => {
        const filtered = productList.filter(
            product => product.title.toLowerCase().includes(searchValue.toLocaleLowerCase())
        )
        setProductFiltered(filtered);
        console.log(filtered)
    }
    return (
        <div>
            <Row>
                <Col lg={3}>
                    <ListGroup>
                        {
                            categories.map((category) => (
                                <ListGroup.Item
                                    key={category?.id}
                                    onClick={() => filterCategory(category.id)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {category?.name}
                                </ListGroup.Item>
                            ))}
                    </ListGroup>
                </Col>
                <Col>
                    <h1>Welcome to </h1>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Search Product"
                            onChange={e => setSearchValue(e.target.value)}
                            value={searchValue}
                        />
                        <Button variant="outline-secondary" onClick={SearchProduct}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        </Button>
                    </InputGroup>
                    <Row xs={1} md={2} xl={3} className="g-4">
                       
                        {productFiltered?.map((products) => (
                            <Col style={{width:"10rem"}} key={products.id}>
                                 <Card className='card'>
                                <Card onClick={() => navigate(`/productDetail/${products.id}`)} >
                                    <Card.Img variant="top" src={products.productImgs} width="100%"  />
                                    <Card.Body>
                                        <Card.Title>{products.title}</Card.Title>
                                        <Card.Text>
                                           Price:{products.price}
                                        </Card.Text>
                                    </Card.Body>
                                    </Card>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>

        </div>
    );
};

export default Home;