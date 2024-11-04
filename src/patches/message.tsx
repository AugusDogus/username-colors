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

        // Log what we found to help debug
        logger.log("Found Text component:", Text);

        // Try different ways to patch the component
        if (Text.render) {
            messagesPatch = before("render", Text, (props) => {
                logger.log("Text render props:", props[0]);
            });
        } else if (typeof Text === 'function') {
            messagesPatch = before(null, Text, (props) => {
                logger.log("Text function props:", props[0]);
            });
        } else if (Text.default?.render) {
            messagesPatch = before("render", Text.default, (props) => {
                logger.log("Text default.render props:", props[0]);
            });
        } else {
            logger.log("Could not find patchable function on Text component:", Object.keys(Text));
        }

        logger.log("Successfully set up patch");
    } catch (err) {
        logger.log("Error while setting up patch:", err.message);
        logger.log(err.stack);
    }
} 