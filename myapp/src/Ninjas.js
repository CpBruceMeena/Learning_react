import React from 'react';

const Ninjas = ({ninjas}) => {
    // console.log(this.props);
    // Here we are destructuring the class, basically we are using variables to store the values
    const NinjaList = ninjas.map(ninja=>{
      return(
        <div className="ninja" key={ninja.id}>
          <div> Name: { ninja.name } </div>
          <div> Age: { ninja.age } </div>
          <div> Cate: { ninja.belt } </div>
        </div>
      )
    })
    return(
      <div className="ninja-list">
      { NinjaList }
      </div>
    )
}

export default Ninjas;
