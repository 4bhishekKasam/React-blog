import React, { Component } from 'react';
import './profile.css';

class Profile extends Component {
    render() {
        return (

            <div className="container">
                {/* <img className="materialboxed" width="950" height="560" src={require("../img/profile.jpg")}>
                  <div className="transBox"> I'm a Software Developer</div>   
                </img> */}

                <div className="row">
                    <div className="col s6">
                       I'm Abhishek Konnur.
                   </div>
                </div>
                <div className="row">
                    <div className="col s6">
                      I've always enjoyed traveling,
                   </div>
                </div>
                <div className="row">
                    <div className="col s6">
                      let it be hills or mountain, 
                   </div>
                </div>
                <div className="row">
                    <div className="col s4">
                    sea or ocean.
                   </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col s6">
                   I'm not a Writer, so why blog?
                   </div>
                </div>
                <div className="row">
                    <div className="col s6">
                It's the home for my adventure stories. The ups, the downs and everything between.
                   </div>
                </div>
            </div>

        );
    }
}

export default Profile;