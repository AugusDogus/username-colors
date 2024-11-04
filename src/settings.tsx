import { findByName } from '@vendetta/metro';
import { clipboard, React, stylesheet } from '@vendetta/metro/common';
import { storage } from '@vendetta/plugin';
import { semanticColors, toasts } from "@vendetta/ui";
import { getAssetIDByName } from "@vendetta/ui/assets";
import { Forms, General } from "@vendetta/ui/components";
import { UserIDInputAlert } from './components/user-id-input-alert';
import * as util from './util';
const { FormInput, FormRow } = Forms;
const { Button, View, TouchableOpacity, Image } = General;
const CustomColorPickerActionSheet = findByName("CustomColorPickerActionSheet");

const UserIDAlert = ({ onConfirm }) => {
    const [value, setValue] = React.useState("");
    return (
        <View>
            <FormInput
                value={value}
                onChange={setValue}
                placeholder="Type here..."
            />
            <Button
                size="sm"
                variant="tertiary"
                title="Import from clipboard"
                icon={getAssetIDByName("ic_clipboard")}
                onPress={() => clipboard.getString().then((str: string) => setValue(str))}
                style={{ marginTop: 8 }}
            />
        </View>
    );
};

export function Settings() {
    const [entries, setEntries] = React.useState(storage.colors?.entries || []);

    const handleLongPress = (entry, index) => {
        util.openSheet(UserIDInputAlert, {
            title: "Edit User ID",
            initialValue: entry.userId,
            onConfirm: (newId) => {
                const updatedEntries = [...entries];
                updatedEntries[index] = { ...entry, userId: newId };
                storage.colors = { entries: updatedEntries };
                setEntries(updatedEntries);
                toasts.showToast("User ID updated!");
            }
        });
    };

    const addNewEntry = () => {
        util.openSheet(UserIDInputAlert, {
            title: "Enter User ID",
            confirmText: "Save",
            cancelText: "Cancel",
            onConfirm: (value) => {
                util.openSheet(CustomColorPickerActionSheet, {
                    color: util.colorConverter.toInt("#000000"),
                    title: "Select Color",
                    onSelect: (color) => {
                        const hexColor = util.colorConverter.toHex(color);
                        const newEntries = [...entries, { userId: value, color: hexColor }];
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