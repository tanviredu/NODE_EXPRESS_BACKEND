const fn = ()=>{
    // built in function in nodejs are part of the 
    // global

    global.console.log("Hello world");
    global.console.log("Built in function are part of the global")
    console.log("Hello this is a custom function");
    console.log("This is another statement");
    console.log("THis is another statement");
}

fn()
