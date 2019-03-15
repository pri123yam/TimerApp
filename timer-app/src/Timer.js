import React from 'react';
class Timer extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            minutes:'00',
            seconds:'00'
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
        var min,sec;
        min=parseInt(this.state.minutes,10);
        sec=parseInt(this.state.seconds,10);
        if(sec===59){
            min=min+1;
            sec=0;}
        else
        sec+=1;
        min=this.lzero(min);
        sec=this.lzero(sec);
        this.setState(()=>{
            return{
                minutes:min,
                seconds:sec
            }
        });
    }
    stopt=()=>
    {
        clearInterval(this.TimerId);
    }
    lzero=((val)=>{
        if(val< 10) {
            return '0' + val;
        } else {
            return val+'';
        }
    })
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


