import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Udupi extends Component {
    render() {

        return (
            <div className="row" style={{ marginLeft: 25, marginRight: 25 }}>
                <div className="col s10 m12">
                    <h3 className="header">Udupi</h3>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src={require('../img/udupi1.jpg')} style={{ width: 320 }} />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                              <p>Udupi is famous for the Lord Krishna temple located here.
                              Udupi is also renowned for its delectable cuisine and Udupi restaurants present all over India.
                          
                              </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="col s10 m12">
                    <h3 className="header">Places to visit in Udupi</h3>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src={require('../img/udupi3.jpg')} style={{ width: 320 }} />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p>During my stay at Mangalore I visted Udupi which is just 60kms away. 
                                    Famous tourist spots are Malpe Beach, Kapu Beach, Kodi Beach, St.Marry's Island and Shri Krishna Mutt.
                                   </p>
            <br/>
                <p>Another beautiful city beside Udupi is Manipal which is on higher altitude then Udupi.
                 It has many famous colleges , Restaurants, and site seeing places. One must visit End point because of its scenic beauty from top. </p>
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

export default Udupi;