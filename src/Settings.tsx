import { Forms, General, Search } from "@vendetta/ui/components";
const { FormText, FormSection } = Forms;
const { Button } = General;

export default () => (
    <>
        <FormSection title="Username Colors">
            <FormText>
                Hello, world!
            </FormText>
            <Button>
                Hello, world!
            </Button>
            <Search />
        </FormSection >
    </>
)