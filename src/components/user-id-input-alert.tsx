import { findByDisplayName } from '@vendetta/metro';
import { clipboard, React } from '@vendetta/metro/common';
import { getAssetIDByName } from '@vendetta/ui/assets';
import { Forms, General } from '@vendetta/ui/components';
import Dialog from './dialog';

const { Stack, TextInput, ScrollView } = Forms;
const { Button } = General;

export function UserIDInputAlert({
    initialValue = "",
    onConfirm,
    title
}: {
    initialValue?: string;
    onConfirm: (value: string) => void;
    title: string;
}) {
    const [value, setValue] = React.useState(initialValue);
    const [error, setError] = React.useState("");
    const [isFetching, setIsFetching] = React.useState(false);

    const isValidId = (id: string) => /^\d+$/.test(id);

    function onConfirmWrapper() {
        if (!isValidId(value)) {
            setError("Please enter a valid Discord User ID (numbers only)");
            return;
        }
        setIsFetching(true);
        onConfirm(value);
        setIsFetching(false);
    }
    const Alert = findByDisplayName("FluxContainer(Alert)");

    return (
        <Dialog onConfirm={onConfirmWrapper} title={title}>

            extraContent={
                <Stack style={{ marginTop: -12 }}>
                    <TextInput
                        autoFocus={true}
                        isClearable={true}
                        value={value}
                        onChange={(v: string) => {
                            setValue(v);
                            if (error) setError("");
                        }}
                        returnKeyType="done"
                        onSubmitEditing={onConfirmWrapper}
                        state={error ? "error" : undefined}
                        errorMessage={error || undefined}
                        keyboardType="numeric"
                    />
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{ gap: 8 }}
                    >
                        <Button
                            size="sm"
                            variant="tertiary"
                            text="Import from clipboard"
                            icon={getAssetIDByName("ic_clipboard")}
                            onPress={() => clipboard.getString().then((str: string) => setValue(str))}
                        />
                    </ScrollView>
                </Stack>
            }
            actions={
                <Stack>
                    <Button
                        loading={isFetching}
                        text="Confirm"
                        variant="primary"
                        disabled={!value}
                        onPress={onConfirmWrapper}
                    />
                    <Button
                        disabled={isFetching}
                        text="Cancel"
                        variant="secondary"
                    />
                </Stack>
            }
        </Dialog>
    );
} 