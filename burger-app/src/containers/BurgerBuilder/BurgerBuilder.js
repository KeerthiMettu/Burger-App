import React, { Component } from 'react'
import Aux from '../../hoc/Aux'

class BurgerBuilder extends Component{
    render(){
        return(
            <Aux> 
                {/* want to return 2 json components */}
            <div> Burger</div>
            <div> Build  controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;