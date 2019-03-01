import React,{Component} from 'react'



const msToTime = x => {
    const msPerSecond = 1000
    const msPerMinute = msPerSecond * 60
    const msPerHour = msPerMinute * 60

    const hours = Math.floor(x / msPerHour)
    const hoursRest = x % msPerHour
    const minutes = Math.floor(hoursRest / msPerMinute)
    const minutesRest = hoursRest % msPerMinute
    const seconds = Math.floor(minutesRest / msPerSecond)
    return String(hours).padStart(2, '0') +
        ':' + String(minutes).padStart(2, '0') +
        ':' + String(seconds).padStart(2, '0')
}



 


class Timer1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timeMs: 10000,
            
        } 

        this.start = this.start.bind(this)
        this.pause = this.pause.bind(this)

    }
    
    
        start () {
            if(this.state.interval) {
                return
            }
            const interval = setInterval(
                () => {
                   this.setState({
                       timeMs: this.state.timeMs + 1000
                       
                   }) 
                },
                1000
            )
            this.setState({
                interval: interval
            })
        }
        pause () {
            if(!this.state.interval) {
                return
            }
            clearInterval(this.state.interval)
            this.setState({
                interval: undefined
            })}

        reset=()=>  {
            this.setState({timeMs:0})
            
            }

        
        
        render() {
            // const {ms}=this.props
            return <div>
                <div className="header">
          <h1>{msToTime(this.state.timeMs)}</h1>
          
           
        </div>

                {/* <Timer1 ms={this.state.timeMs} /> */}
                <input
                    type="button"
                    value="Start"
                    onClick={this.start} />
                <input
                    type="button"
                    value="Pause"
                    onClick={this.pause} />

                <input 
                    type="button"
                    value="reset"
                    onClick={this.reset}/>
            </div>
        }
    }
    
    export default Timer1 ;