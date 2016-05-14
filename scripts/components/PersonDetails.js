import React from 'react';

class PersonDetails extends React.Component {
    render() {
        return (
            <div>
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Forms Page</h2>
                            <h5>Welcome Jhon Deo , Love to see you back. </h5>
                        </div>
                    </div>

                    <hr />
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Form Element Examples
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h3>Basic Form Examples</h3>
                                            <form role="form">
                                                <div className="form-group">
                                                    <label>Text Input</label>
                                                    <input className="form-control"/>
                                                    <p className="help-block">Help text here.</p>
                                                </div>
                                                <div className="form-group">
                                                    <label>Text Input with Placeholder</label>
                                                    <input className="form-control" placeholder="PLease Enter Keyword"/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Just A Label Control</label>
                                                    <p className="form-control-static">info@yourdomain.com</p>
                                                </div>
                                                <div className="form-group">
                                                    <label>File input</label>
                                                    <input type="file"/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Text area</label>
                                                    <textarea className="form-control" rows="3"></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <label>Checkboxes</label>
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox" value=""/>Checkbox Example One
                                                        </label>
                                                    </div>
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox" value=""/>Checkbox Example Two
                                                        </label>
                                                    </div>
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox" value=""/>Checkbox Example Three
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Inline Checkboxes Examples</label>
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox"/> One
                                                    </label>
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox"/> Two
                                                    </label>
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox"/> Three
                                                    </label>
                                                </div>
                                                <div className="form-group">
                                                    <label>Radio Button Examples</label>
                                                    <div className="radio">
                                                        <label>
                                                            <input type="radio" name="optionsRadios" id="optionsRadios1"
                                                                   value="option1" checked/>Radio Example One
                                                        </label>
                                                    </div>
                                                    <div className="radio">
                                                        <label>
                                                            <input type="radio" name="optionsRadios" id="optionsRadios2"
                                                                   value="option2"/>Radio Example Two
                                                        </label>
                                                    </div>
                                                    <div className="radio">
                                                        <label>
                                                            <input type="radio" name="optionsRadios" id="optionsRadios3"
                                                                   value="option3"/>Radio Example Three
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Select Example</label>
                                                    <select className="form-control">
                                                        <option>One Vale</option>
                                                        <option>Two Vale</option>
                                                        <option>Three Vale</option>
                                                        <option>Four Vale</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label>Multiple Select Example</label>
                                                    <select multiple className="form-control">
                                                        <option>One Vale</option>
                                                        <option>Two Vale</option>
                                                        <option>Three Vale</option>
                                                        <option>Four Vale</option>
                                                    </select>
                                                </div>
                                                <button type="submit" className="btn btn-default">Submit Button</button>
                                                <button type="reset" className="btn btn-primary">Reset Button</button>

                                            </form>
                                            <br />
                                            <h3>With radio & checkboxes</h3>
                                            <form>

                                                <div className="form-group input-group">
      <span className="input-group-addon">
        <input type="checkbox"/>
      </span>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="form-group input-group">
      <span className="input-group-addon">
        <input type="radio"/>
      </span>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </form>


                                        </div>

                                        <div className="col-md-6">
                                            <h3>Disabled Form State Examples</h3>
                                            <form role="form">
                                                <fieldset disabled="disabled">
                                                    <div className="form-group">
                                                        <label for="disabledSelect">Disabled input</label>
                                                        <input className="form-control" id="disabledInput" type="text"
                                                               placeholder="Disabled input" disabled/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="disabledSelect">Disabled select </label>
                                                        <select id="disabledSelect" className="form-control">
                                                            <option>Disabled select</option>
                                                        </select>
                                                    </div>
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox"/>Disabled Checkbox
                                                        </label>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">Disabled Button
                                                    </button>
                                                </fieldset>
                                            </form>
                                            <h3>Validation State Examples</h3>
                                            <form role="form">
                                                <div className="form-group has-success">
                                                    <label className="control-label" for="inputSuccess">Input with
                                                        success</label>
                                                    <input type="text" className="form-control" id="inputSuccess"/>
                                                </div>
                                                <div className="form-group has-warning">
                                                    <label className="control-label" for="inputWarning">Input with
                                                        warning</label>
                                                    <input type="text" className="form-control" id="inputWarning"/>
                                                </div>
                                                <div className="form-group has-error">
                                                    <label className="control-label" for="inputError">Input with
                                                        error</label>
                                                    <input type="text" className="form-control" id="inputError"/>
                                                </div>
                                            </form>
                                            <h3>Input Group Examples</h3>
                                            <form role="form">
                                                <div className="form-group input-group">
                                                    <span className="input-group-addon">@</span>
                                                    <input type="text" className="form-control" placeholder="Username"/>
                                                </div>
                                                <div className="form-group input-group">
                                                    <input type="text" className="form-control"/>
                                                        <span className="input-group-addon">.00</span>
                                                </div>
                                                <div className="form-group input-group">
                                            <span className="input-group-addon"><i className="fa fa-eur"></i>
                                            </span>
                                                    <input type="text" className="form-control"
                                                           placeholder="Font Awesome Icon"/>
                                                </div>
                                                <div className="form-group input-group">
                                                    <span className="input-group-addon">$</span>
                                                    <input type="text" className="form-control"/>
                                                        <span className="input-group-addon">.00</span>
                                                </div>
                                                <div className="form-group input-group">
                                                    <input type="text" className="form-control"/>
                                            <span className="input-group-btn">
                                                <button className="btn btn-default" type="button"><i
                                                    className="fa fa-search"></i>
                                                </button>
                                            </span>
                                                </div>
                                            </form>
                                            <h3>Different Size Input Groups</h3>
                                            <form role="form">
                                                <div className=" form-group input-group input-group-lg">
                                                    <span className="input-group-addon">@</span>
                                                    <input type="text" className="form-control" placeholder="Username"/>
                                                </div>

                                                <div className="form-group input-group">
                                                    <span className="input-group-addon">@</span>
                                                    <input type="text" className="form-control" placeholder="Username"/>
                                                </div>

                                                <div className="form-group input-group input-group-sm">
                                                    <span className="input-group-addon">@</span>
                                                    <input type="text" className="form-control" placeholder="Username"/>
                                                </div>

                                            </form>
                                            <h3>Different Size Input Groups</h3>
                                            <form role="form">
                                                <div className="input-group">
      <span className="form-group input-group-btn">
        <button className="btn btn-default" type="button">Go!</button>
      </span>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <br />
                                                <div className="input-group">

                                                    <input type="text" className="form-control"/>
                                                <span className="form-group input-group-btn">
        <button className="btn btn-default" type="button">Go!</button>
      </span>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <h3>More Customization</h3>
                            <p>
                                For more customization for this template or its components please visit official
                                bootstrap website i.e getbootstrap.com or <a href="http://getbootstrap.com/components/"
                                                                             target="_blank">click here</a> . We hope
                                you will enjoy our template. This template is easy to use, light weight and made with
                                love by binarycart.com
                            </p>
                        </div>
                    </div>

                </div>
            </div>
    )
    }
    }

    export default PersonDetails;