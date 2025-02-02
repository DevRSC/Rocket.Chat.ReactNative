export const STATUS_COLORS: any = {
	online: '#2de0a5',
	busy: '#f5455c',
	away: '#ffd21f',
	offline: '#cbced1',
	loading: '#9ea2a8',
	disabled: '#F38C39'
};

export const SWITCH_TRACK_COLOR = {
	false: '#f5455c',
	true: '#2de0a5'
};

const mentions = {
	unreadColor: '#6C727A',
	tunreadColor: '#3ea9f5',
	mentionMeColor: '#F5455C',
	mentionGroupColor: '#F38C39',
	mentionOtherColor: '#F3BE08'
};

export const colors = {
	light: {
		backgroundColor: '#ffffff',
		focusedBackground: '#ffffff',
		chatComponentBackground: '#f3f4f5',
		auxiliaryBackground: '#efeff4',
		bannerBackground: '#f1f2f4',
		titleText: '#0d0e12',
		bodyText: '#2f343d',
		backdropColor: '#000000',
		dangerColor: '#f5455c',
		successColor: '#2de0a5',
		borderColor: '#e1e5e8',
		controlText: '#54585e',
		auxiliaryText: '#9ca2a8',
		infoText: '#6d6d72',
		tintColor: '#3ea9f5',
		tintActive: '#549df9',
		tintDisabled: '#88B4F5',
		auxiliaryTintColor: '#6C727A',
		actionTintColor: '#3ea9f5',
		separatorColor: '#cbcbcc',
		navbarBackground: '#ffffff',
		headerBorder: '#B2B2B2',
		headerBackground: '#EEEFF1',
		headerSecondaryBackground: '#ffffff',
		headerTintColor: '#6C727A',
		headerTitleColor: '#0C0D0F',
		headerSecondaryText: '#3ea9f5',
		toastBackground: '#0C0D0F',
		videoBackground: '#1f2329',
		favoriteBackground: '#ffbb00',
		hideBackground: '#54585e',
		messageboxBackground: '#ffffff',
		searchboxBackground: '#E6E6E7',
		buttonBackground: '#414852',
		buttonText: '#ffffff',
		passcodeBackground: '#EEEFF1',
		passcodeButtonActive: '#E4E7EA',
		passcodeLockIcon: '#6C727A',
		passcodePrimary: '#2F343D',
		passcodeSecondary: '#6C727A',
		passcodeDotEmpty: '#CBCED1',
		passcodeDotFull: '#6C727A',
		previewBackground: '#1F2329',
		previewTintColor: '#f9f9f9',
		backdropOpacity: 0.3,
		attachmentLoadingOpacity: 0.7,
		collapsibleQuoteBorder: '#CBCED1',
		collapsibleChevron: '#6C727A',
		cancelButton: '#E4E7EA',
		conferenceCallBorder: '#F2F3F5',
		conferenceCallBackground: '#F7F8FA',
		conferenceCallOngoingPhoneBackground: '#C0F6E4',
		conferenceCallIncomingPhoneBackground: '#D1EBFE',
		conferenceCallEndedPhoneBackground: '#E4E7EA',
		conferenceCallOngoingPhoneIcon: '#158D65',
		conferenceCallIncomingPhoneIcon: '#095AD2',
		conferenceCallEndedPhoneIcon: '#6C727A',
		conferenceCallPlusUsersButton: '#E4E7EA',
		conferenceCallPlusUsersText: '#6C727A',
		conferenceCallCallBackButton: '#EEEFF1',
		conferenceCallCallBackText: '#1F2329',
		conferenceCallDisabledIcon: '#6C727A',
		conferenceCallEnabledIcon: '#FFFFFF',
		conferenceCallEnabledIconBackground: '#156FF5',
		conferenceCallPhotoBackground: '#E4E7EA',
		textInputSecondaryBackground: '#E4E7EA',
		...mentions
	},
	dark: {
		backgroundColor: '#030b1b',
		focusedBackground: '#0b182c',
		chatComponentBackground: '#192132',
		auxiliaryBackground: '#07101e',
		bannerBackground: '#0e1f38',
		titleText: '#f9f9f9',
		bodyText: '#cbced1',
		backdropColor: '#000000',
		dangerColor: '#f5455c',
		successColor: '#2de0a5',
		borderColor: '#0f213d',
		controlText: '#dadde6',
		auxiliaryText: '#9297a2',
		infoText: '#6D6D72',
		tintColor: '#3ea9f5',
		tintActive: '#549df9',
		tintDisabled: '#88B4F5',
		auxiliaryTintColor: '#f9f9f9',
		actionTintColor: '#3ea9f5',
		separatorColor: '#2b2b2d',
		navbarBackground: '#0b182c',
		headerBorder: '#2F3A4B',
		headerBackground: '#0b182c',
		headerSecondaryBackground: '#0b182c',
		headerTintColor: '#f9f9f9',
		headerTitleColor: '#f9f9f9',
		headerSecondaryText: '#9297a2',
		toastBackground: '#0C0D0F',
		videoBackground: '#1f2329',
		favoriteBackground: '#ffbb00',
		hideBackground: '#54585e',
		messageboxBackground: '#0b182c',
		searchboxBackground: '#192d4d',
		buttonBackground: '#414852',
		buttonText: '#ffffff',
		passcodeBackground: '#030C1B',
		passcodeButtonActive: '#0B182C',
		passcodeLockIcon: '#6C727A',
		passcodePrimary: '#FFFFFF',
		passcodeSecondary: '#CBCED1',
		passcodeDotEmpty: '#CBCED1',
		passcodeDotFull: '#6C727A',
		previewBackground: '#030b1b',
		previewTintColor: '#f9f9f9',
		backdropOpacity: 0.9,
		attachmentLoadingOpacity: 0.3,
		collapsibleQuoteBorder: '#CBCED1',
		collapsibleChevron: '#6C727A',
		cancelButton: '#E4E7EA',
		conferenceCallBorder: '#1F2329',
		conferenceCallBackground: '#1F2329',
		conferenceCallOngoingPhoneBackground: '#106D4F',
		conferenceCallIncomingPhoneBackground: '#D1EBFE',
		conferenceCallEndedPhoneBackground: '#6C727A',
		conferenceCallOngoingPhoneIcon: '#F7F8FA',
		conferenceCallIncomingPhoneIcon: '#095AD2',
		conferenceCallEndedPhoneIcon: '#F7F8FA',
		conferenceCallPlusUsersButton: '#2F343D',
		conferenceCallPlusUsersText: '#9EA2A8',
		conferenceCallCallBackButton: '#E4E7EA',
		conferenceCallCallBackText: '#FFFFFF',
		conferenceCallDisabledIcon: '#6C727A',
		conferenceCallEnabledIcon: '#FFFFFF',
		conferenceCallEnabledIconBackground: '#156FF5',
		conferenceCallPhotoBackground: '#E4E7EA',
		textInputSecondaryBackground: '#030b1b', // backgroundColor
		...mentions
	},
	black: {
		backgroundColor: '#1c1c1c',
		focusedBackground: '#2b2b2b',
		chatComponentBackground: '#2d2d2d',
		auxiliaryBackground: '#1c1c1c',
		bannerBackground: '#4a4a4a',
		titleText: '#ffffff',
		bodyText: '#c2c2c2',
		backdropColor: '#000000',
		dangerColor: '#ff6347',
		successColor: '#00ff7f',
		borderColor: '#1c1c1c',
		controlText: '#ffffff',
		auxiliaryText: '#c2c2c2',
		infoText: '#c2c2c2',
		tintColor: '#ff7f50',
		tintActive: '#ff6347',
		tintDisabled: '#8b0000',
		auxiliaryTintColor: '#ffffff',
		actionTintColor: '#ff6347',
		separatorColor: '#c2c2c2',
		navbarBackground: '#2b2b2b',
		headerBorder: '#4a4a4a',
		headerBackground: '#2b2b2b',
		headerSecondaryBackground: '#2b2b2b',
		headerTintColor: '#ffffff',
		headerTitleColor: '#ffffff',
		headerSecondaryText: '#c2c2c2',
		toastBackground: '#1c1c1c',
		videoBackground: '#4a4a4a',
		favoriteBackground: '#ff8c00',
		hideBackground: '#c2c2c2',
		messageboxBackground: '#2b2b2b',
		searchboxBackground: '#4a4a4a',
		buttonBackground: '#ff7f50',
		buttonText: '#ffffff',
		passcodeBackground: '#1c1c1c',
		passcodeButtonActive: '#2b2b2b',
		passcodeLockIcon: '#c2c2c2',
		passcodePrimary: '#ffffff',
		passcodeSecondary: '#c2c2c2',
		passcodeDotEmpty: '#c2c2c2',
		passcodeDotFull: '#ffffff',
		previewBackground: '#1c1c1c',
		previewTintColor: '#ffffff',
		backdropOpacity: 0.9,
		attachmentLoadingOpacity: 0.3,
		collapsibleQuoteBorder: '#c2c2c2',
		collapsibleChevron: '#ffffff',
		cancelButton: '#c2c2c2',
		conferenceCallBorder: '#4a4a4a',
		conferenceCallBackground: '#2b2b2b',
		conferenceCallOngoingPhoneBackground: '#ff6347',
		conferenceCallIncomingPhoneBackground: '#4a4a4a',
		conferenceCallEndedPhoneBackground: '#c2c2c2',
		conferenceCallOngoingPhoneIcon: '#ffffff',
		conferenceCallIncomingPhoneIcon: '#c2c2c2',
		conferenceCallEndedPhoneIcon: '#c2c2c2',
		conferenceCallPlusUsersButton: '#ff7f50',
		conferenceCallPlusUsersText: '#c2c2c2',
		conferenceCallCallBackButton: '#c2c2c2',
		conferenceCallCallBackText: '#ffffff',
		conferenceCallDisabledIcon: '#c2c2c2',
		conferenceCallEnabledIcon: '#ffffff',
		conferenceCallEnabledIconBackground: '#ff6347',
		conferenceCallPhotoBackground: '#c2c2c2',
		textInputSecondaryBackground: '#1c1c1c',
		...mentions
	}
};

export const themes = colors;
