import { Hero } from 'compositions';
import { FormBox } from 'compositions';
import { InputField } from 'primitives';
import { Button } from 'primitives';
import { TextContentTitle } from 'primitives';

const DemoView = () => {
    return (
<Hero variant="subtle">
    <TextContentTitle
        align="center"
        title="Title"
        subtitle="Subtitle"
    />
    <ButtonGroup align="justify">
        <Button
            onPress={() => {}}
            variant="neutral"
        >
            Button
        </Button>
        <Button
            onPress={() => {}}
            variant="primary"
        >
            Button
        </Button>
    </ButtonGroup>
</Hero>
);
};

export default DemoView;