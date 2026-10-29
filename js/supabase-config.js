// Публичная конфигурация Supabase.
// Значения берутся в панели проекта: Project Settings -> API Keys.
// Publishable key можно держать в репозитории, secret/service_role — нельзя.
window.SUPABASE_CONFIG = {
    url: 'https://ВАШ-ПРОЕКТ.supabase.co',
    anonKey: 'ВАШ-ПУБЛИЧНЫЙ-КЛЮЧ'
};

window.isSupabaseConfigured = function () {
    var config = window.SUPABASE_CONFIG || {};
    var url = config.url || '';
    var key = config.anonKey || '';

    if (!url || !key) return false;
    if (url.indexOf('ВАШ') !== -1 || key.indexOf('ВАШ') !== -1) return false;

    return url.indexOf('https://') === 0;
};
