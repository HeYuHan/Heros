const {ccclass, property, executionOrder} = cc._decorator;

@ccclass
@executionOrder(0)
export default class GameApp extends cc.Component{
    protected onLoad(){
        cc.loader.loadRes("message", cc.TextAsset, function (err, str) {
            let builder:dcodeIO.ProtoBuf.Builder = dcodeIO.ProtoBuf.newBuilder();
            dcodeIO.ProtoBuf.loadProto(str, builder);
            let protoroot = builder.build();
            let msgCls = protoroot.Message["Login"];
            let msgObj = new msgCls({userName:"test",password:"123456", sex:1, isFirstLogin:false, param:["test", "array", "param"]});
            let msg = msgObj.encode();
            console.log(msg.view);
            let msgDe = msgCls.decode(msg);
            console.log(msgDe);
        });
    }
}