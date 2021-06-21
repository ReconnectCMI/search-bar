import './search.css'
import React from 'react';
import Data from './data';
import Icon from '../icon/icons';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';


class Search extends React.Component {

    constructor(){
        super();
                this.state={
          search:null,
        };
      }
      searchSpace=(event)=>{
        let keyword = event.target.value;
        this.setState({search:keyword});
      }
      
      render(){
        const styles = {
          root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 500,
          },
          input: {
            marginLeft: 10,
            flex: 1,
          },
          iconButton: {
            padding: 10,
          }
        };
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
          <div className="contain">
              <div className="contain-search">

            <Paper component="form" style={styles.root}>
              <InputBase
                style={styles.input}
                placeholder="Zoeken op informatie en diensten"
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={(e)=>this.searchSpace(e)}
                />
              <IconButton style={styles.iconButton} aria-label="search">
                <SearchIcon />
              </IconButton>

            </Paper>
                </div>
          <h2>Informatie & diensten</h2>
          <Grid className="grid" container justify="center" >
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                {items}
              </Grid>
            ))}
          </Grid>
          </div>
        )
      }
    }
  
  export default Search;