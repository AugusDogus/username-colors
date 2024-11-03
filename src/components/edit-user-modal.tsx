import { React } from '@vendetta/metro/common';
import { storage } from '@vendetta/plugin';
import { toasts } from "@vendetta/ui";
import { Forms, General } from "@vendetta/ui/components";

const { FormInput, View } = Forms;
const { Button } = General;

export function EditUserIdModal({ entry, index, colorEntries }) {
    const [newUserId, setNewUserId] = React.useState(entry.userId);

    return (
        <View style={{ padding: 16 }}>
            <FormInput
                title="Discord User ID"
                value={newUserId}
                onChange={setNewUserId}
            />
            <Button
                title="Save"
                onPress={() => {
                    if (!newUserId) {
                        toasts.showToast("Please enter a valid User ID");
                        return;
                    }
                    const updatedEntries = [...colorEntries];
                    updatedEntries[index] = { ...entry, userId: newUserId };
                    storage.colors = { entries: updatedEntries };
                    toasts.showToast("User ID updated!");
                }}
            />
        </View>
    );
} 