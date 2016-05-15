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

    renderVerificationType(verificationType) {
        return <option key={verificationType._id} value={verificationType._id}>{verificationType.typename}</option>
    }

    onCameraClick (e){
        e.preventDefault();


        Webcam.set({

            height: 180,
           
            image_format: 'jpeg',
            jpeg_quality: 90
        });
        Webcam.attach('#imgDiv');

    }

    sendOTP(e){

        e.preventDefault();
        var mobileNo = $("#txtVisitorNum").val();


        var data = JSON.stringify({ countryCode: "91", mobileNumber: mobileNo });
        $.ajax({
            url: 'https://sendotp.msg91.com/api/generateOTP',
            type: 'POST',
            crossDomain: true,
            processData: false,
            contentType: 'application/json',
            headers: { 'Access-Control-Allow-Origin': '*' },
            beforeSend: function (request) {
                request.setRequestHeader("Package-Name", "vms.firebaseapp.com");
                request.setRequestHeader("Secret-Key", "sumit@12345");
            },
            dataType: 'json',
            data: data,
            success: function (data) {
                $('#veryfyOTPdiv').show();
                //$('#txtMobileDiv').hide();
                // var resp = JSON.parse(data)
                // console.log(resp.status);

            },
            error: function (jqXHR, textStatus, ex) {
                $('#btnSendOtp').html('Resend OTP');
                console.log(textStatus + "," + ex + "," + jqXHR.responseText);
            }
        });
    }

    visitorCheckIn() {


        var VisitorName = $("#txtVisitorName").val().trim();
        var VisitorNum = $("#txtVisitorNum").val().trim();
        var VisitorAddress = $("#txtVisitorAddress").val().trim();
        var VisitorGender = $("[name='rdoVisitorGender']:checked").length == 1 ? $("[name='rdoVisitorGender']:checked").val().trim() : "";
        var VerificationTypeId = ""; //$("#dlVerificationType:selected").val().trim();
        var VerificationTypeNum = $("#txtVerificationNum").val().trim();
        var VerificationVehicleNum = $("#txtVisitorVehicleNum").val().trim();
        var PhotoSrc = $('#imgDiv img').length == 0 ? "/assets/img/default.jpg" : $('#imgDiv img').attr("src");
        var TowerNum = $("#dlTowerNum option:selected").val().trim();
        var FlatNum = $("#txtFlatNum").val().trim();
        var Purpose = $("#txtPurpose").val().trim();

        if ((VisitorName && VisitorNum && VisitorAddress && VisitorGender && VerificationTypeNum && VerificationVehicleNum && TowerNum && FlatNum && Purpose) != "") {
            var VisitorId = "";
            var dbPromise = idb.open('newvisitors', 1, function (upgradeDb) {
                var newvisitorsStore = upgradeDb.createObjectStore('newvisitors', { keyPath: 'id' });
            });

            return dbPromise.then(function (db) {
                var tx = db.transaction('newvisitors', 'readwrite');
                var newvisitorsStore = tx.objectStore('newvisitors');

                newvisitorsStore.put({
                    name: VisitorName,
                    address: VisitorAddress,
                    gender: VisitorGender,
                    contactnumber: VisitorNum,
                    verificationtypeid: VerificationTypeId,
                    verificationnumber: VerificationTypeNum,
                    towernumber: TowerNum,
                    flatnumber: FlatNum,
                    visitortypeid: "57375b8ae8f44693cbb3e084",
                    photo: PhotoSrc,
                    photoproof: "",
                    id: Math.random().toString(36).slice(2),
                    isSync:false
                });
                return tx.complete;
            }).then(function () {
                console.log('Added');
            });
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
                    visitortypeid: "57375b8ae8f44693cbb3e084",
                    photo: PhotoSrc,
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

    clearControls(){
        $("#txtVisitorName").val("");
        $("#txtVisitorNum").val("");
        $("#txtVisitorAddress").val("");
        $("[name='rdoVisitorGender']").prop("checked", true);
        //$("#dlVerificationType:selected").val().trim();
        $("#txtVerificationNum").val("");
        $("#txtVisitorVehicleNum").val("");
        $("dlTowerNum option:nth(0)").attr("selected", "selected");
        $("#txtFlatNum").val("");
        $("#txtPurpose").val("");
    }

    verifyCode(e){
        e.preventDefault();

        var mobileNo = $("#txtVisitorNum").val();
        var codeVal = $("#txtCode").val();

        var data = JSON.stringify({ countryCode: "91", mobileNumber:mobileNo, oneTimePassword: codeVal });
        $.ajax({
            url: 'https://sendotp.msg91.com/api/verifyOTP',
            type: 'POST',
            crossDomain: true,
            processData: false,
            contentType: 'application/json',
            headers: { 'Access-Control-Allow-Origin': '*' },
            beforeSend: function (request) {
                request.setRequestHeader("Package-Name", "vms.firebaseapp.com");
                request.setRequestHeader("Secret-Key", "sumit@12345");
            },
            dataType: 'json',
            data: data,
            success: function (data) {
                $('#lblMessageDiv').show();
                $('#lblMessage')[0].textContent='Valid Code';
                $('#lblMessage')[0].style.color='green';
                $('#lblResend').hide();
                $('#lblMessageDiv').hide();
                $('#lblMessage').hide();
                $('#veryfyOTPdiv').hide();
                // var resp = JSON.parse(data)
                // console.log(resp.status);
            },
            error: function (jqXHR, textStatus, ex) {
                $('#lblMessageDiv').show();
                $('#lblMessage')[0].textContent='InValid Code';
                $('#lblMessage')[0].style.color='red';
                $('#lblResend').show();
                // console.log(textStatus + "," + ex + "," + jqXHR.responseText);
            }
        });
    }

    onCaptureClick (e){
        e.preventDefault();
        // imgDiv
        Webcam.snap(function (data_uri){
            var img=new Image();
            img.src=data_uri;
            img.id = 'imgToDisplay';
           // img.className = 'form-control img-responsive';

            var dv=$('#imgDiv');
            dv.empty();
            dv.append(img);
            //$('#visitorImg')[0].src=data_uri;
        });
    }

    render() {

        var visitorImageHeight = {
            height: 180,
            width:180,
        }

        var txtVisitorAddressStyle = {
            resize: 'none'
        }

        var hideShow = {
            display: 'none'
        }

        var hideLblMessageDiv = {
            display: 'none'
        }

        var hideLblMessageDiv = {
            display: 'none'
        }

        var hideShowVerifyDiv = {
            display: 'none'
        }

        var hideLblMessageDiv = {
            display: 'none'
        }


        return (
            <div>
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Visitor's Detail
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <form role="form">
                                                <div className="form-group">
                                                    <input id="txtVisitorName" className="form-control"
                                                           placeholder="Visitor's Name"/>
                                                </div>

                                                <div id="txtMobileDiv" className="form-group">
                                                    <div className="input-group">
                                                        <input id="txtVisitorNum" maxLength="10" type="number" className="form-control"
                                                               placeholder="Mobile Number"/>
                                                     <span className="form-group input-group-btn">
                                                        <button id="btnSendOtp" className="btn btn-primary" type="button"
                                                                onClick={this.sendOTP}>Send OTP
                                                        </button>
                                                      </span>
                                                    </div>
                                                </div>

                                                <div id="veryfyOTPdiv" className="form-group" style={hideShowVerifyDiv}>
                                                    <div className="input-group">
                                                        <input id="txtCode" type="number" className="form-control"
                                                               placeholder="Verification Code"/>

                                                        <span className="form-group input-group-btn">
                                                        <button className="btn btn-primary" type="button"
                                                                onClick={this.verifyCode}>Verify
                                                        </button>
                                                      </span>
                                                    </div>
                                                </div>



                                                <div id="lblMessageDiv" className="form-group"
                                                     style={hideLblMessageDiv}>
                                                    <label id="lblMessage"></label><br/>
                                                    <a href="#" id="lblResend" style={hideLblMessageDiv}
                                                       onClick={this.sendOTP}>Resend OTP</a>
                                                </div>

                                                <div className="form-group">
                                                    <input type="text" id="txtVisitorAddress" className="form-control"
                                                              placeholder="Address" rows="3"
                                                              style={txtVisitorAddressStyle}></input>
                                                </div>

                                                <div className="form-group">
                                                    <label>Gender :</label>&nbsp;&nbsp;

                                                    <div className="btn-group" data-toggle="buttons">
                                                        <label className="btn btn-default active">
                                                            <input type="radio" id="radioMale" name="rdoVisitorGender"
                                                                   value="Male" defaultChecked="checked" /> Male
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
                                                    <input type="text" id="txtPurpose" className="form-control"
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


                                                        <div id="imgDiv" className="form-group">

                                                               <img id="visitorImg" src="/assets/img/default.jpg" className="form-control img-responsive" style={visitorImageHeight}/>


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

                                                            <button className="btn btn-success"
                                                                    onClick={this.onCameraClick}>
                                                                  <span>
                                                                        <i className="fa fa-camera"></i>
                                                                    </span>
                                                            </button>
                                                            &nbsp;

                                                            <button className="btn btn-info"
                                                                    onClick={this.onCaptureClick}>
                                                                Capture

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
                    {/*
                    <button className="btn btn-primary">Edit</button>
                    &nbsp;
                    <button className="btn btn-primary">Delete</button>
                    &nbsp;
                    <button className="btn btn-success">New</button>
                    &nbsp;
                     */}

                </div>

            </div>

        )
    }
}

export default VisitorDetails;
