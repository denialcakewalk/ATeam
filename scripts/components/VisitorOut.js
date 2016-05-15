import React from 'react';

class CheckOut extends React.Component {
    constructor() {
        super();

        this.state = {
            visitorCheckIns: []
        }

        var checkInState = this;
        $.ajax({
            async: true,
            type: "GET",
            url: "http://192.101.102.165:4030/checkoutlist",
        }).done(function (data) {
            if (data.length > 0) {
                debugger;
                var VisitorLists = [];
                var VisitorIDs = data.map(function (_data) {
                    $.ajax({
                        async: true,
                        type: "GET",
                        url: "http://192.101.102.165:4030/newvisitors/visitor/" + _data.visitorid,
                    }).done(function (checkInData) {
                        checkInData[0].visitorid = _data._id;
                        // VisitorLists.push(checkInData);
                        VisitorLists.push(checkInData);

                        checkInState.setState({visitorCheckIns: VisitorLists});
                    }).fail(function (xhr, status, err) {
                        console.error(err);
                    });
                });
                VisitorIDs.filter(function (VisitorId) {

                })
            }
        }).fail(function (xhr, status, err) {
            console.log(err);
        });

    }

    renderVisitorCheckIns(visitorCheckIn) {
        visitorCheckIn = visitorCheckIn[0];
        return (
            <div key={visitorCheckIn._id}>
                <div className="row">
                    <div className="col-md-2 col-xs-3">
                        <form role="form">
                            <div className="form-group">
                                <img className="form-control"
                                     src={visitorCheckIn.photo == "" || visitorCheckIn.photo == undefined ? "/assets/img/default.jpg" : visitorCheckIn.photo}
                                     className="img-responsive"/>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 col-xs-5">
                        <form role="form">
                            <div className="form-group">
                                <label className="outPersonName">{visitorCheckIn.name}</label>
                                <div>{visitorCheckIn.contactnumber}</div>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-4 col-xs-2">
                        <form role="form">
                            <div className="form-group">
                                <button className="btn btn-primary btn-md" data-visitorid={visitorCheckIn.visitorid}>OUT
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
                <hr/>
            </div>
        )
    }


    searchVisitor() {

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
                                    Visior's Check Out
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <form role="form">

                                                <div id="txtMobileDiv" className="form-group">
                                                    <div className="input-group">
                                                        <input id="txtVisitorSearch" type="number"
                                                               className="form-control"
                                                               placeholder="Visitor Name or Contact Number"/>
                                                     <span className="form-group input-group-btn">
                                                        <button className="btn btn-primary" type="button"
                                                                onClick={this.searchVisitor}>Search
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
                                        {this.state.visitorCheckIns.map(this.renderVisitorCheckIns)}
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

export default CheckOut;