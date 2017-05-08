class PeerMessageEncryptor {
    encrypt( message, credentials ){
        return message
    }
}

class PeerMessageDecryptor {
    constructor(credentials) {
        this.credentials = credentials
    }
    setCredentials(credentials) {
        this.credentials = credentials
    }
    decrypt( message ){
        return message
    }
}

class PeerMessageObfuscator {
    constructor(destin){
        this.decrypt = new 
    }
}

class PeerAuthentication {
    constructor(credentials) {
        this.credentials = credentials
    }
    verifyCredentials(credentials) {
        return this.credentials == credentials;    
    }   
}