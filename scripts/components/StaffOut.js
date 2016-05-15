import React from 'react';

class StaffIn extends React.Component {
    constructor() {
        super();

        this.state = {
            staffCheckIns: []
        }

        var checkInState = this;
        $.ajax({
            async: true,
            type: "GET",
            url: "http://192.101.102.165:4030/checkoutlist",
        }).done(function (data) {
            if (data.length > 0) {
                debugger;
                var StaffLists = [];
                var StaffIDs = data.map(function (_data) {
                    $.ajax({
                        async: true,
                        type: "GET",
                        url: "http://192.101.102.165:4030/newvisitors/staff/" + _data.visitorid,
                    }).done(function (checkInData) {
                        checkInData[0].visitorid = _data._id;

                        // StaffLists.push(checkInData);
                        StaffLists.push(checkInData);

                        checkInState.setState({staffCheckIns: StaffLists});
                    }).fail(function (xhr, status, err) {
                        console.error(err);
                    });
                })
            }
        }).fail(function (xhr, status, err) {
            console.log(err);
        });

    }

    staffLogOut(event) {
        debugger;
        event.preventDefault();

        var visitordetailsid = $(event.currentTarget).attr("data-visitordetailsid");
        var visitorid = $(event.currentTarget).attr("data-visitorid");
        var personid = $(event.currentTarget).attr("data-personid");
        var purpose = $(event.currentTarget).attr("data-purpose");
        var checkin = $(event.currentTarget).attr("data-checkin");

        $.ajax({
            async: true,
            type: "DELETE",
            url: "http://192.101.102.165:4030/api/visitordetails/",
            data: {_id: visitordetailsid},
        }).done(function (data) {
            $.ajax({
                async: true,
                type: "POST",
                url: "http://192.101.102.165:4030/api/visitordetails/",
                data: {
                    visitorid: visitorid,
                    personid: personid,
                    purpose: purpose,
                    checkin: checkin,
                    checkout:new Date()
                },
            }).done(function (data) {
                console.log(data);
            }).fail(function (xhr, status, error) {
                console.error(error);
            });
        }).fail(function (xhr, status, error) {
            console.error(error);
        });

        return false;
    }

    renderStaffCheckIns(obj, staffCheckIn) {
        staffCheckIn = staffCheckIn[0];
        return (
            <div key={staffCheckIn._id}>
                <div className="row">
                    <div className="col-md-2 col-xs-3">
                        <form role="form">
                            <div className="form-group">
                                <img className="form-control"
                                     src={staffCheckIn.photo == "" || staffCheckIn.photo == undefined ? "/assets/img/default.jpg" : staffCheckIn.photo}
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

                    <div className="col-md-4 col-xs-2">
                        <form role="form">
                            <div className="form-group">
                                <button className="btn btn-primary btn-md" data-visitordetailsid={staffCheckIn._id}
                                        data-personid={staffCheckIn.personid}
                                        data-visitorid={staffCheckIn.visitorid}
                                        data-person={staffCheckIn.purpose}
                                        data-checkin={staffCheckIn.checkin}
                                        onClick={obj.staffLogOut}>OUT
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
                                    Staff Check Out
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

export default StaffIn;