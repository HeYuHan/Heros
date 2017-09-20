
module FrameWork {
    export class NetworkStream{
        connection:TcpConnection=null;
        public onMessage(){
            
        }
        public onConnected(){

        }

        public onError(){

        }
        public onClose(){

        }
        protected onDisconnected(){
            
        }
        public WriteMessage(msg:Uint8Array){
            this.connection.Send(msg);
        }
    }
    export class TcpConnection{
        private socket:WebSocket=null;
        private stream:NetworkStream=null;
        public Connect(ip:string){
            this.socket = new WebSocket(ip);
            this.socket.onopen=this.stream.onConnected;
            this.socket.onmessage=this.stream.onMessage;
            this.socket.onerror=this.stream.onError;
            this.socket.onclose=this.stream.onClose;
        }
        constructor(stream:NetworkStream){
            this.stream = stream;
            this.stream.connection=this;
        }
        public Send(msg:Uint8Array){
            this.socket.send(msg);
        }
    }
}