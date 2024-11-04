import { findByName } from "@vendetta/metro";
import { before } from "@vendetta/patcher";
import { storage } from "@vendetta/plugin";
import { logger } from "@vendetta";

const MessagesItemChannelContent = findByName("MessagesItemChannelContent");

export let messagesPatch: (() => void) | undefined;

export function patchMessages() {
    messagesPatch = before("default", MessagesItemChannelContent, ([props]) => {
        // Log the full props object
        logger.log("MessagesItemChannelContent props:", props);
        
        // If there are children, log their type/name
        if (props.children) {
            const children = Array.isArray(props.children) ? props.children : [props.children];
            children.forEach((child, index) => {
                logger.log(`Child ${index} type:`, child?.type?.name || child?.type);
            });
        }
    });
} 