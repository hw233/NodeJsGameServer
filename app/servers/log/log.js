/**
 * Created by egret on 16/1/21.
 */

var Startup = require('../../startup.js');
var Server = require('../../../libs/server/server.js');
var Log = require('../../../libs/log/log.js');
var Proto = require('../../proto/proto.js');
var BackMessage = require('../../message/backMessage.js');
var Global = require('../../../libs/global/global.js');

var serverConfig = Server.getByServer('log');

var logReceiveMessage = new BackMessage();
logReceiveMessage.addHandle(Proto.ID_system_helloServer, function(session, data){
    Global.addServerClient(session, data);
});

Startup.init(serverConfig.id, 0);
Startup.listenerBack(serverConfig.port, logReceiveMessage);

