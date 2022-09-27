(() => {

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

    interface HtmlElementProps {
        id: string;
        type: HtmlType;
    }

    class HtmlElement {
        public id: string;
        public type: HtmlType;

        constructor({ id, type }: HtmlElementProps) {
            this.id = id;
            this.type = type;
        }
    }

    interface InputAttributesProps {
        placeholder: string;
        value: string;
    }

    class InputAttributes {
        public placeholder: string;
        public value: string;

        constructor({ placeholder, value }: InputAttributesProps) {
            this.placeholder = placeholder;
            this.value = value;
        }
    }

    class InputEvents {
        constructor() { }

        getValue() { };
        isActive() { };
        removeValue() { };
        setFocus() { };
    }

    interface InputElementProps {
        id: string;
        placeholder: string;
        value: string;
    }

    //? Idea para la nueva clase InputElement
    class InputElement {
        public attributes: InputAttributes;
        public events: InputEvents;
        public html: HtmlElement;

        constructor({
            id,
            placeholder, value
        }: InputElementProps) {
            this.attributes = new InputAttributes({ value, placeholder })
            this.events = new InputEvents();
            this.html = new HtmlElement({ id, type: 'input' });
        }
    }

    const nameField = new InputElement({
        id: 'Title',
        placeholder: 'Enter the title',
        value: 'Title'
    });

    console.log({ nameField });

})()