import React, { Component } from 'react';
import Timer from './Timer';
import logo from './logo.svg';
import Buton from './Button';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {statusl:{1:false,2:false},
                        statusu:false
                    };
    }
    handleClicked=(id)=>
    {
        this.setState(prevState =>
            ({
                statusl:{
                    ...prevState.statusl,
                    [id]:!prevState.statusl[id]
                },
                statusu: prevState.statusu
            }));
        // console.log(this.state);
        // var keyid=[];
        // for(var keys in this.state.statusl)
        // keyid[keyid.length]=keys;
        // var a=this.state.statusl[1];
        // keyid.forEach((id)=>{a=a&&this.state.statusl[id]});
        // this.setState({statusl:this.state.statusl,statusu:a});
        // console.log(this.state);
    }
    handleClickedAll()
    {
        var keyid=[];
        for(var keys in this.state.statusl)
            keyid[keyid.length]=keys;
        var newLocal={};
        keyid.forEach((id) => {newLocal[id]=!this.state.statusu;});
        console.log(newLocal);
        this.setState({statusl:newLocal, statusu:!this.state.statusu});
    }
    render() {
        var keyid = [];
        for(var keys in this.state.statusl)
            keyid[keyid.length]=keys;
        console.log(this.state.statusu);
        return (
            <div className='App'>
                {
                    keyid.map((id) =>(
                        <div>
                            <Timer status={this.state.statusl[id]}/>
                            <Buton status={this.state.statusl[id]} handleClick={()=>this.handleClicked(id)} />
                        </div>
                    ))
                }
                    <Buton status={this.state.statusu} handleClick={()=>this.handleClickedAll()}/>
            </div>
        );
    }
  }

export default App;
