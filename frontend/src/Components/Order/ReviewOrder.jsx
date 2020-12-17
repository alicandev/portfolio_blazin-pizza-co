/* eslint-disable no-nested-ternary */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OrderContext } from './Context/OrderStore';
import { orderTotal, arrayEmpty } from './utils';

import ReviewPizzas from './_ReviewPizzas';
import ReviewSidesAndDrinks from './_ReviewSidesAndDrinks';
import ReviewSides from './_ReviewSides';
import ReviewDrinks from './_ReviewDrinks';

const removeSide = (side) => {
  // FIXME
  console.log(side);
};

const removeDrink = (drink) => {
  // FIXME
  console.log(drink);
};

const ReviewOrder = () => {
  const [{ pizzas, sides, drinks }] = useContext(OrderContext);
  return (
    <section id="ReviewOrder">
      <div id="PageContainer" className="container-fluid">
        <div id="PageRow" className="row">

          <article className="PageHead col-10 offset-1">
            <Link to="/order" className="BackButton">BACK</Link>
            <h2 className="Header">YOUR ORDER</h2>
          </article>

          {!arrayEmpty(pizzas) && <ReviewPizzas pizzas={pizzas} />}

          {(!arrayEmpty(sides) && !arrayEmpty(drinks)) ? (
            <ReviewSidesAndDrinks
              sides={sides}
              drinks={drinks}
              removeSide={removeSide}
              removeDrink={removeDrink}
            />
          ) : (
            !arrayEmpty(sides) ? <ReviewSides sides={sides} removeSide={removeSide} /> : (
              !arrayEmpty(drinks) && <ReviewDrinks drinks={drinks} removeSide={removeSide} />
            )
          )}

          <article className="Done col-10 offset-1">
            <h4 className="Total">
              Total: £
              {orderTotal(pizzas, sides, drinks)}
            </h4>
            <Link to="/order/finalize" className="Confirm">CONFIRM</Link>
          </article>

        </div>
      </div>
    </section>
  );
};

export default ReviewOrder;
