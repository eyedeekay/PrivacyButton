
browser.privacy.network.peerConnectionEnabled.set({value: false});
browser.privacy.network.networkPredictionEnabled.set({value: false});
browser.privacy.network.webRTCIPHandlingPolicy.set({value: "disable_non_proxied_udp"});

browser.privacy.services.passwordSavingEnabled.set({value: false});

//browser.privacy.websites.cookieConfig.behavior.set({value: "reject_third_party"});
//browser.privacy.websites.cookieConfig.nonPersistentCookies.set({value: true});

browser.privacy.websites.firstPartyIsolate.set({value: true});
browser.privacy.websites.hyperlinkAuditingEnabled.set({value: false});
//browser.privacy.websites.protectedContentEnabled.set({value: false});
browser.privacy.websites.referrersEnabled.set({value: false});
browser.privacy.websites.resistFingerprinting.set({value: true});
//browser.privacy.websites.thirdPartyCookiesAllowed.set({value: false});
browser.privacy.websites.trackingProtectionMode.set({value: "always"});
