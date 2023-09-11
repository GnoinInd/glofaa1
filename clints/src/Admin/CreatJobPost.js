import React, { useState } from 'react'
import './dashbord.css'

import MenuList from './adminSideNav';

function Career() {
    const [OpenForm, setOpenForm] = useState(false)
    const [Delet, setDelet] = useState(false)
    return (



        <div className="main modal-open">

            <div className='container  table-custom-style'>
                <div className="table-title mt-2">
                    <div className="row justify-content-between">
                        <div className="col-xs-6">
                            <h2 className=''>Manage Job Post</h2>
                        </div>
                        <div className="col-xs-6">
                            <a onClick={(e) => setOpenForm(true)} className="btn btn-success" data-toggle="modal"><i className="fa-solid fa-circle-plus"></i> <span>Post New Job</span></a>
                            <a onClick={(e) => setDelet(true)} className="btn btn-danger" data-toggle="modal"><i className="fa fa-square-minus"></i> <span>Delete</span></a>
                        </div>
                    </div>
                </div>

                <div className='row'>

                    <MenuList />
                    <div className=" col-xl-10 ">

                        <div className="table-responsive">
                            <div className="table-wrapper">

                                <table className="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>
                                                <span className="custom-checkbox">
                                                    <input type="checkbox" id="selectAll" />
                                                    <label for="selectAll"></label>
                                                </span>
                                            </th>
                                            <th>Sl. No.</th>
                                            <th>Job Title</th>
                                            <th>Job Feild</th>
                                            <th>EXP</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span className="custom-checkbox">
                                                    <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                                                    <label for="checkbox1"></label>
                                                </span>
                                            </td>
                                            <td>1</td>
                                            <td>Softwaer Development</td>
                                            <td>It</td>
                                            <td>2 Years + </td>
                                            <td>
                                                <a onClick={(e) => setOpenForm(true)} className="edit" data-toggle="modal"><i className="fa fa-pen-to-square"></i></a>
                                                <a  className="delete" data-toggle="modal"><i className="fa fa-trash"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="custom-checkbox">
                                                    <input type="checkbox" id="checkbox2" name="options[]" value="1" />
                                                    <label for="checkbox2"></label>
                                                </span>
                                            </td>
                                            <td>Dominique Perrier</td>
                                            <td>dominiqueperrier@mail.com</td>
                                            <td>Obere Str. 57, Berlin, Germany</td>
                                            <td>(313) 555-5735</td>
                                            <td>
                                                <a  className="edit" data-toggle="modal"><i className="fa fa-pen-to-square"></i></a>
                                                <a  className="delete" data-toggle="modal"><i className="fa fa-trash"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="custom-checkbox">
                                                    <input type="checkbox" id="checkbox3" name="options[]" value="1" />
                                                    <label for="checkbox3"></label>
                                                </span>
                                            </td>
                                            <td>Maria Anders</td>
                                            <td>mariaanders@mail.com</td>
                                            <td>25, rue Lauriston, Paris, France</td>
                                            <td>(503) 555-9931</td>
                                            <td>
                                                <a  className="edit" data-toggle="modal"><i className="fa fa-pen-to-square"></i></a>
                                                <a  className="delete" data-toggle="modal"><i className="fa fa-trash"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="custom-checkbox">
                                                    <input type="checkbox" id="checkbox4" name="options[]" value="1" />
                                                    <label for="checkbox4"></label>
                                                </span>
                                            </td>
                                            <td>Fran Wilson</td>
                                            <td>franwilson@mail.com</td>
                                            <td>C/ Araquil, 67, Madrid, Spain</td>
                                            <td>(204) 619-5731</td>
                                            <td>
                                                <a  className="edit" data-toggle="modal"><i className="fa fa-pen-to-square"></i></a>
                                                <a  className="delete" data-toggle="modal"><i className="fa fa-trash"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="custom-checkbox">
                                                    <input type="checkbox" id="checkbox5" name="options[]" value="1" />
                                                    <label for="checkbox5"></label>
                                                </span>
                                            </td>
                                            <td>Martin Blank</td>
                                            <td>martinblank@mail.com</td>
                                            <td>Via Monte Bianco 34, Turin, Italy</td>
                                            <td>(480) 631-2097</td>
                                            <td>
                                                <a className="edit" data-toggle="modal"><i className="fa fa-pen-to-square"></i></a>
                                                <a  className="delete" data-toggle="modal"><i className="fa fa-trash"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="clearfix">
                                    <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                                 
                                </div>
                            </div>
                        </div>


                        <div id="addEmployeeModal" className={OpenForm ? "modal show fade d-block fixed-top " : "modal fade"}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <form>
                                        <div className="modal-header">
                                            <h4 className="modal-title">Add Blog</h4>
                                            <button type="button" onClick={(e) => setOpenForm(false)} className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                        </div>

                                        <div className="modal-body">
                                            <div className="row ">

                                                <div className="col-sm-6 ">
                                                    <div className="form-group">
                                                        <label className="required-field" for="Name">Full Name </label>
                                                        <input type="text" className="form-control" id="Name" name="Full Name"
                                                            placeholder="Full Name " />
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 ">
                                                    <div className="form-group">
                                                        <label for="Email">Email Id</label>
                                                        <input type="text" className="form-control" id="Email" name="Email Id"
                                                            placeholder="Email Id" />
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 ">
                                                    <div className="form-group">
                                                        <label className="required-field" for="phone">Phone</label>

                                                        <div className="d-flex">
                                                            <select className="w-28 " name="countryCode" id="">
                                                                <option data-countryCode="GB" value="44" Selected>(+91)</option>
                                                                <option data-countryCode="US" value="1">(+44)</option>
                                                                <optgroup label="Other countries">
                                                                    <option data-countryCode="US" value="1">(+44)</option>
                                                                    <option data-countryCode="DZ" value="213">(+213)</option>
                                                                    <option data-countryCode="AD" value="376">(+376)</option>
                                                                    <option data-countryCode="AO" value="244">(+244)</option>
                                                                    <option data-countryCode="AI" value="1264">(+1264)</option>
                                                                    <option data-countryCode="AG" value="1268"> (+1268)</option>
                                                                    <option data-countryCode="AR" value="54">(+54)</option>
                                                                    <option data-countryCode="AM" value="374">(+374)</option>
                                                                    <option data-countryCode="AW" value="297">(+297)</option>
                                                                    <option data-countryCode="AU" value="61">(+61)</option>
                                                                    <option data-countryCode="AT" value="43">(+43)</option>

                                                                </optgroup>
                                                            </select>

                                                            <input type="text" className="form-control" id="Phone" name="Phone"
                                                                placeholder="Phone" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 ">
                                                    <div className="form-group">
                                                        <label for="Skype">Skype ID</label>
                                                        <input type="text" className="form-control " id="Skype" name="Skype"
                                                            placeholder="Skype ID" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 ">
                                                    <div className="form-group">
                                                        <label for="Budget">Your Budget</label>
                                                        <input type="text" className="form-control " id="Budget" name="Budget"
                                                            placeholder="Your Budget" />
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 ">
                                                    <div className="form-group">
                                                        <label for="looking">What are you looking for?</label>
                                                        <input type="text" className="form-control " id="looking" name="looking"
                                                            placeholder="Type Here" />
                                                    </div>
                                                </div>


                                                <div className="col-sm-12 ">
                                                    <div className="form-group">
                                                        <label className="required-field" for="Project ">How can we help?*</label>
                                                        <textarea className="form-control" id="Project " name="Project " rows="4"
                                                            placeholder="Project Brief"></textarea>
                                                    </div>
                                                </div>

                        
                                            </div>
                                        </div>

                                        <div className="modal-footer">
                                            <input type="button" onClick={(e) => setOpenForm(false)} className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                            <input type="submit" className="btn btn-success" value="Add" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>


                        <div id="deleteEmployeeModal" className= {Delet ?"modal show d-block fade" :"modal fade" }>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <form>
                                        <div className="modal-header">
                                            <h4 className="modal-title">Delete Job Post</h4>
                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                        </div>
                                        <div className="modal-body">
                                            <p>Are you sure you want to delete these Records?</p>
                                            <p className="text-warning"><small>This action cannot be undone.</small></p>
                                        </div>
                                        <div className="modal-footer">
                                            <input type="button" onClick={(e) => setDelet(false)} className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                            <input type="submit" className="btn btn-danger" value="Delete" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Career