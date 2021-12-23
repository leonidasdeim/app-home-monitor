import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";
import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";

export default function Auth() {
    return (
        <>
            <Navbar transparent />
            <main>
                <section className="relative w-full h-full py-40 min-h-screen">
                    <div
                        className="absolute top-0 w-full h-full bg-blueGray-500 bg-no-repeat bg-full"
                    // style={{
                    //   backgroundImage:
                    //     "url(" + require("assets/img/blank.png").default + ")",
                    // }}
                    ></div>
                    <Switch>
                        <Route path="/auth/login" exact component={Login} />
                        <Route path="/auth/register" exact component={Register} />
                        <Redirect from="/auth" to="/auth/login" />
                    </Switch>
                    <FooterSmall absolute />
                </section>
            </main>
        </>
    );
}
