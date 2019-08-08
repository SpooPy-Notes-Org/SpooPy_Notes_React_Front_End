import React, {Component, Fragment} from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Profile extends Component{


    render(){

        let styles = {
            image:{
                maxWidth: "100%"
            },
            name: {
                fontSize: "32px",
                marginBottom: '0px',
            },
            para:{
                fontSize: "16px",
                fontWeight: 'bold'
            },
            socialIcon:{
                fontSize: "2.0em",
                marginRight: '10px'
            }
        }

        return(
            <Fragment>
                <Col md={2}>
                    <Row>
                        <img 
                            style={styles.image}
                            src={this.props.img} />        
                    </Row>
                    <Row>   

                    </Row>
                 </Col>
                <Col md={4}>
                    <h3 style={styles.name}>{this.props.name}</h3>
                    <a href={this.props.github}  
                        id="icon-github" 
                        style={styles.socialIcon}
                        target="_blank">
                            <i class="fab fa-github"></i>
                    </a>
                    <a href={this.props.linkedIn}
                        id="icon-linkedin" 
                        style={styles.socialIcon}
                        target="_blank">
                            <i class="fab fa-linkedin"></i>
                    </a>
                    <p style={styles.para}>{this.props.description}</p>
                </Col>    
            </Fragment>         
        )
    }
}


export default Profile;
