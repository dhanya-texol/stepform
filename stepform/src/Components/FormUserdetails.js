import React,{Component} from 'react';
  import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaiseButton from 'material-ui/RaisedButton'
  class FormUserdetails extends Component{
      continue= e=>{
          e.preventDefault();
          this.props.nextStep() ;
      }
      
     render(){
         const {value,handleChange}=this.props;
         return(
             <MuiThemeProvider>
             <React.Fragment>
                <AppBar title="enter user details"/>
                <TextField  
                hintText="ente your first name"
                floatingLabelText="first name"
                onChange={handleChange('firstname')}
                defaultValue={value.firstname}/> 
                <br/>
                <TextField  
                hintText="ente your last name"
                floatingLabelText="last name"
                onChange={handleChange('lastname')}
                defaultValue={value.lastname}/> 
                <br/>
                <TextField  
                hintText="ente your email"
                floatingLabelText="email"
                onChange={handleChange('email')}
                defaultValue={value.email}/> 
                <br/>
                <RaiseButton
                label="continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}
                />
             </React.Fragment>
             </MuiThemeProvider>
                
         )
     }
    }
    const styles={
        button:{
            margin:'15px'
        }
    }
  export default FormUserdetails;
  