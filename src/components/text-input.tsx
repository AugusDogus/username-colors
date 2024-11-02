import { findByProps } from "@vendetta/metro";
import { React } from "@vendetta/metro/common";
import { showToast } from "@vendetta/ui/toasts";
import {
    type PressableProps,
} from "react-native";

const NotFound = (prop: string, isFunction?: boolean) => () => {
    React.useEffect(() => {
        showToast(`${prop} not found! Search for PNF in Debug Logs!`);
        console.warn(
            `!! PNF ERROR !!\nMissing the redesign ${isFunction ? "function" : "component"}: ${prop}. Please bug @nexpid about this on Discord!`,
        );
    }, []);
    return null;
};

const findProp = (...props: string[]) => findByProps(...props)?.[props[0]];
const findPropPolyfill = (isFunction: boolean, ...props: string[]) =>
    findProp(...props) ?? NotFound(props[0], isFunction);

export const TextInput = findPropPolyfill(false, "TextInput") as TextInput;

export type TextInput = React.FC<{
    size?: "sm" | "md" | "lg";
    label?: string;
    description?: React.ReactNode;
    editable?: boolean;
    focusable?: boolean;
    placeholder?: string;
    placeholderTextColor?: string;
    defaultValue?: string;
    value?: string;
    isDisabled?: boolean;
    leadingPressableProps?: PressableProps;
    leadingIcon?: React.FC;
    leadingText?: string;
    trailingPressableProps?: PressableProps;
    trailingIcon?: React.FC;
    trailingText?: string;
    secureTextEntry?: boolean;
    isClearable?: boolean;
    status?: "error" | "default";
    errorMessage?: string;
    spellCheck?: boolean;
    isCentered?: boolean;
    returnKeyType?: "search";
    grow?: boolean;
    autoCapitalize?: string;
    autoCorrect?: boolean;
    isRound?: boolean;
    onChange?: (value: string) => void;
}>;