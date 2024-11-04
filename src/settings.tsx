import { find, findByName, findByProps } from '@vendetta/metro';
import { React, stylesheet } from '@vendetta/metro/common';
import { storage } from '@vendetta/plugin';
import { semanticColors, toasts } from "@vendetta/ui";
import { showInputAlert } from '@vendetta/ui/alerts';
import { getAssetIDByName } from "@vendetta/ui/assets";
import { Forms, General } from "@vendetta/ui/components";
import * as util from './util';
const { FormInput, FormRow } = Forms;
const { Button, View, TouchableOpacity, Image } = General;
const CustomColorPickerActionSheet = findByName("CustomColorPickerActionSheet");
const ActionSheet =
    findByProps("ActionSheet")?.ActionSheet ??
    find((x) => x.render?.name === "ActionSheet");

export function Settings() {
    const [entries, setEntries] = React.useState(storage.colors?.entries || []);
    const handleLongPress = (entry, index) => {
        util.openSheet(ActionSheet, {
            header: `User ID: ${entry.userId}`,
            options: [
                {
                    label: "Modify User ID",
                    onPress: () => {
                        showInputAlert({
                            title: "Edit User ID",
                            placeholder: "Enter new User ID",
                            initialValue: entry.userId,
                            confirmText: "Save",
                            onConfirm: (newId) => {
                                const updatedEntries = [...entries];
                                updatedEntries[index] = { ...entry, userId: newId };
                                storage.colors = { entries: updatedEntries };
                                setEntries(updatedEntries);
                                toasts.showToast("User ID updated!");
                            }
                        });
                    }
                },
                {
                    label: "Change Color",
                    onPress: () => {
                        util.openSheet(CustomColorPickerActionSheet, {
                            color: util.colorConverter.toInt(entry.color),
                            title: "Select Color",
                            onSelect: (color) => {
                                const hexColor = util.colorConverter.toHex(color);
                                const updatedEntries = [...entries];
                                updatedEntries[index] = { ...entry, color: hexColor };
                                storage.colors = { entries: updatedEntries };
                                setEntries(updatedEntries);
                                toasts.showToast("Color updated!");
                            }
                        });
                    }
                },
                {
                    label: "Delete Entry",
                    isDestructive: true,
                    onPress: () => {
                        const updatedEntries = entries.filter((_, i) => i !== index);
                        storage.colors = { entries: updatedEntries };
                        setEntries(updatedEntries);
                        toasts.showToast("Entry deleted!");
                    }
                },
                {
                    label: "Cancel",
                    isCancel: true
                }
            ]
        });
    };

    const addNewEntry = () => {
        showInputAlert({
            title: 'Enter User ID',
            confirmText: 'Save',
            cancelText: "Cancel",
            placeholder: "Type here...",
            onConfirm: (userId) => {
                util.openSheet(CustomColorPickerActionSheet, {
                    color: util.colorConverter.toInt("#000000"),
                    title: "Select Color",
                    onSelect: (color) => {
                        const hexColor = util.colorConverter.toHex(color);
                        const newEntries = [...entries, { userId, color: hexColor }];
                        storage.colors = { entries: newEntries };
                        setEntries(newEntries);
                        toasts.showToast("Color entry added!");
                    }
                });
            }
        });
    };

    return (
        <>
            {entries.map((entry, index) => (
                <FormRow
                    key={index}
                    label={`User ID: ${entry.userId}`}
                    subLabel="Tap to change color"
                    onPress={() => {
                        util.openSheet(CustomColorPickerActionSheet, {
                            color: util.colorConverter.toInt(entry.color),
                            title: "Select Color",
                            onSelect: (color) => {
                                FormRow
                                const hexColor = util.colorConverter.toHex(color);
                                const updatedEntries = [...entries];
                                updatedEntries[index] = { ...entry, color: hexColor };
                                storage.colors = { entries: updatedEntries };
                                setEntries(updatedEntries);
                                toasts.showToast("Color updated!");
                            }
                        });
                    }}
                    onLongPress={() => handleLongPress(entry, index)}
                    trailing={
                        <View style={{
                            width: 24,
                            height: 24,
                            borderRadius: 12,
                            backgroundColor: entry.color,
                            borderWidth: 1,
                            borderColor: semanticColors.BACKGROUND_SECONDARY
                        }} />
                    }
                />
            ))}
            <TouchableOpacity
                style={styles.fab}
                onPress={addNewEntry}
            >
                <Image
                    source={getAssetIDByName("ic_add_24px")}
                    style={styles.fabIcon}
                />
            </TouchableOpacity>
        </>
    );
}

const styles = stylesheet.createThemedStyleSheet({
    fab: {
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: semanticColors.BACKGROUND_SECONDARY,
        borderRadius: 50,
        width: 56,
        height: 56,
        justifyContent: "center",
        alignItems: "center",
        elevation: 6,
    },
    fabIcon: {
        width: 24,
        height: 24,
        tintColor: "white"
    }
});