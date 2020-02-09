import React from 'react';
import {action} from '@storybook/addon-actions';
import {Button} from '@storybook/react/demo';
import {withPseudo} from "storybook-addon-pseudo-states-react";
import {SimpleButton} from "../SimpleButton/simple-button";
// import {storiesOf} from "@storybook/react";


export default {
    title: 'Button',
    decorators: [
        withPseudo
    ],
};

export const simpleButton = () => <SimpleButton label={'ButtonLabel'}/>;

export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const emoji = () => (
    <Button onClick={action('clicked')}>
    <span role="img"
          aria-label="so cool">
      😀 😎 👍 💯
    </span>
    </Button>
);



/*
storiesOf('Buttons', module)
    .addDecorator(withPseudo)
    .add('Button', () => (
        <Button onClick={action('clicked')}>
                 <span role="img"
                       aria-label="so cool">
                   😀 😎 👍 💯
                 </span>
        </Button>
    ));
*/
