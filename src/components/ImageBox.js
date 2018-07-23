import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './ImageBox.css';

class ImageBox extends Component {
    render() {
        return (
            <div className="row">

                <div className="row">
                    <div className="col s6 m3">
                        <div className="card">
                            <div className="card-image">
                                <img src={require('../img/mglre1.jpg')} />
                                <span className="card-title">Mangalore </span>
                            </div>
                            <div className="card-content">
                                <p>Mangalore is named after the goddess Mangaladevi.The city has the benefit of numerous golden-sand beaches like Panambur beach, Thannirbhavi beach, Someshwara beach, Ullal beach.. </p>
                            </div>
                            <div className="card-action">
                                <Link to={{pathname:'/Mangalore'}}>More </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col s6 m3">
                        <div className="card">
                            <div className="card-image">
                                <img src={require('../img/udupi4.jpg')} />
                                <span className="card-title">Udupi </span>
                            </div>
                            <div className="card-content">
                                <p>Udupi is a popular pilgrimage centre and tourist spot. Udupi is famous for the Lord Krishna temple located here. Famous tourist spot include Malpe beach, St.Marry's Island, Kapu beach..</p>
                            </div>
                            <div className="card-action">
                            <Link to={{pathname:'/Udupi'}}>More </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col s6 m3">
                        <div className="card">
                            <div className="card-image">
                                <img src={require('../img/goa2.jpg')} />
                                <span className="card-title">Goa </span>
                            </div>
                            <div className="card-content">
                                <p>Goa is a state on India's West coast. Goa is known for sea, sand and spices. Few of must visit places include  Panaji, Calangute, Baga, Anjuna, Vagator, Chapora fort,Agonda, Old Goa, </p>
                            </div>
                            <div className="card-action">
                            <Link to={{pathname:'/Goa'}}>More </Link>
                            </div>
                        </div>
                    </div>

                      <div className="col s6 m3">
                        <div className="card">
                            <div className="card-image">
                            <img src={require('../img/dudhsagar1.jpg')} />
                                <span className="card-title">Dudhsagar </span>
                            </div>
                            <div className="card-content">
                                <p>Dudhsagar Falls is a four-tiered waterfall located on the Mandovi River in the Indian state of Goa. The area is surrounded by a deciduous forests with a rich biodiversity.  </p>
                            </div>
                            <div className="card-action">
                            <Link to={{pathname:'/Dudhsagar'}}>More </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ImageBox;