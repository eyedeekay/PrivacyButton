
function ResetDisableSavePasswords(){
    browser.privacy.services.passwordSavingEnabled.set({value: false});
    console.log("Re-disabled saved passwords")
}

function EnableSavePasswords(){
    browser.privacy.services.passwordSavingEnabled.set({value: true});
    console.log("Enabled saved passwords")
}

ResetDisableSavePasswords()
