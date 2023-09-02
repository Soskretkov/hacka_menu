const STR_STORAGE_KEY_FOR_SETTINGS = 'Settings';  // Имя ключа для localStorage

export function getGlobalSettings() {
    const deserializedGlobalSettings = localStorage.getItem(STR_STORAGE_KEY_FOR_SETTINGS);
    let globalSettings;

    if (deserializedGlobalSettings) {
        globalSettings = JSON.parse(deserializedGlobalSettings);
    } else {
        globalSettings = {
            backgroundColor: "#FFFFFF",
        };

        localStorage.setItem(STR_STORAGE_KEY_FOR_SETTINGS, JSON.stringify(globalSettings));
    }

    return globalSettings;
}


export function setGlobalSettings(updatedSettings) {
    // Объединяем существующие настройки с новыми
    const currentSettings = getGlobalSettings();
    const newSettings = { ...currentSettings, ...updatedSettings };

    // Сохраняем обновленные настройки в localStorage
    localStorage.setItem(STR_STORAGE_KEY_FOR_SETTINGS, JSON.stringify(newSettings));
}