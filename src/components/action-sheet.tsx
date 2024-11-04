import { logger } from '@vendetta';
import { find, findByProps } from "@vendetta/metro";
import { ReactNative as RN } from "@vendetta/metro/common";
import { showToast } from '@vendetta/ui/toasts';
import { type ImageSourcePropType } from "react-native";

const _ActionSheet =
    findByProps("ActionSheet")?.ActionSheet ??
    find((x) => x.render?.name === "ActionSheet");

const { ActionSheetTitleHeader, ActionSheetCloseButton } = findByProps(
    "ActionSheetTitleHeader",
    "ActionSheetCloseButton",
);

export const LazyActionSheet = findByProps("openLazy", "hideActionSheet") as {
    openLazy: (component: Promise<any>, key: string, props?: object) => void;
    hideActionSheet: () => void;
};
export const { openLazy, hideActionSheet } = LazyActionSheet;

export function openSheet(sheet, props) {
    try {
        openLazy(
            new Promise((call) => call({ default: sheet })),
            'ActionSheet',
            props
        );
    } catch (e) {
        logger.error(e.stack);
        showToast('Got error when opening ActionSheet! Please check debug logs');
    }
}

export const { showSimpleActionSheet } = findByProps(
    "showSimpleActionSheet",
) as {
    showSimpleActionSheet: (props: {
        key: "CardOverflow";
        header: {
            title: string;
            icon?: React.ReactNode;
            onClose?: () => void;
        };
        options: {
            label: string;
            icon?: ImageSourcePropType;
            isDestructive?: boolean;
            onPress?: () => void;
        }[];
    }) => void;
};

type ActionSheetProps = React.PropsWithChildren<{
    title: string;
    onClose?: () => void;
}>;

export const ActionSheet = (({
    title,
    onClose,
    children,
}: ActionSheetProps) => {
    return (
        <_ActionSheet>
            <ActionSheetTitleHeader
                title={title}
                trailing={
                    <ActionSheetCloseButton
                        onPress={onClose ?? (() => hideActionSheet())}
                    />
                }
            />
            <RN.View>{children}</RN.View>
        </_ActionSheet>
    );
}) as {
    (props: ActionSheetProps): JSX.Element;
    open: <Sheet extends React.FunctionComponent>(
        sheet: Sheet,
        props: Parameters<Sheet>[0],
    ) => void;
};
ActionSheet.open = (sheet, props) => {
    openLazy(
        new Promise((res) =>
            res({
                default: sheet,
            }),
        ) as any,
        "ActionSheet",
        props,
    );
};