/**
 * Created by Nisarg on 5/14/2016.
 */

import React from 'react';
import $ from 'jquery';

class VisitorDetails extends React.Component {
    constructor() {
        super();

        this.state = {
            verificationTypes: []
        }

        var verificationState = this;
        $.ajax({
            async: true,
            type: "GET",
            url: "http://192.101.102.165:4030/api/verificationtypes",
            success: function (data) {

                verificationState.setState({verificationTypes: data});
            },
            error: function (xhr, err, status) {
                console.error(err);
            }
        });
    }

    visitorCheckIn() {
        var VisitorName = $("#txtVisitorName").val().trim();
        var VisitorNum = $("#txtVisitorNum").val().trim();
        var VisitorAddress = $("#txtVisitorAddress").val().trim();
        var VisitorGender = $("[name='rdoVisitorGender']:checked").val().trim();
        var VerificationTypeId = ""; //$("#dlVerificationType:selected").val().trim();
        var VerificationTypeNum = $("#txtVerificationNum").val().trim();
        var VerificationVehicleNum = $("#txtVisitorVehicleNum").val().trim();
        var TowerNum = $("#dlTowerNum option:selected").val().trim();
        var FlatNum = $("#txtFlatNum").val().trim();
        var Purpose = $("#txtPurpose").val().trim();

        if ((VisitorName && VisitorNum && VisitorAddress && VisitorGender && VerificationTypeNum && VerificationVehicleNum && TowerNum && FlatNum && Purpose) != "") {
            var VisitorId = "";

            $.ajax({
                async: true,
                type: "POST",
                url: "http://192.101.102.165:4030/api/newvisitors",
                data: {
                    name: VisitorName,
                    address: VisitorAddress,
                    gender: VisitorGender,
                    contactnumber: VisitorNum,
                    verificationtypeid: VerificationTypeId,
                    verificationnumber: VerificationTypeNum,
                    towernumber: TowerNum,
                    flatnumber: FlatNum,
                    visitortypeid: "12345678",
                    photo: "",
                    photoproof: ""
                },
                dataType: "json",
                success: function (data) {

                },
                error: function (xhr, err, status) {
                    console.error(err);
                }
            }).done(function (data) {
                    debugger;
                    VisitorId = data._id;

                    $.ajax({
                        async: true,
                        type: "POST",
                        url: "http://192.101.102.165:4030/api/visitordetails",
                        data: {
                            visitorid: VisitorId,
                            personid: "12345678",
                            purpose: Purpose,
                            checkin: new Date(),
                            checkout: ""
                        },
                        dataType: "json",
                        success: function (data) {

                        },
                        error: function (xhr, err, status) {
                            console.error(err);
                        }
                    });
                })
                .then(function (data) {
                    debugger;
                });

            if (VisitorId != "") {


            }
        }

    }

    renderVerificationType(verificationType) {
        return <option key={verificationType._id} value={verificationType._id}>{verificationType.typename}</option>
    }

    render() {

        var visitorImageHeight = {
            height: 180
        }

        var txtVisitorAddressStyle = {
            resize: 'none'
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
                                                    <input id="txtVisitorName" className="form-control"
                                                           placeholder="Visitor's Name"/>
                                                </div>

                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input id="txtVisitorNum" type="number"
                                                               className="form-control" placeholder="Mobile Number"/>
                                                     <span className="form-group input-group-btn">
                                                        <button className="btn btn-primary" type="button">Verify
                                                        </button>
                                                      </span>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <textarea id="txtVisitorAddress" className="form-control"
                                                              placeholder="Address" rows="3"
                                                              style={txtVisitorAddressStyle}></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <label>Gender :</label>&nbsp;&nbsp;

                                                    <div className="btn-group" data-toggle="buttons">
                                                        <label className="btn btn-default">
                                                            <input type="radio" id="radioMale" name="rdoVisitorGender"
                                                                   value="Male"/> Male
                                                        </label>
                                                        <label className="btn btn-default">
                                                            <input type="radio" id="radioFemale" name="rdoVisitorGender"
                                                                   value="Female"/> Female
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

                                                <div className="row">
                                                    <div className="col-xs-6">
                                                        <div className="form-group">

                                                            <select id="dlVerificationType" className="form-control">
                                                                {this.state.verificationTypes.map(this.renderVerificationType)}
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-xs-6">
                                                        <input id="txtVerificationNum"
                                                               className="form-control input-group-lg reg_name"
                                                               type="text"
                                                               placeholder="Number"/>
                                                    </div>
                                                </div>


                                                <div className="form-group">
                                                    <input id="txtVisitorVehicleNum" className="form-control"
                                                           placeholder="Vehicle Number"/>
                                                </div>

                                                <div className="row">
                                                    <div className="col-xs-6">
                                                        <div className="form-group">

                                                            <select id="dlTowerNum" className="form-control">
                                                                <option value="1">Tower 1</option>
                                                                <option value="2">Tower 2</option>
                                                                <option value="3">Tower 3</option>
                                                                <option value="4">Tower 4</option>
                                                                <option value="5">Tower 5</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-xs-6">
                                                        <input id="txtFlatNum"
                                                               className="form-control input-group-lg reg_name"
                                                               type="number" name="lastname"
                                                               title="Enter last name"
                                                               placeholder="Flat Number"/>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <textarea id="txtPurpose" className="form-control"
                                                              placeholder="Purpose" style={txtVisitorAddressStyle}/>
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

                                                            <img src="./css/images/default.jpg" className="form-control"
                                                                 style={visitorImageHeight}/>

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
                    <button className="btn btn-primary" onClick={this.visitorCheckIn}>Check In</button>
                    &nbsp;
                    <button className="btn btn-primary">Edit</button>
                    &nbsp;
                    <button className="btn btn-primary">Delete</button>
                    &nbsp;
                    <button className="btn btn-success">New</button>
                    &nbsp;

                </div>

            </div>

        )
    }
}

export default VisitorDetails;
