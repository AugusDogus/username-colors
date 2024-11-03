import { findByName, findByProps } from '@vendetta/metro';
import { constants, React, stylesheet } from "@vendetta/metro/common";
import { storage } from '@vendetta/plugin';
import { semanticColors, toasts } from "@vendetta/ui";
import { Forms, General } from "@vendetta/ui/components";
import * as util from '../util';
const { ScrollView, View, Text, TouchableOpacity, TextInput, Pressable, Image } = General;
const { FormLabel, FormIcon, FormArrow, FormRow, FormSwitch, FormSwitchRow, FormSection, FormDivider, FormInput, FormSliderRow } = Forms;
const HelpMessage = findByName("HelpMessage");
const CustomColorPickerActionSheet = findByName("CustomColorPickerActionSheet");
const dialog = findByProps("show", "confirm", "close");

export function ColorPicker() {
    const colorEntries = storage.colors?.entries || [];

    return (<>
        <View style={[styles.subText]}>{
            colorEntries?.map((entry) => {
                const whenPressed = () => util.openSheet(
                    CustomColorPickerActionSheet, {
                    color: util?.colorConverter?.toInt(entry.color || "#000"),
                    onSelect: (color) => {
                        const value = util?.colorConverter?.toHex(color)
                        console.log(color, value)
                        toasts.showToast(`Color Updated for ${entry.userId}`)

                        const updatedEntries = colorEntries.map(e =>
                            e.userId === entry.userId ? { ...e, color: value } : e
                        );
                        storage.colors = { entries: updatedEntries };
                    }
                });

                return (<>
                    <FormRow
                        label={`User ID: ${entry.userId}`}
                        subLabel="Click to update color"
                        onPress={whenPressed}
                        trailing={
                            <TouchableOpacity onPress={whenPressed}>
                                <Image
                                    source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mJsrQAAAgwBAJ9P6qYAAAAASUVORK5CYII=' }}
                                    style={{
                                        width: 32,
                                        height: 32,
                                        borderRadius: 10,
                                        backgroundColor: entry.color || "#000"
                                    }}
                                />
                            </TouchableOpacity>
                        }
                    />
                </>)
            })
        }</View>
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