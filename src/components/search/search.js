import React from 'react';
import Data from './data';
import Icon from '../icon/icons';

class Search extends React.Component {

    constructor(){
        super();
    
        this.state={
          search:null
        };
      }
    
      searchSpace=(event)=>{
        let keyword = event.target.value;
        this.setState({search:keyword});
      }
    
      render(){
        const styleInfo = {
          paddingRight:'10px'
        }
        const elementStyle ={
          border:'solid',
          borderRadius:'10px',
          position:'relative',
          left:'10vh',
          height:'3vh',
          width:'20vh',
          marginTop:'5vh',
          marginBottom:'10vh'
        }
        const items = Data.filter((data)=>{
          if(this.state.search == null)
              return data
          else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.country.toLowerCase().includes(this.state.search.toLowerCase())){
              return data
          }
        }).map((data, key) => {
          return(
          <div key={key}>
            <Icon image={} title={} description={}/>
          </div>
          )
        })
    
        return (
          <div>
          <input type="text" placeholder="Enter item to be searched" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
          {items}
          </div>
        )
      }
    }
  
  export default Search;