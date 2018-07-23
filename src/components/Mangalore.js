import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Mangalore extends Component {
    render() {

        return (
            <div className="row" style={{ marginLeft: 25, marginRight: 25 }}>
                <div className="col s10 m12">
                    <h3 className="header">Mangalore</h3>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src={require('../img/mglre2.jpg')} style={{ width: 320 }} />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p>Mangalore, or Mangaluru as it is now called, is one coastal city in Karnataka. I lived in this little speck of a city for a span of 7 months that has everything one looks for in a tropical vacation destination – beaches, culture, food and fun.  </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="col s10 m12">
                    <h3 className="header">Places to visit in Mangalore</h3>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src={require('../img/mglre6.jpg')} style={{ width: 320 }} />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p>There are many places to visit in Mangalore and around it.
                                     During my stay I visited Tannirbhavi Beach, Someshwara Beach, Panambur Beach, Surthkal(NITK) Beach and famous temples like Mangaladevi, Gokarnanatheshwara, Kadri Manjunath.
                                     Few other must visit places are Adyar Hills, Lobo's river view, Ullal Beach, Holly hill.
                                   </p>

                                <p>
                                    &nbsp; When one is visiting Mangalore begin the day with the beautiful temples and end the day with sunset at Tannirbhavi or Someshwara Beach.
                                   </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="col s10 m12">
                    <h3 className="header">Mangalore Restaurants</h3>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src={require('../img/mglre7.jpg')} style={{ width: 320 }} />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p> Mangalore is a food-lover's heaven. Few famous food to try out are Neer Dose, Kori Rotti, Mangalore Buns, Goli Baje.
                                As it is a coastal side, you get variety of fish items like fish curry, fish fry, fiah masala, sigdi chutney, and lot more.
                                     </p>
                                <p>
                                    &nbsp; When you visit Mangalore, you must check into the ice cream spots in Mangalore.Pubbas and Ideals main spots to check out for ice creams. Mangalore is also famous for its ice creams. Mangalore is ice cream capital.
                                     </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="card-action">
                    <Link to={{ pathname: '/' }}>Go to Home</Link>
                </div>
            </div>
        );
    }
}

export default Mangalore;