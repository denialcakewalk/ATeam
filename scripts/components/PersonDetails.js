import React from 'react';
import $ from 'jquery';
import autobind from 'autobind-decorator';
import PersonDetailsModal from './PersonDetailsModal';

@autobind
class PersonDetails extends React.Component {
    savePersonDetails() {
        // PersonDetailsModal.setState({view: {showModal: true}});
        debugger;

        var OwnerName = $("#txtOwnerName").val().trim();
        var TowerNum = $("#dlTower option:selected").val();
        var FlatNum = $("#txtFlatNum").val();
        var Gender = $("[name='rdoGender']:checked").val();
        var ContactNum = $("#txtContactNumber").val().trim();

        if ((OwnerName && TowerNum && FlatNum && Gender && ContactNum) != "") {
            $.ajax({
                type: "POST",
                url: "http://192.101.102.165:4030/api/persondetails",
                data: {
                    name: OwnerName,
                    towernumber: TowerNum,
                    faltnumber: FlatNum,
                    gender: Gender,
                    contactnumber: ContactNum,
                    photo: ""
                },
                dataType: "json",
                success: function (data) {
                    if (data != "")
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

    render() {

        var visitorImageHeight = {
            height: 180
        }

        var divPersonDetailStyle = {
            display: 'none'
        }

        return (

            <div>
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Person Details</h2>
                            <h5>Welcome Jhon Deo , Love to see you back. </h5>
                        </div>
                        <div className="col-md-6">
                            <button onClick={this.openModal} className="btn btn-primary btn-small pull-right">Add
                            </button>
                        </div>
                    </div>
                    <hr/>
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
                                                        <label className="btn btn-default">
                                                            <input type="radio" id="radioMale" name="rdoGender"
                                                                   value="1"/> Male
                                                        </label>
                                                        <label className="btn btn-default">
                                                            <input type="radio" id="radioFemale" name="rdoGender"
                                                                   value="2"/> Female
                                                        </label>

                                                    </div>
                                                </div>


                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input id="txtContactNumber" type="number"
                                                               className="form-control"
                                                               placeholder="Mobile Number"/>
                                                     <span className="form-group input-group-btn">
                                                        <button className="btn btn-primary" type="button"
                                                                onClick={this.mobVerify}>Verify
                                                        </button>
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
                                                            <img src="/assets/img/default.jpg"
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

                        </div>


                    </div>

                    <button className="btn btn-primary" onClick={this.savePersonDetails}>Save</button>
                    &nbsp;
                    <button className="btn btn-primary">Edit</button>
                    &nbsp;
                    <button className="btn btn-primary">Delete</button>


                </div>

            </div>
        )
    }
}

export default PersonDetails;