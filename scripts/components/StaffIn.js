import React from 'react';

class StaffOut extends React.Component {
    constructor() {
        super();

        this.state = {
            staffCheckIns: []
        }

        var checkInState = this;
        $.ajax({
            async: true,
            type: "GET",
            url: "http://192.101.102.165:4030/newvisitorsstaff",
        }).done(function (data) {
            if (data.length > 0) {
                console.log(data);
                checkInState.setState({staffCheckIns: data});
            }
        }).fail(function (xhr, status, err) {
            console.log(err);
        });
    }

    staffCheckInFn(event) {
        event.preventDefault();
        debugger;
        var VisitorId = $(event.currentTarget).attr("data-visitorid");
        var checkInTime = new Date();

        $.ajax({
            async: true,
            type: "POST",
            url: "http://192.101.102.165:4030/api/visitordetails/",
            data: {
                visitorid: VisitorId,
                checkin: checkInTime
            }
        }).done(function (data) {
            console.log(data);
        }).fail(function (xhr, status, err) {
            console.error(err);
        });

        return false;
    }

    renderStaffCheckIns(obj, staffCheckIn) {
        return (
            <div>
                <div className="row" key={staffCheckIn._id}>

                    <div className="col-md-2 col-xs-3">
                        <form role="form">
                            <div className="form-group">
                                <img className="form-control" src={staffCheckIn.photo}
                                     className="img-responsive"/>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 col-xs-5">
                        <form role="form">
                            <div className="form-group">
                                <label className="outPersonName">{staffCheckIn.name}</label>
                                <div>{staffCheckIn.contactnumber}</div>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-4 col-xs-4">
                        <form role="form">
                            <div className="form-group">
                                <button className="btn btn-primary btn-md" data-visitorid={staffCheckIn._id}
                                        onClick={this.staffCheckInFn}>IN
                                </button>

                            </div>

                        </form>
                    </div>

                </div>
                <hr/>
            </div>
        )
    }

    render() {
        var imgHeightWidth = {
            height: 32,
            width: 56
        }

        var mobileFont = {
            fontSize: 12
        }

        return (

            <div>
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Staff Check In
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <form role="form">
                                                <div className="form-group">
                                                    <input className="form-control" placeholder="Search.."/>
                                                </div>


                                            </form>

                                        </div>

                                        <div className="col-md-6">

                                            <form role="form">

                                                <div className="row">
                                                    <div className="col-xs-3">

                                                    </div>
                                                    <div className="col-xs-6">


                                                    </div>
                                                    <div className="col-xs-3">

                                                    </div>

                                                </div>


                                                <div className="row">
                                                    <div className="col-xs-3">

                                                    </div>
                                                    <div className="col-xs-6">


                                                    </div>
                                                    <div className="col-xs-3">

                                                    </div>

                                                </div>


                                            </form>
                                        </div>


                                    </div>

                                    <div>
                                        {this.state.staffCheckIns.map((staffCheckIn) => this.renderStaffCheckIns(this, staffCheckIn))}
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>


                </div>

            </div>
        )
    }
}

export default StaffOut;