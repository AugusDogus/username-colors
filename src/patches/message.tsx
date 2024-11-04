import { findByName, findByProps } from "@vendetta/metro";
import { before } from "@vendetta/patcher";
import { storage } from "@vendetta/plugin";

// Get the MessageUsername component
const MessageUsername = findByProps("MessageUsername")?.MessageUsername;

export let messagesPatch: (() => void) | undefined;

export function patchMessages() {
    messagesPatch = before("default", MessageUsername, ([props]) => {
        const userId = props?.message?.author?.id;
        if (!userId) return;

        const colorEntry = storage.colors?.entries?.find(entry => entry.userId === userId);
        if (!colorEntry) return;

        // Modify the username color
        if (!props.style) props.style = {};
        props.style.color = colorEntry.color;
    });
} 