// Публичная конфигурация Firebase.
// Значения берутся в Project settings -> Your apps -> веб-приложение.
// databaseURL в конфиге часто отсутствует: его нужно добавить вручную
// из раздела Realtime Database.
window.FIREBASE_CONFIG = {
    apiKey: 'ВАШ_API_KEY',
    authDomain: 'ВАШ-ПРОЕКТ.firebaseapp.com',
    databaseURL: 'https://ВАШ-ПРОЕКТ-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'ВАШ-ПРОЕКТ',
    storageBucket: 'ВАШ-ПРОЕКТ.firebasestorage.app',
    messagingSenderId: 'ВАШ_SENDER_ID',
    appId: 'ВАШ_APP_ID'
};

window.isFirebaseConfigured = function () {
    var config = window.FIREBASE_CONFIG || {};
    var required = ['apiKey', 'databaseURL', 'projectId'];

    for (var i = 0; i < required.length; i++) {
        var value = config[required[i]] || '';
        if (!value || value.indexOf('ВАШ') !== -1) return false;
    }

    return String(config.databaseURL).indexOf('https://') === 0;
};
