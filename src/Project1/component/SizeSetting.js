import React,{Component} from 'react';

class SizeSetting extends Component {
    changeFontSize(value){
        this.props.onReceiveFontSize(value);
    }
    render(){
        return (
        
            <div className="panel panel-warning">
                <div className="panel-heading">
        
                <h3 className="panel-title">Size: {this.props.fontSize}px</h3>
                </div>
                <div className="panel-body">
                    
                    
                <button type="button" className="btn btn-success" onClick={()=>this.changeFontSize(-2)}>Giam</button>
                <button type="button" className="btn btn-success" onClick={()=>this.changeFontSize(2)}>Tang</button>
                </div>
            </div>
        
        );
    }
}

export default SizeSetting;
