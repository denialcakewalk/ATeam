import React from 'react';

class CheckOut extends React.Component {
    render() {



        var imgHeightWidth = {
            height:32,
            width:56
        }


        var mobileFont = {
            fontSize:12
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

                                    <div className="row">

                                        <div className="col-md-2 col-xs-3">
                                            <form role="form">
                                                <div className="form-group">
                                                    <img className="form-control" src="./css/images/default.jpg" className="img-responsive" style={imgHeightWidth}/>

                                                </div>
                                            </form>


                                        </div>
                                        <div className="col-md-6 col-xs-5">
                                            <form role="form">
                                                <div className="form-group">
                                                    <label className="outPersonName">Sohel Vali Cakewalk</label>
                                                    <div style={mobileFont}>9898548754</div>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="col-md-4 col-xs-2">
                                            <form role="form">
                                                <div className="form-group">
                                                    <button className="btn btn-primary btn-md">Out</button>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                    <hr/>
                                    

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