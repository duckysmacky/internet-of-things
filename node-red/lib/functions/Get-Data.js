// name: Get Data
// outputs: 6
// timeout: 0
// initialize: // Code added here will be run once\n// whenever the node is started.\n
// finalize: // Code added here will be run when the\n// node is being stopped or re-deployed.\n
// info: 
if (msg.payload.name == "Robot4_1")
{
    var msg1 = { payload: msg.payload.m1 };
    var msg2 = { payload: msg.payload.m2 };
    var msg3 = { payload: msg.payload.m3 };
    var msg4 = { payload: msg.payload.m4 };
    var msg5 = { payload: msg.payload.m5 };
    var msg6 = { payload: msg.payload.m6 };
    return [msg1, msg2, msg3, msg4, msg5, msg6]
}