import React,{Component} from 'react';
  import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List,ListItem} from 'material-ui/List';
import RaiseButton from 'material-ui/RaisedButton'
  class Confirm extends Component{
      continue= e=>{
          e.preventDefault();
          //process form//
          this.props.nextStep() ;
      }
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };
    
     render(){
         const {value:{ firstname, lastname, email, occupation, city, bio}}=this.props;
         return(
             <MuiThemeProvider>
             <React.Fragment>
                <AppBar title="confirm user details"/>
                <List>
              <ListItem
                 primaryText="First Name" secondaryText={firstname} />
             
              <ListItem
                primaryText="Last Name" secondaryText={lastname} />
             
              <ListItem
                 primaryText="Email" secondaryText={email} />
            
              <ListItem
                 primaryText="Occupation" secondaryText={occupation} />
            
              <ListItem
                 primaryText="City" secondaryText={city} />
              
              <ListItem
                 primaryText="Bio" secondaryText={bio} />
            
            </List>
            <br />
                <RaiseButton
                label="confirm and continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}
                />
                 <RaiseButton
                label="back"
                primary={true}
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
  export default Confirm;
  