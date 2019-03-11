import React from 'react';
class Timer extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            minutes:0,
            seconds:0
        };
    }

    componentDidUpdate(prevProps)
    {
        if(prevProps.status !== this.props.status)
        {
            if(this.props.status)
            this.startt();
            else
            this.stopt();
        }
    }
    startt=()=>
    {
        this.TimerId=setInterval(this.timers,1000);
    }
    timers=()=>
    {
        if(this.state.seconds===59){
        this.state.minutes=this.state.minutes+1;
        this.state.seconds=0;}
        this.setState((prevState)=>({seconds: prevState.seconds +1}));
    }
    stopt=()=>
    {
        clearInterval(this.TimerId);
    }
render()
{
        return(
            <div>
              {this.state.minutes+ ":" + this.state.seconds}
            </div>
    );
}
}

export default Timer;


