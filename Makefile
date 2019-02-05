
install:
	mkdir -p /usr/share/webext/PrivacyButton \
		/usr/share/mozilla/extensions/PrivacyButton/ \
		/usr/share/chromium/extensions/
	install cookies.js /usr/share/webext/PrivacyButton
	install network.js /usr/share/webext/PrivacyButton
	install passwords.js /usr/share/webext/PrivacyButton
	install websites.js /usr/share/webext/PrivacyButton
	install manifest.json /usr/share/webext/PrivacyButton
	install README.md /usr/share/webext/PrivacyButton
	install LICENSE /usr/share/webext/PrivacyButton
	ln -sf /usr/share/webext/PrivacyButton \
		/usr/share/chromium/extensions/PrivacyButton
	ln -sf /usr/share/webext/PrivacyButton \
		/usr/share/mozilla/extensions/PrivacyButton/PrivacyButton

uninstall:
	rm -rf /usr/share/webext/PrivacyButton \
		/usr/share/mozilla/extensions/PrivacyButton/ \
		/usr/share/chromium/extensions/

zip:
	zip -r -FS ../PrivacyButton.zip *
