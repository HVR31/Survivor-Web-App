import React from 'react';
import FormHeader from './form/header';
import DropDownButton from './form/dropDownButton';
import FormGroup from './form/group';
import FormSelectMenu from './form/selectMenu';


export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {btnClicked: false /*{, fName: '', formErrors: {fName: ''}, fNameValid: false, formValid: false}*/ };
  }

  handleClick() {
    this.setState({btnClicked: true});
  }

  /*changeHandler(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({[name]: value}, () => {this.validateField(name, value)});
  }

  validateField(fieldName, value) {
     let fieldValidationErrors = this.state.formErrors;
     let fNameValid = this.state.fNameValid;

     switch(fieldName) {
       case 'text':
         fNameValid = value.length >= 2;
         fieldValidationErrors.fName = fName ? '' : ' is invalid';
         break;
       default:
         break;
     }
     this.setState({formErrors: fieldValidationErrors,
                     fNameValid: fNameValid
                   }, this.validateForm);
   }

  validateForm() {
    this.setState({formValid: this.state.fName});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }*/

  render() {
    const btnClicked = this.state.btnClicked;
    return(
      <form method="post" action="js/login-form-handler.js">
        <FormHeader/>
        <FormGroup value={this.state.fName} onChange={this.changeHandler} id="fName" text="First Name" name="first_name" type="text" placeholder="Enter your first name"/>
        <FormGroup id="lName" text="Last Name" name="last_name" type="text" placeholder="Enter your last name"/>
        <FormGroup id="email" text="Email Address" name="email_address" type="email" placeholder="example@gmail.com"/>
        <FormGroup id="age" text="Age" name ="age" type="number" placeholder="Enter your age"/>
        <FormGroup id="major" text="Major" name ="major" type="name" placeholder="Enter your major"/>
        <FormSelectMenu id="collegeSelect" name="Enter the College you belong to">
          <option>Natural Sciences</option>
          <option>Social Behavioural Sciences</option>
          <option>College of Education</option>
          <option>Business and Public Administration</option>
          <option>Arts and Letters</option>
        </FormSelectMenu>
        <FormSelectMenu id="AcademicYearSelect" name="Academic Year">
          <option>Freshmen</option>
          <option>Sophmore</option>
          <option>Junior</option>
          <option>Senior</option>
          <option>Super Senior</option>
          <option>Do not want to disclose</option>
        </FormSelectMenu>
        {/*this.props.children*/}
        <button id="login-btn" onClick={this.props.loginBtnFirst} type="submit" className="btn btn-primary text-center" >Submit Information</button>
      </form>
    );
  }
}

export default Login;
