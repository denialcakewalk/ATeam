import React from 'react';
import $ from 'jquery';
import autobind from 'autobind-decorator';
import PersonDetailsModal from './PersonDetailsModal';
import idb from 'idb';

@autobind
class PersonDetails extends React.Component {
    constructor() {
        super();

        this.state = {
            persons: []
        }

        var personState = this;
        $.ajax({
            async: true,
            type: "GET",
            url: "http://192.101.102.165:4030/api/persondetails",
            success: function (data) {
                personState.setState({persons: data});
            },
            error: function (xhr, err, status) {
                console.error(err);
            }
        });
    }

    renderPersons(_person){
        return (
            <div className="panel-group" key={_person._id}>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title pull-left  setFontOnSmallScreen">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"
                               className="collapsed">{_person.name}</a>
                        </h4>

                        <a href="#">
                            <i className="fa fa-trash-o fa-2x pull-right"></i>
                            <i className="fa fa-pencil fa-2x pull-right"></i>
                        </a>
                        <div className="clearfix"></div>

                    </div>
                    <div id="collapseOne" className="panel-collapse collapse">

                        <div className="panel-body">
                            <form role="form">
                                <div className="form-group">
                                    <span>{_person.name}</span>
                                </div>

                                <div className="form-group">
                                    <span >{_person.contactnumber}</span>
                                </div>
                                <div className="form-group">
                                    <span >Tower-{_person.towernumber}</span>&nbsp;<span >Flat No: {_person.faltnumber}</span>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        )
    }

    savePersonDetails() {
        // PersonDetailsModal.setState({view: {showModal: true}});
        debugger;

        var OwnerName = $("#txtOwnerName").val().trim();
        var TowerNum = $("#dlTower option:selected").val();
        var FlatNum = $("#txtFlatNum").val();
        var Gender = $("[name='rdoGender']:checked").val();
        var ContactNum = $("#txtContactNumber").val().trim();

        var imgSrc = $('#imgDiv img').length == 0 ? "/assets/img/default.jpg" : $('#imgDiv img').attr("src");
        var imgCapture = $("#imgToDisplay");

        if ((OwnerName && TowerNum && FlatNum && Gender && ContactNum) != "") {
            var dbPromise = idb.open('persondetails', 1, function (upgradeDb) {
                var persondetailStore = upgradeDb.createObjectStore('persondetails', { keyPath: 'id' });
                persondetailStore.createIndex('persondetailsIndex', ['name', 'faltnumber'], { unique: true });

            });

            return dbPromise.then(function (db) {
                var tx = db.transaction('persondetails', 'readwrite');
                var persondetailStore = tx.objectStore('persondetails');
                //var index = trainStore.index('persondetailsIndex');
               // var resp = index.get(IDBKeyRange.only([$("#txtSource").val(), $("#txtDest").val()]));
                persondetailStore.put({
                    name: OwnerName,
                    towernumber: TowerNum,
                    faltnumber: FlatNum,
                    gender: Gender,
                    contactnumber: ContactNum,
                    photo: "",
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
                url: "http://192.101.102.165:4030/api/persondetails",
                data: {
                    name: OwnerName,
                    towernumber: TowerNum,
                    faltnumber: FlatNum,
                    gender: Gender,
                    contactnumber: ContactNum,
                    photo: imgSrc
                },
                dataType: "json",
                success: function (data) {
                    console.log(data);
                },
                error: function (xhr, err, status) {
                    console.error(err);
                }
            });
            // fetch("http://192.101.102.165:4030/api/persondetails", {data:JSON.stringify({
            //     name : OwnerName,
            //     towernumber : TowerNum,
            //     faltnumber:FlatNum,
            //     gender:Gender,
            //     contactnumber: ContactNum,
            //     photo: ""
            // })}).then(function (data) {
            //     console.log(data);
            // }).catch(function (err) {
            //     console.error(err);
            // })
        }
    }


    openModal() {

    }

    onCaptureClick(e) {
        e.preventDefault();
        // imgDiv
        Webcam.snap(function (data_uri) {
            var img = new Image();
            img.src = data_uri;
            img.id = 'imgToDisplay';
            var dv = $('#imgDiv');
            dv.empty();
            dv.append(img);
            //$('#visitorImg')[0].src=data_uri;
        });
    }

    onCameraClick(e) {
        e.preventDefault();


        Webcam.set({

            height: 280,
            image_format: 'jpeg',
            jpeg_quality: 90
        });
        Webcam.attach('#imgDiv');

    }

    render() {

        var visitorImageHeight = {
            height: 180
        }

        var divPersonDetailStyle = {
            display: 'none'
        }

        var heightCollapse = {
            height: 0
        }

        var paddingIcons = {
            paddingLeft: 10
        }

        return (

            <div>
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Person Details</h2>

                        </div>
                        <div className="col-md-6">
                            <button onClick={this.openModal} className="btn btn-primary btn-small pull-right" data-toggle="collapse" data-target="#addPersonDetailsDiv">Add
                            </button>
                        </div>
                    </div>
                    <hr/>


                    <div id="OwnerDetailsGrid">
                        {this.state.persons.map(this.renderPersons)}
                    </div>


                    <div id="addPersonDetailsDiv" className="row collapse">
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
                                                    <input id="txtOwnerName" className="form-control"
                                                           placeholder="Owner's Name"/>
                                                </div>

                                                <div className="row">
                                                    <div className="col-xs-6">
                                                        <div className="form-group">

                                                            <select id="dlTower" className="form-control">
                                                                <option value="1">Tower 1</option>
                                                                <option value="2">Tower 2</option>
                                                                <option value="3">Tower 3</option>
                                                                <option value="4">Tower 4</option>
                                                                <option value="5">Tower 5</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-xs-6">
                                                        <label for="txtFlatNum" className="sr-only"></label>
                                                        <input id="txtFlatNum"
                                                               className="form-control input-group-lg reg_name"
                                                               type="number"
                                                               placeholder="Flat Number"/>
                                                    </div>
                                                </div>


                                                <div className="form-group">
                                                    <label>Gender :</label>&nbsp;&nbsp;

                                                    <div className="btn-group" data-toggle="buttons">
                                                        <label className="btn btn-default active">
                                                            <input type="radio" id="radioMale" name="rdoGender"
                                                                   value="Male" defaultChecked="checked"/> Male
                                                        </label>
                                                        <label className="btn btn-default">
                                                            <input type="radio" id="radioFemale" name="rdoGender"
                                                                   value="Female"/> Female
                                                        </label>

                                                    </div>
                                                </div>


                                                <div className="form-group">
                                                    <input id="txtContactNumber" type="number" className="form-control"
                                                           placeholder="Mobile Number"/>
                                                </div>
                                            </form>

                                        </div>

                                        <div className="col-md-6">

                                            <form role="form">

                                                <div className="row">
                                                    <div className="col-xs-3">

                                                    </div>
                                                    <div className="col-xs-6">


                                                        <div id="imgDiv" className="form-group">
                                                            <img id="visitorImg" src="/assets/img/default.jpg"
                                                                 className="form-control img-responsive"
                                                                 placeholder="Visitor's Name"
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
                                                 Bootstrap Modal
                                                 */}
                                                <div id="divPersonDetail" className="modal fade" id="myModal"
                                                     role="dialog" style={divPersonDetailStyle}>
                                                    <div className="modal-dialog modal-lg">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <button type="button" className="close"
                                                                        data-dismiss="modal">&times;</button>
                                                                <h4 className="modal-title">Modal Header</h4>
                                                            </div>
                                                            <div className="modal-body">
                                                                <p>This is a large modal.</p>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-default"
                                                                        data-dismiss="modal">Close
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Bootstrap Over */}

                                            </form>
                                        </div>


                                    </div>


                                </div>
                            </div>
                            <button className="btn btn-primary" onClick={this.savePersonDetails}>Save</button>

                            
                        </div>




                    </div>

                </div>

            </div>
        )
    }
}

export default PersonDetails;