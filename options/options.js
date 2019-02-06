function EnablePeerConnection(){
    browser.privacy.network.peerConnectionEnabled.set({value: true});
    browser.privacy.network.networkPredictionEnabled.set({value: false});
    browser.privacy.network.webRTCIPHandlingPolicy.set({value: "disable_non_proxied_udp"});
    console.log("Enabled WebRTC")
}

function EnableSavePasswords(){
    browser.privacy.services.passwordSavingEnabled.set({value: true});
    console.log("Enabled saved passwords")
}

function EnableCookieConfiguration(){
    //browser.privacy.websites.cookieConfig.behavior.set({value: "reject_third_party"});
    //browser.privacy.websites.cookieConfig.nonPersistentCookies.set({value: true});
    //browser.privacy.websites.thirdPartyCookiesAllowed.set({value: false});
    console.log("Re-disabled third-party cookies")
}

/*
Store the currently selected settings using browser.storage.local.
*/
function storeSettings() {

  function getTypes() {
    let dataTypes = [];
    const checkboxes = document.querySelectorAll(".data-types [type=checkbox]");
    for (let item of checkboxes) {
      if (item.checked) {
        dataTypes.push(item.getAttribute("data-type"));
        if (item.getAttribute("data-type") == "savedpasswords") {
            EnableSavePasswords()
        }
        if (item.getAttribute("data-type") == "webrtcp") {
            EnablePeerConnection()
        }
        if (item.getAttribute("data-type") == "cookies3rdparty") {
            EnableCookieConfiguration()
        }
      }
    }
    return dataTypes;
  }

  const dataTypes = getTypes();
  browser.storage.local.set({
    dataTypes
  });
}

/*
Update the options UI with the settings values retrieved from storage,
or the default settings if the stored settings are empty.
*/
function updateUI(restoredSettings) {
  const selectList = document.querySelector("#since");
  selectList.value = restoredSettings.since;

  const checkboxes = document.querySelectorAll(".data-types [type=checkbox]");
  for (let item of checkboxes) {
    if (restoredSettings.dataTypes.indexOf(item.getAttribute("data-type")) != -1) {
      item.checked = true;
    } else {
      item.checked = false;
    }
  }
}

function onError(e) {
  console.error(e);
}

/*
On opening the options page, fetch stored settings and update the UI with them.
*/
const gettingStoredSettings = browser.storage.local.get();
gettingStoredSettings.then(updateUI, onError);

/*
On clicking the save button, save the currently selected settings.
*/
const saveButton = document.querySelector("#save-button");
saveButton.addEventListener("click", storeSettings);
