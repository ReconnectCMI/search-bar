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
        const elementStyle ={
          border:'solid',
          borderRadius:'10px',
          position:'relative',
          height:'3vh',
          width:'20vh',
          marginTop:'5vh',
          marginBottom:'10vh'
        }
        const items = Data.filter((data)=>{
          if(this.state.search == null)
              return data
          else if(data.title.toLowerCase().includes(this.state.search.toLowerCase()) || data.description.toLowerCase().includes(this.state.search.toLowerCase())){
              return data
          }
        }).map((data, key) => {
          return(
          <div key={key}>
            <Icon title={data.title} description={data.description}/>
          </div>
          )
        })
    
        return (
          <div>
          <input type="text" placeholder="Enter item to be searched" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
          <h2>Informatie & diensten</h2>
          {items}
          </div>
        )
      }
    }
  
  export default Search;