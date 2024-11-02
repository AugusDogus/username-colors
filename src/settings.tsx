import { Forms, General, Search } from "@vendetta/ui/components";
import { TextInput } from './components/text-input';
import { DiscordColorPicker } from './components/color-picker';
const { FormText, FormSection } = Forms;
const { Button } = General;

export function Settings() {
    return (
        <>
            <FormSection title="Username Colors">
                <FormText>
                    Hello, world!
                </FormText>
                <TextInput />
                <DiscordColorPicker />
                <Search />
            </FormSection >
        </>
    )
}