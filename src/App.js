import React, { Component } from 'react';
import InputRange from 'react-input-range';

function Calculate(props) {
    var result = (props.entry - props.exit) * props.volume / (props.depth / 10 + 1) / props.time
    return Math.round(result * 10) / 10;
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            pressure: {
                min: 100,
                max: 200
            },
            volume: 10,
            depth: 10,
            time: 40,
        };
    }
    render() {
        return (
            <form className="form">
                <p>終了と開始残圧</p>
                <InputRange
                    minValue={0}
                    maxValue={240}
                    step={10}
                    formatLabel={value => `${value} 気圧`}
                    value={this.state.pressure}                
                    onChange={value => this.setState({ pressure: value })} />
                <hr />
                <p>タンク容量</p>
                <InputRange
                    minValue={8}
                    maxValue={14}
                    step={1}
                    formatLabel={value => `${value} L`}
                    value={this.state.volume}
                    onChange={value => this.setState({ volume: value })} />
                <hr />
                <p>平均水深</p>
                <InputRange
                    minValue={1}
                    maxValue={30}
                    step={1}
                    formatLabel={value => `${value} m`}
                    value={this.state.depth}                
                    onChange={value => this.setState({ depth: value })} />
                <hr />
                <p>潜水時間</p>
                <InputRange
                    minValue={20}
                    maxValue={80}
                    step={5}
                    formatLabel={value => `${value} 分`}
                    value={this.state.time}                
                    onChange={value => this.setState({ time: value })} />
                <hr />
                <p>1分間あたりのエア消費量：
                        <Calculate
                            entry={this.state.pressure.max}
                            exit={this.state.pressure.min}
                            volume={this.state.volume}
                            depth={this.state.depth}
                            time={this.state.time}
                        />
                </p>
            </form>
        );
    }
}

export default App;