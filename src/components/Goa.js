import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Goa extends Component {
    render() {

        return (
            <div className="row" style={{ marginLeft: 25, marginRight: 25 }}>
                <div className="col s10 m12">
                    <h3 className="header">Goa</h3>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src={require('../img/goa1.jpg')} style={{ width: 320 }} />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p> Goa, the smallest Indian state and much-loved tourist place of India, is situated in the coastal Konkan region and on the bank of Arabian Sea which forms its western coast. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="col s10 m12">
                    <h3 className="header">Places to visit in Goa</h3>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src={require('../img/goa2.jpg')} style={{ width: 320 }} />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p> Goa is just 90km from hometown with Calangute and Baga Beach being the nearest beaches. My visit to Goa is always on my bike ,visiting all of north goa beaches and forts. </p>
                                <br />
                                <p>Goa's beaches cover about 125 kilometres (78 mi) of its coastline. These beaches are divided into North and South Goa. Some of the more popular beaches are Colva, Calangute, Baga and Anjuna. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

                <div className="card-action">
                    <Link to={{ pathname: '/' }}>Go to Home</Link>
                </div>
            </div>
        );
    }
}

export default Goa;