import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Dudhsagar extends Component {
    render() {

        return (
            <div className="row" style={{ marginLeft: 25, marginRight: 25 }}>
                <div className="col s10 m12">
                    <h3 className="header">Dudhsagar</h3>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src={require('../img/dudhsagar3.jpg')} style={{ width: 320 }} />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                           <p>The Dudhsagar waterfalls, which is among the 100 highest waterfalls in the world is situated in the Indian state of Goa. The waterfall has a height of about 310 metres and an average width of about 30 metres. The falls assume spectacular proportions during the rainy season when they are fed abundantly by the monsoons, and the water cascades down in a silver avalanche, adding to the beauty of the Western Ghats.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="col s10 m12">
                    <h3 className="header">Places to visit in Dudhsagar</h3>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src={require('../img/dudhsagar4.jpg')} style={{ width: 320 }} />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                              <p>I visited dudhsagar during monsoons which is the best time to visit. The train journey through western ghats was amazing through the tunnels, green valley, falls.</p>
                          <br/>
                          <p>One can visit Dudhsagar falls by either train or taking a jeep ride from Castle-Rock railway station
                              to Collem village and then trekking from there to the falls.</p>
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

export default Dudhsagar;