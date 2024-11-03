import { findByProps } from '@vendetta/metro';
import { General } from "@vendetta/ui/components";
import { ComponentProps, ComponentType, ReactNode } from "react";
import { View } from "react-native";
import { findByFilePath } from '../metro';
import { lazyDestructure } from '../utils/lazy';
const { Button, Text } = General;

type ActionButtonProps = Omit<ComponentProps<typeof Button>, "onPress"> & {
    onPress?: () => void | Promise<unknown>;
};

const {
    AlertModal: _AlertModal,
    AlertActionButton: _AlertActionButton
} = lazyDestructure(() => findByProps("AlertModal", "AlertActions"));

export const AlertActionButton = _AlertActionButton as ComponentType<ActionButtonProps>;

export default function AlertModal(props: Record<string, unknown>) {
    const forwardFailedModal = findByFilePath("modules/forwarding/native/ForwardFailedAlertModal.tsx");

    // ponyfill for extraContent
    if (!forwardFailedModal && "extraContent" in props) {
        props.content = (
            <View style={{ gap: 16 }}>
                <Text variant="text-md/medium" color="text-muted">
                    {props.content as string}
                </Text>
                <View>
                    {props.extraContent as ReactNode}
                </View>
            </View>
        );

        delete props.extraContent;
    }

    return <_AlertModal {...props} />;
}