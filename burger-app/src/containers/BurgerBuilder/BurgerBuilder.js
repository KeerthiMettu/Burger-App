import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component{
    render(){
        return(
            <Aux> 
                {/* want to return 2 json components */}
            <Burger></Burger>
            <div> Build  controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;