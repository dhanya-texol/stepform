import React,{Component} from 'react';
  import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaiseButton from 'material-ui/RaisedButton'
  class FormPersonaldetails extends Component{
      continue= e=>{
          e.preventDefault();
          this.props.nextStep() ;
      }
      back = e=>{
        e.preventDefault();
        this.props.prevStep() ;
    }
     render(){
         const {value,handleChange}=this.props;
         return(
             <MuiThemeProvider>
             <React.Fragment>
                <AppBar title="enter Personal  details"/>
                <TextField  
                hintText="ente your Occupation"
                floatingLabelText="occupation"
                onChange={handleChange('occupation')}
                defaultValue={value.occupation}/> 
                <br/>
                <TextField  
                hintText="ente your city"
                floatingLabelText="city"
                onChange={handleChange('city')}
                defaultValue={value.city}/> 
                <br/>
                <TextField  
                hintText="ente your bio"
                floatingLabelText="bio"
                onChange={handleChange('bio')}
                defaultValue={value.bio}/> 
                <br/>
                <RaiseButton
                label="continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}
                />
                 <RaiseButton
                label="Back"
                primary={false}
                style={styles.button}
                onClick={this.back}
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
  export default FormPersonaldetails;
  