
class PeerAuthentication {
    constructor(credentials) {
        this.credentials = credentials
    }
    verifyCredentials(credentials) {
        return this.credentials == credentials;    
    }   
}

class PeerCommunication {
    constructor(peer, listeners){
        this.listeners = listeners
        this.auth = new PeerAuthentication(peer)
    }
    sendMessage(message, peer, credentials) {
        if( peer.auth.verifyCredentials(credentials) ){
            peer.receiveMessage(message)
        } else {
            throw new Error("Credentials is not valid")
        }
    }   
    receiveMessage(message) {
        this.listeners.onReceiveMessage(message)
    }
}

class PeerListener {
    constructor(credentials){
        this.credentials = credentials
    }
    onReceiveMessage( message ){
        console.log( message )
    }
}

class Peer extends PeerCommunication{
    constructor( peer ){
        super( peer, new PeerListener(peer) )
    }
}

const peer_1 = new Peer( 32 )
const peer_2 = new Peer( 22 )
peer_2.sendMessage("Hello", peer_1, 32) // Without errors
peer_2.sendMessage("World", peer_1, 32) // Without errors
//peer_2.sendMessageToPeer("Hello World", peer_1, 31231231231) // With errors
