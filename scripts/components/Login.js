/**
 * Created by Sumit Patel on 5/15/2016.
 */
/*
 Not Found
 */

import React from 'react';


class Login extends React.Component {



    render() {

var bsExample={margin:20}

        return (

            <div class="bsExample">
                <div id="myModal" class="modal fade">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                <h4 class="modal-title">Modal Window</h4>
                            </div>
                            <div class="modal-body">
                                <form role="form">
                                    <div class="form-group">
                                        <label for="recipient-name" class="control-label">Email:</label>
                                        <input type="text" class="form-control" id="recipient-name"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="message-text" class="control-label">Message:</label>
                                        <textarea class="form-control" id="message-text"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            )
    }
};




export default Login;


