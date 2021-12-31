import React from "react";
import Cards from './components/card'

import './App.css';
import './index.css';

function Course(){
 return(
  <div>
   <h1>Guess A Number</h1>
   <h4>Card</h4>
   <div className="any">
   
     <div className= "class">
        <div className="card-outer">
     <div className= "class1"><h1>1</h1></div>
     <div className="front"></div>
<div className="back"></div>

  </div>
  </div>
  
   <div className= "class">
   <div className= "class1"><h1>2</h1></div>
</div>

<div className= "class">
   <div className= "class1"><h1>3</h1></div>
</div>
</div>

<div className="any1">
   
     <div className= "class">
     <div className= "class1"><h1>4</h1></div>
  </div>
  
  
   <div className= "class">
   <div className= "class1"><h1>5</h1></div>
</div>

<div className= "class">
   <div className= "class1"><h1>6</h1></div>
</div>
</div>

<div className="any3">
   
     <div className= "class">
     <div className= "class1"><h1>7</h1></div>
  </div>
  
  
   <div className= "class">
   <div className= "class1"><h1>8</h1></div>
</div>

<div className= "class">
   <div className= "class1"><h1>9</h1></div>
</div>
</div>

</div>
  
 );
}
  


  

export default Course;