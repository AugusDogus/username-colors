import { logger } from "@vendetta";
import { findByDisplayName, findByName } from "@vendetta/metro";
import { before } from "@vendetta/patcher";

export let messagesPatch: (() => void) | undefined;

export function patchMessages() {
    try {
        const Text = findByName("Text") || findByDisplayName("Text");

        if (!Text) {
            logger.log("Could not find Text component");
            return;
        }

        messagesPatch = before("default", Text, (props) => {
            try {
                // Log all text content to help us identify username texts
                if (props[0]?.children) {
                    logger.log("Text content:", props[0].children);
                    logger.log("Text props:", props[0]);
                }
            } catch (err) {
                logger.log("Error in patch callback:", err);
            }
        });

        logger.log("Successfully patched Text component");
    } catch (err) {
        logger.log("Error while setting up patch:", err);
    }
} 