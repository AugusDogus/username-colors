import { findByProps } from "@vendetta/metro";
import { General } from "@vendetta/ui/components";

const { TouchableOpacity, Text, View } = General;

export const { showSimpleActionSheet } = findByProps("showSimpleActionSheet") as {
    showSimpleActionSheet: (props: {
        key: "CardOverflow";
        header: {
            title: string;
            onClose?: () => void;
        };
        options: {
            label: string;
            isDestructive?: boolean;
            onPress?: () => void;
        }[];
    }) => void;
};

export function showConfirmationSheet(props: {
    title: string;
    options: {
        label: string;
        isDestructive?: boolean;
        onPress?: () => void;
    }[];
}) {
    showSimpleActionSheet({
        key: "CardOverflow",
        header: {
            title: props.title
        },
        options: props.options
    });
}