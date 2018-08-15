
import React,{ Component } from 'react'; 


class SearchBar extends Component {
        constructor(props)
        {
            super (props); 
            this.state = { searchbartxt : ''}; 
        }

        onInputChange(val) {

            this.setState({searchbartxt:val});    
            this.props.serachTextfunction(val); 
        }   

        render() { 
            return(
                
                <div className="input-group input-group-sm mb-3">
                    
                    <input 
                    className="w-100 p-3"
                    value = {this.state.searchbartxt} 
                    onChange = {e => this.onInputChange(e.target.value)}
                    /> 

                </div>  
                
           
            ); 
        }
}

export default SearchBar;