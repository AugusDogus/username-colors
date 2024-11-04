import { stylesheet } from "@vendetta/metro/common";
import { semanticColors } from "@vendetta/ui";
import { showConfirmationAlert } from '@vendetta/ui/alerts';
import { getAssetIDByName } from '@vendetta/ui/assets';
import { Forms, General } from "@vendetta/ui/components";
import { showToast } from '@vendetta/ui/toasts';
import { ActionSheet, hideActionSheet } from './action-sheet';
const { FormRow } = Forms;
const { Text } = General;

const styles = stylesheet.createThemedStyleSheet({
    wompwomp: {
        flexDirection: "column",
        gap: 8,
    },
    destructiveIcon: {
        tintColor: semanticColors.TEXT_DANGER,
    },
});

const destructiveText: Parameters<typeof Text>[0] = {
    color: "TEXT_DANGER",
    variant: "text-md/semibold",
};


export default function LongPressActionSheet({
    kaboom
}: {
    kaboom: () => void;
}) {
    return (
        <ActionSheet title="Message Actions">
            <FormRow
                label={<Text>Delete Files</Text>}
                leading={
                    <FormRow.Icon
                        style={styles.destructiveIcon}
                        source={getAssetIDByName("ic_trash_24px")}
                    />
                }
                onPress={() =>
                    showConfirmationAlert({
                        title: "Delete DOOM files?",
                        content: "Are you sure you want to delete DOOM files?",
                        confirmText: "Delete",
                        confirmColor: "RED" as ButtonColors,
                        cancelText: "Cancel",
                        onConfirm: async () => {
                            hideActionSheet();
                            kaboom();
                            showToast("Deleted files", getAssetIDByName("Check"));
                        },
                    })
                }
            />
        </ActionSheet>
    );
} 