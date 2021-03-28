import React, { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

const Accordian = (props) => {

    const [ activeIndex, setActiveIndex ] = useState(-1);

    const setIndex = (index) => {
        index === activeIndex ? setActiveIndex(-1) : setActiveIndex(index);
    };
   
    const renderedItems = props.items.map((item, index) => {
        return(
            <React.Fragment key={index}>
                <Accordion.Title active={index === activeIndex} onClick={() => setIndex(index)}>
                    <Icon name='dropdown'/>
                    {item.title}
                </Accordion.Title>
                <Accordion.Content active={index === activeIndex}>{item.content}</Accordion.Content>
            </React.Fragment>
        )
    });

    return(
        <Accordion styled>{renderedItems}</Accordion>
    );
}

export default Accordian;