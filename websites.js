
function ResetWebsitePrivacy(){
    browser.privacy.websites.firstPartyIsolate.set({value: true});
    browser.privacy.websites.hyperlinkAuditingEnabled.set({value: false});
    //browser.privacy.websites.protectedContentEnabled.set({value: false});
    browser.privacy.websites.referrersEnabled.set({value: false});
    browser.privacy.websites.resistFingerprinting.set({value: true});
    browser.privacy.websites.trackingProtectionMode.set({value: "always"});
    console.log("Re-enabled website tracking protections.")
}

ResetWebsitePrivacy()
