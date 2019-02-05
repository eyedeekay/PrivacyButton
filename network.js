
function ResetPeerConnection(){
    browser.privacy.network.peerConnectionEnabled.set({value: false});
    browser.privacy.network.networkPredictionEnabled.set({value: false});
    browser.privacy.network.webRTCIPHandlingPolicy.set({value: "disable_non_proxied_udp"});
    console.log("Re-disabled WebRTC")
}

ResetPeerConnection()
