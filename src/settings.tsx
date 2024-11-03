import { findByName, findByProps } from '@vendetta/metro';
import { stylesheet } from '@vendetta/metro/common';
import { storage } from '@vendetta/plugin';
import { semanticColors, toasts } from "@vendetta/ui";
import { getAssetIDByName } from "@vendetta/ui/assets";
import { Forms, General } from "@vendetta/ui/components";
import { ColorPicker } from './components/color-picker';
import { TextInput } from './components/text-input';
import * as util from "./components/util";

const { FormText, FormSection } = Forms;
const { Button, View, TouchableOpacity, Image } = General;
const dialog = findByProps("show", "confirm", "close");

const CustomColorPickerActionSheet = findByName("CustomColorPickerActionSheet");

export function Settings() {
    const addNewEntry = () => {
        // Open a sheet to input user ID and pick color
        util.openSheet(CustomColorPickerActionSheet, {
            color: util.colorConverter.toInt("#000000"),
            title: "Select Color",
            onSelect: (color) => {
                const hexColor = util.colorConverter.toHex(color);
                // Prompt for user ID (you might want to create a custom sheet for this)
                dialog.show({
                    title: "Enter User ID",
                    content: "Please enter the Discord User ID",
                    confirmText: "Save",
                    cancelText: "Cancel",
                    onConfirm: (userId) => {
                        const entries = storage.colors?.entries || [];
                        entries.push({ userId, color: hexColor });
                        storage.colors = { entries };
                        toasts.showToast("Color entry added!");
                    }
                });
            }
        });
    };

    return (
        <>
            <TextInput />
            <ColorPicker />
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
    )
}

const styles = stylesheet.createThemedStyleSheet({
    fab: {
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: semanticColors.BUTTON_SECONDARY_BACKGROUND,
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
        tintColor: semanticColors.BUTTON_SECONDARY_TEXT
    }
});