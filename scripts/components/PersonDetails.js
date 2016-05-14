import React from 'react';

class PersonDetails extends React.Component {
    render() {

        var visitorImageHeight ={
            height:180
        }

        return (

            <div>
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Owner's Details
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <form role="form">
                                                <div className="form-group">
                                                    <input className="form-control" placeholder="Owner's Name"/>
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




                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input type="number" className="form-control" placeholder="Mobile Number"/>
                                                     <span className="form-group input-group-btn">
                                                        <button className="btn btn-primary" type="button">Verify</button>
                                                      </span>
                                                    </div>
                                                </div>

                                            </form>

                                        </div>

                                        <div className="col-md-6">

                                            <form role="form">

                                                <div className="row">
                                                    <div className="col-xs-3">

                                                    </div>
                                                    <div className="col-xs-6">



                                                        <div className="form-group">
                                                            <img src="./css/images/default.jpg" className="form-control img-responsive" placeholder="Visitor's Name" style={visitorImageHeight}/>
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

                    <button className="btn btn-primary">Save</button>&nbsp;
                    <button className="btn btn-primary">Edit</button>&nbsp;
                    <button className="btn btn-primary">Delete</button>


                </div>

            </div>
    )
    }
    }

    export default PersonDetails;