import { findByName, findByProps } from '@vendetta/metro';
import { stylesheet } from '@vendetta/metro/common';
import { storage } from '@vendetta/plugin';
import { semanticColors, toasts } from "@vendetta/ui";
import { getAssetIDByName } from "@vendetta/ui/assets";
import { Forms, General } from "@vendetta/ui/components";
import { showToast } from '@vendetta/ui/toasts';
import * as util from "./components/util";
const { FormText, FormSection, FormInput, FormRow } = Forms;
const { Button, View, TouchableOpacity, Image } = General;
const dialog = findByProps("show", "confirm", "close");

const CustomColorPickerActionSheet = findByName("CustomColorPickerActionSheet");

export function Settings() {
    const colorEntries = storage.colors?.entries || [];

    const addNewEntry = () => {
        let inputUserId = "";

        dialog.show({
            title: "Enter User ID",
            content: (

                <View>
                    <FormInput
                        title="Discord User ID"
                        placeholder="Enter the user's Discord ID"
                        value={inputUserId}
                        onChange={(value) => inputUserId = value}
                    />
                    <FormRow
                        label="Minimum Characters"
                        subLabel="The minimum amount of characters for Char Counter to show up"
                        leading={
                            <FormRow.Icon source={getAssetIDByName("ic_message_edit")} />
                        }
                    />
                    <FormInput
                        title=""
                        keyboardType="numeric"
                        placeholder="1"
                        value={'hello world'}
                        onChange={(x: string) =>
                            (showToast(x))
                        }
                        style={{ marginTop: -25, marginHorizontal: 12 }}
                    />
                </View>


            ),
            confirmText: "Next",
            cancelText: "Cancel",
            onConfirm: () => {
                if (!inputUserId) {
                    toasts.showToast("Please enter a valid User ID");
                    return;
                }

                util.openSheet(CustomColorPickerActionSheet, {
                    color: util.colorConverter.toInt("#000000"),
                    title: "Select Color",
                    onSelect: (color) => {
                        const hexColor = util.colorConverter.toHex(color);
                        const entries = storage.colors?.entries || [];
                        entries.push({ userId: inputUserId, color: hexColor });
                        storage.colors = { entries };
                        toasts.showToast("Color entry added!");
                    }
                });
            }
        });
    };

    return (
        <>
            <FormSection title="Custom Colors">
                {colorEntries.map((entry, index) => (
                    <FormRow
                        key={index}
                        label={`User ID: ${entry.userId}`}
                        subLabel="Tap to change color"
                        onPress={() => {
                            util.openSheet(CustomColorPickerActionSheet, {
                                color: util.colorConverter.toInt(entry.color),
                                title: "Select Color",
                                onSelect: (color) => {
                                    const hexColor = util.colorConverter.toHex(color);
                                    const updatedEntries = [...colorEntries];
                                    updatedEntries[index] = { ...entry, color: hexColor };
                                    storage.colors = { entries: updatedEntries };
                                    toasts.showToast("Color updated!");
                                }
                            });
                        }}
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
                {colorEntries.length === 0 && (
                    <FormRow
                        label="No Colors Set"
                        subLabel="Use the + button to add a custom color"
                    />
                )}
            </FormSection>
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