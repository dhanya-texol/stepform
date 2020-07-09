import React ,{Component} from 'react';
import FormUserdetails from './FormUserdetails'
import Confirm from './Confirm' 
import FormPersonaldetails from './FormPersonaldetails';
import Success from './Success'
class Userform extends Component{
state={
step:1,
firtsname:'',
lastname:'',
email:'',
occupation:'',
city:'',
bio:''
}
// proceed to next step
nextStep=()=>{

    const {step}=this.state;
    this.setState({
       step:step+1 
    })
}
//go back to prev step
prevStep=()=>{

    const {step}=this.state;
    this.setState({
       step:step-1 
    })
}
//hanle field change
handleChange= input=>e=>{
this.setState({[input]:e.target.value});
}
render(){
    const{step}=this.state;
    const{firstname,lastname,email,occupaton,city,
        bio}=this.state;
    const value={firstname,lastname,email,occupaton,city,
            bio};
  switch(step){
      case 1:
          return(
              <FormUserdetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              value={value}
              />
          )
          case 2:
              return( <FormPersonaldetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                value={value}
                />)
          case 3:
            return( <Confirm
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                value={value}
                />)
            case 4:
                return<Success/>
                default:
        (console.log('This is a multi-step form built with React.'))
    
  }
}
 } 
 export default Userform;
