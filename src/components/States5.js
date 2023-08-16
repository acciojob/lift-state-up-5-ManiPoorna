import React, { useState } from "react";


const States5 = ()=>{

    let [login,setLogin] = useState(true)

    return(
        <div>
            <div className="parent">
                <h1>Parent Component</h1>
                {
                    login && <form> 
                        <div className="child">
                                <p>Username : <input type="text"/></p>
                                <p>password : <input type="password"/></p>
                                <button onClick={()=>setLogin(false)} type="submit">Login</button>
                        </div>
                    </form>
                }
                {
                    !login && <p>You are logged in!</p>
                }
            </div>
        </div>
    )
}

export default States5
