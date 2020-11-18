import React from 'react';

function CapsLock(props) {
    const textoInserido = props.children;

    return (
        <p>
            {textoInserido.map(tag => {
                let props = {}
                let texto = ""
                if (tag.length != undefined) {
                    texto = tag;
                    return texto.toUpperCase()
                } else {
                    texto = tag.props.children;
                    if (tag.props.className != undefined) {
                        props = {className: tag.props.className};
                    }
                    
                    return React.createElement(tag.type, props, texto.toUpperCase())
                }

                
            })}
        </p>
    )
};

export default CapsLock;