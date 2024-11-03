import { Forms, General, Search } from "@vendetta/ui/components";
import { ColorPicker } from './components/color-picker';
import { TextInput } from './components/text-input';
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
                <ColorPicker />
                <Search />
            </FormSection >
        </>
    )
}