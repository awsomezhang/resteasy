import React from 'react';
import {Divider, Layout} from 'antd';

import "../../styles.css"

import FAQ from "./Sections/FAQ";
import Welcome from "./Sections/Welcome";
import HowItWorks from "./Sections/HowItWorks";
import Create from "./Sections/Create"
import Register from "./Sections/Register"
import Resources from "./Sections/Resources"

import PageWrapper from "../../PageWrapper"
function LandingDivider(){
    return( <Divider style={{
        minWidth: "1em",
        marginLeft: "10%",
        width: "80%",
        height: "5px",
    }}/> )
}

class Landing extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            createRef: React.createRef(),
            registerRef: React.createRef(),
            resourcesRef: React.createRef(),
        }
    }

    render() {
        return (
            <PageWrapper content={
                <div style={{backgroundColor: "white"}}>
                    <Welcome 
                        createScroll={() => this.state.createRef.current.scrollIntoView({behavior: "smooth"})}
                        registerScroll={() => this.state.registerRef.current.scrollIntoView({behavior: "smooth"})}
                        resourcesScroll={() => this.state.resourcesRef.current.scrollIntoView({behavior: "smooth"})}
                    />
                    <LandingDivider />
                    <HowItWorks />
                    <LandingDivider />
                    <div ref={this.state.createRef}> <Create /> </div>
                    <LandingDivider />
                    <div ref={this.state.registerRef}> <Register /> </div>
                    <LandingDivider />
                    <div ref={this.state.resourcesRef}> <Resources /> </div>
                    <LandingDivider />
                    <FAQ />
                </div>
            }/>
        );
    }
}

export default Landing;
