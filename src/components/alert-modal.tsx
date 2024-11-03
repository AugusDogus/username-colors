import { findByProps } from '@vendetta/metro';
import { Button, Forms } from "@vendetta/ui/components";
import { ComponentProps, ComponentType } from "react";

type ActionButtonProps = Omit<ComponentProps<typeof Button>, "onPress"> & {
    onPress?: () => void | Promise<unknown>;
};

const {
    AlertModal: _AlertModal,
    AlertActionButton: _AlertActionButton
} = findByProps("AlertModal", "AlertActions");

const { Text } = Forms;

export const AlertActionButton = _AlertActionButton as ComponentType<ActionButtonProps>;

export default function AlertModal(props: Record<string, unknown>) {

    return <_AlertModal {...props} />;
}