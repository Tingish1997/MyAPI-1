import React from "react";
import App from "./App";

it("API test", async function() {
    const responce = new App();
    console.warn(await responce.api());
    var data = await responce.api();
    expect("data.app[title].title").toEqual("Enhorabuena")
})