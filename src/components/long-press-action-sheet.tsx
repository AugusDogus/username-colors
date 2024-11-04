import { findByName } from '@vendetta/metro';
import { stylesheet } from "@vendetta/metro/common";
import { storage } from '@vendetta/plugin';
import { semanticColors } from "@vendetta/ui";
import { showInputAlert } from '@vendetta/ui/alerts';
import { getAssetIDByName } from '@vendetta/ui/assets';
import { Forms, General } from "@vendetta/ui/components";
import { showToast } from '@vendetta/ui/toasts';
import * as util from '../utils';
import { ActionSheet, hideActionSheet, openSheet } from './action-sheet';

const { FormRow } = Forms;
const { Text } = General;
const CustomColorPickerActionSheet = findByName("CustomColorPickerActionSheet");

const styles = stylesheet.createThemedStyleSheet({
    wompwomp: {
        flexDirection: "column",
        gap: 8,
    },
    destructiveIcon: {
        tintColor: semanticColors.TEXT_DANGER,
    },
    destructiveText: {
        color: semanticColors.TEXT_DANGER,
        fontWeight: 'bold',
    }
});


export function LongPressActionSheet({
    entry,
    index,
    entries,
    setEntries
}: {
    entry: any;
    index: number;
    entries: any[];
    setEntries: (entries: any[]) => void;
}) {
    return (
        <ActionSheet title="Message Actions">
            <FormRow
                label="Modify User ID"
                onPress={() => {
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
                            showToast("User ID updated!", getAssetIDByName("Check"));
                            hideActionSheet();
                        }
                    });
                }}
            />

            <FormRow
                label="Change Color"
                onPress={() => {
                    openSheet(CustomColorPickerActionSheet, {
                        color: util.colorConverter.toInt(entry.color),
                        title: "Select Color",
                        onSelect: (color) => {
                            const hexColor = util.colorConverter.toHex(color);
                            const updatedEntries = [...entries];
                            updatedEntries[index] = { ...entry, color: hexColor };
                            storage.colors = { entries: updatedEntries };
                            setEntries(updatedEntries);
                            showToast("Color updated!", getAssetIDByName("Check"));
                            hideActionSheet();
                        }
                    });
                }}
            />

            <FormRow
                label={<Text style={styles.destructiveText}>Delete Entry</Text>}
                leading={
                    <FormRow.Icon
                        style={styles.destructiveIcon}
                        source={getAssetIDByName("ic_trash_24px")}
                    />
                }
                onPress={() => {
                    const updatedEntries = entries.filter((_, i) => i !== index);
                    storage.colors = { entries: updatedEntries };
                    setEntries(updatedEntries);
                    showToast("Entry deleted!", getAssetIDByName("Check"));
                    hideActionSheet();
                }}
            />
        </ActionSheet>
    );
} 