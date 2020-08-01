{/* 
    - render basic information of student
    - MSSV
    - Gender
    - Date of birth
    - School
    - Class
*/}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormUpdateBasicInformation from '../../../Form-Update/formUpdateBasicInformation'

class BasicInformation extends Component {
    constructor(props) {
        super(props);
        this.state={
            openEditForm : false
        }
    }

    toggleEditForm = () => {
        let { openEditForm } = this.state;
        this.setState({
            openEditForm : !openEditForm
        })
    }
    
    render() {
        let { userInformation } = this.props
        let {openEditForm} = this.state
        return (
            <div className="user-profile-ov st2">
                <h3>
                    <div style={{ display: 'inline-block' }} className="exp-bx-open">Basic Information</div>
                    <div style={{ display: 'inline-block', cursor: 'pointer' }}
                         onClick={this.toggleEditForm}>
                             <i className="fa fa-pencil"></i>
                    </div>
                </h3>
                <div>
                    <h4>MSSV:</h4>
                    <p>{userInformation.mssv ? userInformation.mssv : <i style={{ fontStyle: 'italic' }}>- Add your mssv</i>}</p>
                </div>
                <div>
                    <h4>Date of Birth:</h4>
                    <p>{userInformation.birthday ? userInformation.birthday : <i style={{ fontStyle: 'italic' }}>-  Add your birthday</i>}</p>
                </div>
                <div>
                    <h4>Gender:</h4>
                    <p>{userInformation.gender}</p>
                </div>
                <div>
                    <h4>Class:</h4>
                    <p>{userInformation.class ? userInformation.class : <i style={{ fontStyle: 'italic' }}>-  Add your class</i>}</p>
                </div>
                <div>
                    <h4><Link to={`/user-profile`}>School:</Link></h4>
                    <p>{userInformation.class ? userInformation.class : <i style={{ fontStyle: 'italic' }}>-  Add your school</i>}</p>
                </div>
                {openEditForm?<FormUpdateBasicInformation toggleEditForm={this.toggleEditForm}/>:''}
            </div>

        )
    }
}

export default BasicInformation