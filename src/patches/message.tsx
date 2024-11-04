import { logger } from "@vendetta";
import { findByName } from "@vendetta/metro";
import { before } from "@vendetta/patcher";

export let messagesPatch: (() => void) | undefined;

export function patchMessages() {
    try {
        const MessagesItemChannelContent = findByName("MessagesItemChannelContent");

        if (!MessagesItemChannelContent) {
            logger.log("Could not find MessagesItemChannelContent component");
            return;
        }

        if (!MessagesItemChannelContent.default) {
            logger.log("MessagesItemChannelContent found but has no default export:", MessagesItemChannelContent);
            return;
        }

        messagesPatch = before("default", MessagesItemChannelContent, (props) => {
            try {
                logger.log("MessagesItemChannelContent props:", props[0]);

                const firstProps = props[0];
                if (firstProps?.children) {
                    const children = Array.isArray(firstProps.children)
                        ? firstProps.children
                        : [firstProps.children];

                    children.forEach((child, index) => {
                        logger.log(`Child ${index} type:`,
                            child?.type?.name || child?.type || "unknown type"
                        );
                    });
                }
            } catch (err) {
                logger.log("Error in patch callback:", err);
            }
        });

        logger.log("Successfully patched MessagesItemChannelContent");
    } catch (err) {
        logger.log("Error while setting up patch:", err);
    }
} 