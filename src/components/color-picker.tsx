import { findByName, findByProps } from '@vendetta/metro';
import { constants, React, stylesheet } from "@vendetta/metro/common";
import { semanticColors, toasts } from "@vendetta/ui";
import { Forms, General } from "@vendetta/ui/components";
import * as util from './util';
const { ScrollView, View, Text, TouchableOpacity, TextInput, Pressable, Image } = General;
const { FormLabel, FormIcon, FormArrow, FormRow, FormSwitch, FormSwitchRow, FormSection, FormDivider, FormInput, FormSliderRow } = Forms;
const HelpMessage = findByName("HelpMessage");
const CustomColorPickerActionSheet = findByName("CustomColorPickerActionSheet");
const dialog = findByProps("show", "confirm", "close");

const customizeableColors = [
    {
        id: "textColor",
        label: "Deleted Message Text Color",
        subLabel: "Click to customize Deleted Message Text Color",
        defaultColor: "#E40303",
    }
]

export function ColorPicker() {
    return (<>
        <View style={[styles.subText]}>{
            customizeableColors?.map((obj) => {
                const whenPressed = () => util?.openSheet(
                    CustomColorPickerActionSheet, {
                    color: util?.colorConverter?.toInt(obj?.defaultColor || "#000"),
                    onSelect: (color) => {
                        const value = util?.colorConverter?.toHex(color)
                        console.log(color, value)
                        toasts.showToast(`Color Updated ${color} | ${value}`)
                        // storage.colors[obj.id] = value
                    }
                }
                );

                return (<>
                    <FormRow
                        label={obj?.label}
                        subLabel={obj?.subLabel || "Click to Update"}
                        onPress={whenPressed}
                        trailing={
                            <TouchableOpacity onPress={whenPressed}>
                                <Image
                                    source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mJsrQAAAgwBAJ9P6qYAAAAASUVORK5CYII=' }}
                                    style={{
                                        width: 32,
                                        height: 32,
                                        borderRadius: 10,
                                        backgroundColor: customizeableColors.find(x => x?.id == obj?.id)?.defaultColor || "#000"
                                    }}
                                />
                            </TouchableOpacity>
                        }
                    />
                </>)
            })
        }
        </View>
    </>)
}

const styles = stylesheet.createThemedStyleSheet({
    text: {
        color: semanticColors.HEADER_SECONDARY,
        paddingLeft: "5.5%",
        paddingRight: 10,
        marginBottom: 10,
        letterSpacing: 0.25,
        fontFamily: constants.Fonts.PRIMARY_BOLD,
        fontSize: 16
    },
    subText: {
        color: semanticColors.TEXT_POSITIVE,
        paddingLeft: "6%",
        paddingRight: 10,
        marginBottom: 10,
        letterSpacing: 0.25,
        fontFamily: constants.Fonts.DISPLAY_NORMAL,
        fontSize: 12
    },
    input: {
        fontSize: 16,
        fontFamily: constants.Fonts.PRIMARY_MEDIUM,
        color: semanticColors.TEXT_NORMAL
    },
    placeholder: {
        color: semanticColors.INPUT_PLACEHOLDER_TEXT
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    colorPreview: {
        width: "75%",
        height: 100,
        marginBottom: 20,
    },
    row: {
        flexDirection: "row",
        height: 80,
        width: "90%",
        marginBottom: 20
    },
    border: {
        borderRadius: 12
    }
});