import { findByName, findByProps } from '@vendetta/metro';
import { React, stylesheet } from '@vendetta/metro/common';
import { storage } from '@vendetta/plugin';
import { semanticColors, toasts } from "@vendetta/ui";
import { getAssetIDByName } from "@vendetta/ui/assets";
import { Forms, General } from "@vendetta/ui/components";
import { showSimpleActionSheet } from './components/action-sheet';
import { EditUserIdModal } from './components/edit-user-modal';
import * as util from './components/util';
const { FormText, FormInput, FormRow } = Forms;
const { Button, View, TouchableOpacity, Image } = General;
const { pushModal, popModal } = findByProps("pushModal", "popModal");

const CustomColorPickerActionSheet = findByName("CustomColorPickerActionSheet");

const AddEntryModal = ({ colorEntries, inputUserId, setInputUserId }) => {
    return (
        <View style={{ padding: 16 }}>
            <FormInput
                title="Discord User ID"
                placeholder="Enter the user's Discord ID"
                value={inputUserId}
                onChange={(value) => setInputUserId(value)}
                style={{ marginBottom: 16 }}
            />
            <Button
                title="Next"
                onPress={() => {
                    if (!inputUserId) {
                        toasts.showToast("Please enter a valid User ID");
                        return;
                    }
                    popModal("add-entry-modal");
                    util.openSheet(CustomColorPickerActionSheet, {
                        color: util.colorConverter.toInt("#000000"),
                        title: "Select Color",
                        onSelect: (color) => {
                            const hexColor = util.colorConverter.toHex(color);
                            const entries = colorEntries || [];
                            entries.push({ userId: inputUserId, color: hexColor });
                            storage.colors = { entries };
                            setInputUserId(""); // Reset the input
                            toasts.showToast("Color entry added!");
                        }
                    });
                }}
            />
        </View>
    );
};

export function Settings() {
    const colorEntries = storage.colors?.entries || [];
    const [inputUserId, setInputUserId] = React.useState("");

    const handleLongPress = (entry, index) => {
        showSimpleActionSheet({
            key: "CardOverflow",
            header: {
                title: `User ID: ${entry.userId}`
            },
            options: [
                {
                    label: "Modify User ID",
                    onPress: () => {
                        pushModal("edit-userid-modal", {
                            render: () => (
                                <EditUserIdModal
                                    entry={entry}
                                    index={index}
                                    colorEntries={colorEntries}
                                />
                            )
                        });
                    }
                },
                {
                    label: "Modify Color",
                    onPress: () => {
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
                    }
                },
                {
                    label: "Delete",
                    isDestructive: true,
                    onPress: () => {
                        const updatedEntries = colorEntries.filter((_, i) => i !== index);
                        storage.colors = { entries: updatedEntries };
                        toasts.showToast("Color entry removed!");
                    }
                },
                { label: "Cancel" }
            ]
        });
    };

    const addNewEntry = () => {
        pushModal({
            key: "add-entry-modal",
            modal: {
                key: "add-entry-modal",
                modal: () => (
                    <AddEntryModal
                        colorEntries={colorEntries}
                        inputUserId={inputUserId}
                        setInputUserId={setInputUserId}
                    />
                ),
                animation: "slide-up",
                shouldPersistUnderModals: false,
                props: {
                    title: "Add New Entry"
                },
                closable: true
            }
        });
    };

    return (
        <>
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