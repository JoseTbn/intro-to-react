import React from 'react';
// import ReactDOM from 'react-dom';



class Header extends React.Component{
    
    
    
    
    render() {
return (
<div className="App">
    <header className="App-header">
        <div className="div-header-bckg" style={{ background: 'lightgrey'}}>
        <h1 style={{ color: 'dark'}}>
        My Todo App
        </h1>
        </div> 
        <a
          className="App-link"
          href="https://github.com/becodeorg/bxl-Johnson-6-30/tree/main/3.The-Mountain/THE_MOUNTAIN/Frontend_track/REACT/Week-2/1.Getting-Started"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React @ BeCode
        </a>
        
   
          </header> 

</div>

)
    }
}

export default Header;