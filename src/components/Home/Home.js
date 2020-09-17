import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import Banner from '../Header/Banner';
import Product from '../Product/Product';


const Home = () => {
    const style = {
        display: 'flex',
        padding:20,
        justifyContent: 'space-between'
    }

    const [foods,setFoods] = useState(fakeData.filter(f => f.category === 'lunch').slice(0,3));
    


    const handleBtnClickCategory = (category) => {
        const filterData = foods.filter(p => p.category === category);
        // debugger
        // foods = [filterData];
        // console.log(foods)
    }
    
    return (
        <div>
            <Banner></Banner>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            <Button onClick={ () => handleBtnClickCategory('breakfast')}>Breakfast</Button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">
                            <Button onClick={ () => handleBtnClickCategory('lunch')}>Lunch</Button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">
                            <Button onClick={ () => handleBtnClickCategory('dinner')}>Dinner</Button>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div style={style}>
                {
                   foods.map(food => <Product key={food.id} food={food}></Product>) 
                }
            </div>
            
        </div>
    );
};

export default Home;