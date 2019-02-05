
function ResetDisableSavePasswords(){
    browser.privacy.services.passwordSavingEnabled.set({value: false});
    console.log("Re-disabled saved passwords")
}

ResetDisableSavePasswords()
