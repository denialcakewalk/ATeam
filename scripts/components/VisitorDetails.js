/**
 * Created by Nisarg on 5/14/2016.
 */

import React from 'react';

class VisitorDetails extends React.Component {
    render() {

        var visitorImageHeight ={
            height : 180
        }


        return (
            <div>
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Visitor's Details
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <form role="form">
                                                <div className="form-group">
                                                    <input className="form-control" placeholder="Visitor's Name"/>
                                                </div>
                                                <div className="form-group">
                                                    <input className="form-control" placeholder="Address"/>
                                                </div>


                                                <div className="form-group">
                                                    <label>Gender :</label>&nbsp;&nbsp;

                                                    <div className="btn-group" data-toggle="buttons">
                                                        <label className="btn btn-default">
                                                            <input type="radio" id="radioMale" name="quality[25]" value="1" /> Male
                                                        </label>
                                                        <label className="btn btn-default">
                                                            <input type="radio" id="radioFemale" name="quality[25]" value="2" /> Female
                                                        </label>
                                                    
                                                    </div>
                                                </div>



                                                {/*
                                                <div className="form-group">
                                                    <label>D.O.B. :</label>&nbsp;&nbsp;

                                                    <div className="btn-group" data-toggle="buttons">
                                                        <label className="btn btn-default">
                                                            <input type="radio" id="radioMale" name="quality[25]" value="1" /> Male
                                                        </label>
                                                        <label className="btn btn-default">
                                                            <input type="radio" id="radioFemale" name="quality[25]" value="2" /> Female
                                                        </label>
                                                        <label className="btn btn-default">
                                                            <input type="radio" id="radioOther" name="quality[25]" value="3" /> Other
                                                        </label>
                                                    </div>
                                                </div>
                                                 */}
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input type="number" className="form-control" placeholder="Mobile Number"/>
                                                     <span className="form-group input-group-btn">
                                                        <button className="btn btn-primary" type="button">Verify</button>
                                                      </span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xs-6">
                                                        <div className="form-group">

                                                            <select className="form-control">
                                                                <option>Aadhar Card</option>
                                                                <option>Election Id</option>
                                                                <option>Licence</option>
                                                                <option>Passport</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-xs-6">
                                                        <label for="lastname" className="sr-only"></label>
                                                        <input id="lastname" className="form-control input-group-lg reg_name" type="text" name="lastname"
                                                               title="Enter last name"
                                                               placeholder="Number"/>
                                                    </div>
                                                </div>


                                                <div className="form-group">
                                                    <input className="form-control" placeholder="Vehicle Number"/>
                                                </div>

                                                <div className="row">
                                                    <div className="col-xs-6">
                                                        <div className="form-group">

                                                            <select className="form-control">
                                                                <option>Tower 1</option>
                                                                <option>Tower 2</option>
                                                                <option>Tower 3</option>
                                                                <option>Tower 4</option>
                                                                <option>Tower 5</option>
                                                                <option>Tower 6</option>
                                                                <option>Tower 7</option>
                                                                <option>Tower 8</option>
                                                                <option>Tower 9</option>
                                                                <option>Tower 10</option>
                                                                <option>Tower 11</option>
                                                                <option>Tower 12</option>
                                                                <option>Tower 13</option>
                                                                <option>Tower 14</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-xs-6">
                                                        <label for="lastname" className="sr-only"></label>
                                                        <input id="lastname" className="form-control input-group-lg reg_name" type="number" name="lastname"
                                                               title="Enter last name"
                                                               placeholder="Flat Number"/>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <input className="form-control" placeholder="Purpose"/>
                                                </div>



                                                {/*
                                                <div className="row">
                                                    <div className="col-xs-6">
                                                        <div className="form-group">

                                                            <select className="form-control">
                                                                <option>Two Wheeler</option>
                                                                <option>Four wheeler</option>
                                                                <option>Bycycle</option>
                                                                <option>Three Wheeler</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6">
                                                        <label for="lastname" className="sr-only"></label>
                                                        <input id="lastname" className="form-control input-group-lg reg_name" type="text" name="lastname"
                                                               title="Enter last name"
                                                               placeholder="Vehicle Number"/>
                                                    </div>
                                                </div>
                                                 */}

                                                {/*
                                                <div className="form-group">
                                                    <label>In Time :</label>&nbsp;&nbsp;
                                                    <div className="btn-group" data-toggle="buttons">
                                                        <label className="btn btn-default">
                                                            <input type="radio" id="radioMale" name="quality[25]" value="1" /> Male
                                                        </label>
                                                        <label className="btn btn-default">
                                                            <input type="radio" id="radioFemale" name="quality[25]" value="2" /> Female
                                                        </label>
                                                        <label className="btn btn-default">
                                                            <input type="radio" id="radioOther" name="quality[25]" value="3" /> Other
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Out Time :</label>&nbsp;&nbsp;
                                                    <div className="btn-group" data-toggle="buttons">
                                                        <label className="btn btn-default">
                                                            <input type="radio" id="radioMale" name="quality[25]" value="1" /> Male
                                                        </label>
                                                        <label className="btn btn-default">
                                                            <input type="radio" id="radioFemale" name="quality[25]" value="2" /> Female
                                                        </label>
                                                        <label className="btn btn-default">
                                                            <input type="radio" id="radioOther" name="quality[25]" value="3" /> Other
                                                        </label>
                                                    </div>
                                                </div>
                                                 */}
















                                            </form>

                                        </div>

                                        <div className="col-md-6">

                                            <form role="form">

                                                <div className="row">
                                                    <div className="col-xs-3">

                                                    </div>
                                                    <div className="col-xs-6">


                                                        <div className="form-group">
                                                            <img src="./css/images/default.jpg" className="form-control" placeholder="Visitor's Name" style={visitorImageHeight}/>
                                                        </div>


                                                    </div>
                                                    <div className="col-xs-3">

                                                    </div>

                                                </div>


                                                <div className="row">
                                                    <div className="col-xs-3">

                                                    </div>
                                                    <div className="col-xs-6">

                                                        <div className="form-group">

                                                              <button className="btn btn-success">
                                                                  <span>
                                                                        <i className="fa fa-camera"></i>
                                                                    </span>
                                                              </button>

                                                        </div>
                                                    </div>
                                                    <div className="col-xs-3">

                                                    </div>

                                                </div>


                                                    {/*
                                                    <div className="form-group">
                                                        <input className="form-control" placeholder="To Meet : Owner / Rental Name"/>
                                                    </div>
                                                     */}





                                                    {/*
                                                    <div className="row">
                                                        <div className="col-xs-6">
                                                            <div className="form-group">

                                                                <label>In Time :</label>&nbsp;&nbsp;
                                                                <div className="btn-group" data-toggle="buttons">
                                                                    <label className="btn btn-default">
                                                                        <input type="radio" id="radioMale" name="quality[25]" value="1" /> Male
                                                                    </label>
                                                                    <label className="btn btn-default">
                                                                        <input type="radio" id="radioFemale" name="quality[25]" value="2" /> Female
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-6">
                                                            <label>Out Time :</label>&nbsp;&nbsp;
                                                            <div className="btn-group" data-toggle="buttons">
                                                                <label className="btn btn-default">
                                                                    <input type="radio" id="radioMale" name="quality[25]" value="1" /> Male
                                                                </label>
                                                                <label className="btn btn-default">
                                                                    <input type="radio" id="radioFemale" name="quality[25]" value="2" /> Female
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                     */}

















                                            </form>
                                        </div>


                                    </div>




                                </div>
                            </div>

                        </div>


                    </div>
                    {/*
                    <div className="row">
                        <div className="col-md-12">
                            <button type="button" id="btnSubmit" className="btn btn-primary btn-sm">Submit</button>
                            <button type="button" id="btnCancel" className="btn btn-primary btn-sm">Cancel</button>
                            <button type="button" className="btn btn-success">Success</button>
                            <button type="button" className="btn btn-info">Info</button>
                            <button type="button" className="btn btn-warning">Warning</button>
                            <button type="button" className="btn btn-danger">Danger</button>

                        </div>
                    </div>
                     */}
                    <button className="btn btn-primary">Check In</button>&nbsp;
                    <button className="btn btn-primary">Edit</button>&nbsp;
                    <button className="btn btn-primary">Delete</button>&nbsp;
                    <button className="btn btn-success">New</button>&nbsp;

                </div>

            </div>

        )
    }
}

export default VisitorDetails;
