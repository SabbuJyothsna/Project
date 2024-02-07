import React, { Component } from 'react'

export class Menuupdatecomp extends Component {
    render() {
        return (
            <div>
                <form>

                   <h1>Form to update daily Menu</h1>
                   
                   <label>Please enter today's menu here</label><br></br>
                   <input type='text' name='menu' /><br></br>
                   <button type='submit' >Update</button><br></br>

                <button>view members</button><br></br>
                <button>Delivery</button><br></br>
                <button>Monthly report</button><br></br>
             
             
                </form>
            </div>
        )
    }
}

export default Menuupdatecomp
